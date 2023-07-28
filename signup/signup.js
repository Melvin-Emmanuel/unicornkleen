
document.getElementById('signup').addEventListener('click', (e) => {
    e.preventDefault()
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (userName.trim().length === 0 || email.trim().length ===0|| password.trim().length===0) {
        document.getElementById('container').style.border = '4px solid red'
        document.getElementById('error').style.visibility='visible'
        document.getElementById('error').style.backgroundColor='red'
    } else {
        location.href = '../login/login.html'
        localStorage.setItem('username', userName)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        console.log('run')
        
    }
})