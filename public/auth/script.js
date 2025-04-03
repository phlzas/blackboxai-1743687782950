document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const registerLink = document.getElementById('registerLink');
    const roleSelect = document.getElementById('role');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const closeToast = document.getElementById('closeToast');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="far fa-eye"></i>' : '<i class="far fa-eye-slash"></i>';
    });

    // Handle form submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = roleSelect.value;

        // Validate inputs
        if (!role) {
            showToast('Please select your role');
            return;
        }

        if (!email || !password) {
            showToast('Please fill in all fields');
            return;
        }

        // Simulate API call (replace with actual fetch)
        try {
            // In a real implementation, this would be:
            // const response = await fetch('/api/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ email, password, role })
            // });
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Simulate successful login
            localStorage.setItem('authToken', 'simulated-token');
            localStorage.setItem('userRole', role);
            
            // Redirect based on role
            const redirectUrl = role === 'student' ? '/student-dashboard.html' : '/coach-dashboard.html';
            window.location.href = redirectUrl;
            
        } catch (error) {
            console.error('Login error:', error);
            showToast('Login failed. Please try again.');
        }
    });

    // Handle register link click
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        const role = roleSelect.value;
        
        if (!role) {
            showToast('Please select your role first');
            return;
        }
        
        const registerUrl = role === 'student' 
            ? '/auth/register/student.html' 
            : '/auth/register/coach.html';
            
        window.location.href = registerUrl;
    });

    // Toast notification functions
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }

    closeToast.addEventListener('click', function() {
        toast.classList.add('hidden');
    });
});