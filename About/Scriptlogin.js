document.getElementById("btn_log").addEventListener("click",function(event){
    event.preventDefault()
    let loge = document.getElementById("logemail").value
    let logp = document.getElementById("logpass").value

    let gete = localStorage.getItem("Email")
    let getp = localStorage.getItem("Pass")

    console.log(gete, getp)
    if(loge === gete && logp === getp)
    {
        alert("login successful")
        window.location.href = "dash.html"
    }else
    {
        alert("login failed, wrong password and email try again")
    }
})