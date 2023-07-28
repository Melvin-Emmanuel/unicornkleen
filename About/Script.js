document.getElementById("btn_reg").addEventListener("click",function(e){
   // alert("you click me")
    e.preventDefault()
    let uName = document.getElementById("Usename").value
    let uEmail = document.getElementById("Useremail").value
    let uPassword = document.getElementById("Userpass").value

    if(uName.trim().length === 0 || uPassword.trim().length === 0 || uEmail.trim().length === 0)
    {
        alert("please enter all field")
    }else
    {
        console.log(uEmail,uName,uPassword)
        localStorage.setItem("User Name", uName)
        localStorage.setItem("Email", uEmail)
        localStorage.setItem("Pass",uPassword)
    }

})
 
