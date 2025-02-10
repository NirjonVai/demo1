function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const toggleButton = document.querySelector('.toggle-btn');
            sidebar.classList.toggle('open');
            toggleButton.innerHTML = sidebar.classList.contains('open') ? '✖' : '☰';
        }

        function showDashboard() {
            document.getElementById('users').style.display = 'none';
            document.getElementById('user-details').style.display = 'none';
            document.getElementById('dashboard-metrics').style.display = 'flex';
            document.querySelector('.main-content h1').innerText = 'Dashboard';
        }

        function showUsers() {
            document.getElementById('users').style.display = 'block';
            document.getElementById('user-details').style.display = 'none';
            document.getElementById('dashboard-metrics').style.display = 'none';
            document.querySelector('.main-content h1').innerText = 'Users';
            loadUsers();
        }

        function loadUsers() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userTableBody = document.getElementById('user-table-body');
            const noUsersMessage = document.getElementById('no-users-message');

            userTableBody.innerHTML = '';

            if (users.length === 0) {
                noUsersMessage.style.display = 'block';
            } else {
                noUsersMessage.style.display = 'none';
                users.forEach((user, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.username}</td>
                        <td>${user.phone}</td>
                        <td>
                            <button class="action-btn" onclick='viewUser(${JSON.stringify(user).replace(/'/g, "\\'")})'>Edit</button>
                        </td>
                        <td>
                            <button class="delete-btn" onclick='deleteUser(${index})'>Delete</button>
                        </td>
                    `;
                    userTableBody.appendChild(row);
                });
            }
        }

        function viewUser(user) {
            document.getElementById('users').style.display = 'none';
            document.getElementById('dashboard-metrics').style.display = 'none';
            document.getElementById('user-details').style.display = 'block';
            document.querySelector('.main-content h1').innerText = 'Edit User';

            // Populate the form with user details
            document.getElementById('username').value = user.username;
            document.getElementById('phone').value = user.phone;
            document.getElementById('password').value = user.password || '';
            
            // Display the join date, user ID, and referral count
            document.getElementById('joindate').innerText = user.joinDate || 'N/A';
            document.getElementById('user-id').value = user.userId;
            document.getElementById('referral-count').value = user.referralCount || 0;
        }

        function updateUser() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));

            const updatedUser = {
                username: document.getElementById('username').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('password').value,
                userId: currentUser.userId, // Keep the existing user ID
                referralCount: currentUser.referralCount, // Keep the existing referral count
                joinDate: currentUser.joinDate // Keep the existing join date
            };

            const index = users.findIndex(user => user.username === currentUser.username);
            if (index !== -1) {
                users[index] = updatedUser;
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            }

            showUsers();
        }

        function deleteUser(index) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            loadUsers();
        }

        function showWithdrawal() {
            window.location.href = 'withdrawalHistory.html';
        }

        function showSettings() {
            alert('Settings page is not implemented yet.');
        }

        function showReports() {
            alert('Reports page is not implemented yet.');
        }

        function logout() {
            alert('Logout functionality is not implemented yet.');
        }