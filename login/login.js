document.getElementById('login').addEventListener('click', (e) => {
e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let localemail=localStorage.getItem('email')
    let localpassword=localStorage.getItem('password')
    let localuserName=localStorage.getItem('username')
   
    
    if (email === localemail || email === localuserName && password === localpassword) {
        alert("login successful")
        location.href='../landing/landing.html'
    }
    else {
        document.getElementById('error').style.visibility='visible'
    }

})
const  checklogin = () => {
    let email=localStorage.getItem('email')
    let password = localStorage.getItem('password')
    if (!email && !password) {
        location.href='../signup/signup.html'
    }
}
checklogin()
