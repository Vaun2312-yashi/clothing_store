<?php
session_start(); // Start the session
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $hashed_password);

if ($stmt->fetch() && password_verify($password, $hashed_password)) {
    $_SESSION['user_id'] = $id; // Store user ID in session
    $_SESSION['username'] = $username; // Store username in session
    echo "Login successful!";
} else {
    echo "Invalid credentials!";
}

$stmt->close();
$conn->close();
?>