document.getElementById('login').addEventListener('click', (e) => {
e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let localemail=localStorage.getItem('email')
    let localpassword=localStorage.getItem('password')
    let localuserName=localStorage.getItem('username')
   
    
    if (email === localemail || email === localuserName && password === localpassword) {
        alert("login successful")
        location.href='../blog/blog.html'
    }
    else {
        document.getElementById('error').style.visibility='visible'
    }

})