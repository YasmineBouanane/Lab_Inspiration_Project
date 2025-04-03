function showLogin() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function showSignup() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
}

function goHome() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

function signup() {
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    
    if (username && email && password) {
        document.getElementById('userInfo').innerText = `Welcome, ${username}!\nEmail: ${email}`;
        document.getElementById('signup').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    } else {
        alert('Please fill in all fields.');
    }
}