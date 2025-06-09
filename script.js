import { renderUsers } from "./renderUsers.js";

const USERS_URL = 'https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json';
const userContainer = document.getElementById('user-container');

document.getElementById('get-all-users').addEventListener('click', () => {
    fetch(USERS_URL)
        .then(responses => responses.json())
        .then(users => renderUsers(users, userContainer))
        .catch(error => {
            console.error(`Error fetching users:`, error);
        });
});

document.getElementById('get-filtered-users').addEventListener('click', () => {
    fetch(USERS_URL)
        .then(responses => responses.json())
        .then(users => {
            const filteredUsers = users.filter(user => user.yearsEmployed < 10);
            renderUsers(filteredUsers, userContainer);
        })
        .catch(error => {
            console.error(`Error fetching users:`, error);
        });
});

document.getElementById('reset-users').addEventListener('click', () => {
    userContainer.innerHTML = '';
});