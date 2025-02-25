fetch('php/get_users.php')
    .then(response => response.json())
    .then(users => {
        const tableBody = document.querySelector('#userTable tbody');
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    });

function editUser(id) {
    alert(`Edit user with ID: ${id}`);
}

function deleteUser(id) {
    alert(`Delete user with ID: ${id}`);
}