export function renderUsers(users, container) {
    container.innerHTML = '';
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
}