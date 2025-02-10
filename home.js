        // Function to toggle the sidebar visibility
        document.getElementById('toggleButton').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('icon');
            sidebar.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
        
        const button = document.getElementById('myTask');
        const divBox = document.getElementById('task-container');
        const dashboard = document.getElementById('Home-page');
        const dashboardLink = document.getElementById('dashboard-link');

        // Toggle between Dashboard and Task container visibility
        dashboardLink.onclick = function() {
            divBox.style.display = 'none'; 
            dashboard.style.display = 'block';
        }

        button.onclick = function() {
            // Toggle the visibility of the div
            if (divBox.style.display === 'none' || divBox.style.display === '') {
                divBox.style.display = 'block';
                dashboard.style.display = 'none';
            } else {
                divBox.style.display = 'none';
                dashboard.style.display = 'block';
            }
        };

        // Add event listeners to close sidebar when any li is clicked
        const sidebarLinks = document.querySelectorAll('#sidebar li');
        sidebarLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('open');
                const icon = document.getElementById('icon');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });

        let totalEarnings = 0;
        let username = localStorage.getItem("username");

        function initializeUserData() {
            if (username) {
                totalEarnings = parseFloat(localStorage.getItem(`${username}_earnings`)) || 0;
            }
        }

        function updateDisplayedEarnings() {
            const walletEarningsElement = document.getElementById('wallet-earnings');
            walletEarningsElement.textContent = ` ৳${Math.floor(totalEarnings)}`; // Updated to show integer without decimals
        }

        function addTask(taskId) {
            const taskKey = `${username}_task_${taskId}_date`;
            const currentDate = getCurrentDate();

            let taskCompletionDate = localStorage.getItem(taskKey);

            // Check if task has been completed today
            if (taskCompletionDate === currentDate) {
                alert("You've already completed this task today!");
                disableButton(taskId);
                return;
            }

            totalEarnings += 10; // Add 10৳ per task
            localStorage.setItem(`${username}_earnings`, totalEarnings); // Save the new earnings
            localStorage.setItem(taskKey, currentDate); // Save the completion date
            updateDisplayedEarnings(); // Update the displayed earnings
            disableButton(taskId); // Disable the button after task completion
        }

        function startCountdown(taskId, timeElementId) {
            let remainingTime = 0; // 2:30 minutes in seconds (2*60 + 30)
            const timeElement = document.getElementById(timeElementId);

            const countdown = setInterval(function() {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                timeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

                if (remainingTime <= 0) {
                    clearInterval(countdown);
                    addTask(taskId);
                }

                remainingTime--;
            }, 1000);
        }

        function disableButton(taskId) {
            const taskButton = document.getElementById(`task${taskId}`);
            taskButton.disabled = true;
            taskButton.textContent = 'Completed';
        }

        function getCurrentDate() {
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth() + 1; // Months are zero-indexed
            const year = today.getFullYear();
            return `${day}-${month}-${year}`;
        }

        function resetTasksAtMidnight() {
            const now = new Date();
            const nextMidnight = new Date();
            nextMidnight.setHours(24, 0, 0, 0); // Set to next midnight

            const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

            setTimeout(function() {
                // Reset tasks and enable buttons after midnight
                for (let i = 1; i <= 5; i++) {
                    const taskKey = `${username}_task_${i}_date`;
                    localStorage.removeItem(taskKey); // Remove task completion date
                    const taskButton = document.getElementById(`task${i}`);
                    taskButton.disabled = false; // Enable the button
                    taskButton.textContent = 'Click Now';
                }
                // Call the reset function again at the next midnight
                resetTasksAtMidnight();
            }, timeUntilMidnight);
        }

        window.onload = function() {
            initializeUserData();
            updateDisplayedEarnings();

            if (username) {
                document.getElementById("username-display").textContent = ` ${username}`;
            }

            // Add event listeners for the task buttons
            document.getElementById('task1').addEventListener('click', function() { 
                window.location.href = 'https://task-bd.com'; 
                startCountdown(1, 'left-time-1'); 
            });
            document.getElementById('task2').addEventListener('click', function() { 
                window.location.href = 'https://task-bd.com'; 
                startCountdown(2, 'left-time-2'); 
            });
            document.getElementById('task3').addEventListener('click', function() { 
                window.location.href = 'https://task-bd.com'; 
                startCountdown(3, 'left-time-3'); 
            });
            document.getElementById('task4').addEventListener('click', function() { 
                window.location.href = 'https://task-bd.com'; 
                startCountdown(4, 'left-time-4'); 
            });
            document.getElementById('task5').addEventListener('click', function() { 
                window.location.href = 'https://task-bd.com'; 
                startCountdown(5, 'left-time-5'); 
            });

            // Set the current date for each task
            document.getElementById('task1-date').textContent = `Date: ${getCurrentDate()}`;
            document.getElementById('task2-date').textContent = `Date: ${getCurrentDate()}`;
            document.getElementById('task3-date').textContent = `Date: ${getCurrentDate()}`;
            document.getElementById('task4-date').textContent = `Date: ${getCurrentDate()}`;
            document.getElementById('task5-date').textContent = `Date: ${getCurrentDate()}`;

            // Disable buttons for completed tasks
            for (let i = 1; i <= 5; i++) {
                const taskKey = `${username}_task_${i}_date`;
                const taskCompletionDate = localStorage.getItem(taskKey);
                if (taskCompletionDate === getCurrentDate()) {
                    disableButton(i);
                }
            }

            // Start task reset process
            resetTasksAtMidnight();
        };

        function logout() {
            // Clear only task-specific data, keeping earnings and username
            window.location.href = 'login.html?form=login';
        }

        document.getElementById('logout-btn').addEventListener('click', logout);

        function goToProfile() {
            window.location.href = 'profile.html';
        }

        function goToWithdraw() {
            window.location.href = 'Withdrawal.html';
        }
        
        function goToReferral() {
            window.location.href = 'Referral.html';
        }

        function goToHistory() {
            window.location.href = 'history.html';
        }