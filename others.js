// Function to toggle the sidebar visibility
        document.getElementById('toggleButton').addEventListener('click', function() {
            const sidebar = document.getElementById('sidebar');
            const icon = document.getElementById('icon');
            sidebar.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

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
        
        
        function goToProfile() {
            window.location.href = 'profile.html';
        }
        
        function goToTask() {
            window.location.href = 'task.html';
        }

        function goToWithdraw() {
            window.location.href = 'withdraw.html';
        }
        
        function goToReferral() {
            window.location.href = 'Referral.html';
        }

        function goToHistory() {
            window.location.href = 'history.html';
        }
        
        function goToReward() {
            window.location.href = 'Reward.html';
        }
        
        
         // Toggle between login and signup forms
        document.getElementById('login-btn').addEventListener('click', function() {
            document.getElementById('login-form').classList.add('active');
            document.getElementById('signup-form').classList.remove('active');
            this.classList.add('active');
            document.getElementById('signup-btn').classList.remove('active');
        });

        document.getElementById('signup-btn').addEventListener('click', function() {
            document.getElementById('signup-form').classList.add('active');
            document.getElementById('login-form').classList.remove('active');
            this.classList.add('active');
            document.getElementById('login-btn').classList.remove('active');
        });
        
        const fakeNames = [
  "John Doe", 
  "Jane Smith", 
  "Sam Brown", 
  "Lisa Green", 
  "Michael Black", 
  "Rahim Uddin", 
  "Fatema Begum", 
  "Shahidul Islam", 
  "Moushumi Khatun", 
  "Sohail Ahmed",
  "Ahsan Habib",
  "Rashid Khan",
  "Nusrat Jahan",
  "Hasan Mahmud",
  "Salma Akter",
  "Shahina Begum",
  "Sujon Rahman",
  "Shirin Akter",
  "Mahfuzur Rahman",
  "Nazma Akter",
  "Zahidul Islam",
  "Zubair Hossain",
  "Tariq Aziz",
  "Marina Begum",
  "Kazi Rakib",
  "Morshed Alam",
  "Sumaiya Sultana",
  "Hossain Ali",
  "Ayesha Siddiqa",
  "Abdul Aziz",
  "Farhana Rahman",
  "Mohammad Ali",
  "Mokhlesur Rahman",
  "Nashit Rahman",
  "Fahim Ahmed",
  "Rima Akter",
  "Shahriar Kabir",
  "Shakil Ahmed",
  "Hena Begum",
  "Tanjin Tisha",
  "Rashida Begum",
  "Pritom Saha",
  "Rifat Rahman",
  "Aminul Islam",
  "Jannat Akter",
  "Moushumi Rahman",
  "Abdul Quader",
  "Meherun Nesa",
  "Shamsul Alam",
  "Rifat Hossain",
  "Tariqul Islam",
  "Ruhul Amin",
  "Sakina Begum",
  "Shariar Ahmed",
  "Sabina Yasmin",
  "Mizanur Rahman",
  "Nashitul Islam",
  "Moyna Akter",
  "Ibrahim Khalil",
  "Fariha Rahman",
  "Hasina Begum",
  "Shakila Sultana",
  "Suman Mahmud",
  "Fahmida Akter",
  "Rohit Hossain",
  "Tariq Ahmed",
  "Rahatul Islam",
  "Kaisar Ahmed",
  "Shabnam Sultana",
  "Murtaza Rahman",
  "Nashid Rahman",
  "Sadek Ali",
  "Rabiul Islam",
  "Mehedi Hasan",
  "Rumana Akter",
  "Sazid Hossain",
  "Nazrul Islam",
  "Khademul Islam",
  "Saba Sultana",
  "Kamrul Hasan",
  "Joya Khatun",
  "Shimu Akter",
  "Ishrat Jahan",
  "Hassan Ahmed",
  "Alamgir Hossain",
  "Asif Mahmud",
  "Rizia Akter",
  "Khondokar Rahman",
  "Shamim Akter",
  "Khan Jamil",
  "Shakil Rahman",
  "Samiul Islam",
  "Faruk Hossain",
  "Rumana Khatun",
  "Shahinur Rahman",
  "Alia Sultana",
  "Mustafa Ahmed",
  "Sajib Rahman",
  "Shahida Begum",
  "Mahbub Alam",
  "Sana Rahman",
  "Asma Begum",
  "Mokarram Hossain",
  "Saddam Hossain",
  "Aysha Begum",
  "Abir Rahman",
  "Shamim Ahmed",
  "Tanveer Ali",
  "Neha Begum",
  "Roksana Begum",
  "Afnan Hossain",
  "Nadir Rahman",
  "Mansur Ali",
  "Dipta Saha",
  "Monir Hossain",
  "Ashikur Rahman",
  "Liza Akter",
  "Fahad Hossain",
  "Mojibur Rahman",
  "Salma Begum",
  "Mushfiqur Rahman",
  "Kazi Rashid",
  "Dilruba Begum",
  "Tareq Hossain",
  "Khalil Rahman",
  "Rabeya Sultana",
  "Nazmul Islam",
  "Safiqur Rahman",
  "Samsul Haque",
  "Uttam Chakraborty",
  "Samira Akter",
  "Shahanur Rahman",
  "Asif Ali",
  "Shamsur Rahman",
  "Nipa Akter",
  "Juel Hossain",
  "Sharmin Akter",
  "Shayma Akter",
  "Aslam Ali",
  "Tanveer Ahmed",
  "Sabina Khatun",
  "Kausar Jahan",
  "Mizan Ahmed",
  "Kanchan Ali",
  "Sultan Rahman",
  "Shubho Saha",
  "Ishrak Hossain",
  "Afroza Begum",
  "Asad Rahman",
  "Mohammad Zakir",
  "Nazma Begum",
  "Kamrul Reza",
  "Masud Ali",
  "Saeed Ali",
  "Mahfuz Rahman",
  "Shahinur Rahman",
  "Rian Hossain",
  "Rumana Rahman",
  "Sakeena Begum",
  "Ameena Begum",
  "Sushil Kumar",
  "Arif Mahmud",
  "Sadia Sultana",
  "Kazi Meherun",
  "Mohammad Munir",
  "Foysal Hossain",
  "Mohammad Shakil",
  "Sazeda Begum",
  "Mohammad Akram",
  "Rathin Roy",
  "Arshad Rahman",
  "Manzoor Rahman",
  "Rehana Akter",
  "Asif Mehmood",
  "Shahajahan Ali",
  "Khaled Hossain",
  "Shaila Akter",
  "Moshiur Rahman",
  "Sharif Ahmed",
  "Rafiqul Islam",
  "Nayeem Ahmed",
  "Sabbir Hossain",
  "Sabbir Rahman",
  "Shahnaz Akter",
  "Shamim Akter",
  "Gazi Alim",
  "Mushfiqur Rahman",
  "Khandaker Shakil",
  "Abdul Latif",
  "Tanvir Rahman",
  "Mithu Begum",
  "Rubina Begum",
  "Mahmudur Rahman",
  "Shamima Begum"
];
        
        