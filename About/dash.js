alert("this is a d dash")

document.getElementById("logout").addEventListener("click", function(){
    localStorage.removeItem("Email")
    localStorage.removeItem("Pass")
    localStorage.removeItem("UserName")

    window.location.href = "Sign in.html"

})

function checkLogin(){
    let checkEmail = localStorage.getItem("Email")
    let checkPass = localStorage.getItem("Pass")

    console.log(checkEmail,checkPass)
    if(!checkEmail && ! checkPass)
    {
        window.location.href = "Sign in.html"
    }
}

window.onload = checkLogin()