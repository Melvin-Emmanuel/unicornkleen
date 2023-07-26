const objectaArray = [
    {
        message: 'hello',
        location: 'lagos',
        date: new Date('2023-07-26'),
        service: 'cleaning service',
        number: 2347086758713,
        email: 'emmanulmelv@gmail.com',
        name:'kode10x'
    },
]
console.log(objectaArray)
const getFromLocal=()=>{
    let newArray = new Array
   newArray= JSON.parse(localStorage.getItem('appointmentInfo'))
    return newArray
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    let userMessage=document.getElementById('message').value
    let userNumber=document.getElementById('number').value
    let userLocation=document.getElementById('location').value
    let userDate=document.getElementById('date').value=new Date()
    let userService=document.getElementById('service').value
    let userEmail=document.getElementById('email').value
    let userName = document.getElementById('name').value
    let getValue = getFromLocal()
    getValue.push({ name: userName, email: userEmail, service: userService, date: userDate, location: userLocation, number: userNumber, message: userMessage })
    localStorage.setItem("appointmentInfo", JSON.stringify(getValue));
    console.log(userDate,userEmail,userLocation,userMessage,userName,userNumber,userService)
    return false
    
    
})

