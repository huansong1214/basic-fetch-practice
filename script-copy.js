document.getElementById('get-all-users').addEventListener('click', () => {
    fetch('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json')
        .then(responses => responses.json())
        .then(users => {
            const container = document.getElementById(`user-container`)
            container.innerHTML = ''; // Clear before rendering
            
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user-card';

                card.innerHTML = `
                    <p>${user.firstName} ${user.lastName}</p>
                    <p>${user.email}</p>
                    <p>Company: ${user.companyName}</p>
                    <p>Years Employed: ${user.yearsEmployed}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error(`Error fetching users:`, error);
        });
});

document.getElementById('get-filtered-users').addEventListener('click', () => {
    fetch('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json')
        .then(responses => responses.json())
        .then(users => {
            const container = document.getElementById(`user-container`)
            container.innerHTML = ''; // Clear before rendering
            const filteredUsers = users.filter(user => user.yearsEmployed < 10);
            
            filteredUsers.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user-card';

                card.innerHTML = `
                    <p>${user.firstName} ${user.lastName}</p>
                    <p>${user.email}</p>
                    <p>Company: ${user.companyName}</p>
                    <p>Years Employed: ${user.yearsEmployed}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error(`Error fetching users:`, error);
        });
})

document.getElementById('reset-users').addEventListener('click', () => {
    const container = document.getElementById('user-container');
    container.innerHTML = '';
});