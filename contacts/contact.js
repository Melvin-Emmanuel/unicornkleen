const ObjectArray = [
  {
    name: "emmanuel",
    email: "emmanul@gmail.com",
    service: "waste removal",
    message: "waste removal services needed",
  },
  {
    name: "jude",
    email: "jude@gmail.com",
    service: "office cleaning",
    message: "next week appointment",
  },
  {
    name: "melvin",
    email: "melvin@gmail.com",
    service: "house cleaning",
    message: "needed urgently",
  
  },
];

console.log(ObjectArray);
// ObjectArray.push({ name: 'john', phoneNumber: 23478578585, service: 'office dusting' })
const getFromLocal = () => {
  let gotten = new Array();
  gotten = JSON.parse(localStorage.getItem("userInfo"));
  return gotten;
};
console.log(getFromLocal());
document.getElementById("appoint").addEventListener("click", (e) => {
  e.preventDefault();

  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userService = document.getElementById("service").value;
  let userMessage = document.getElementById("message").value;
  console.log(userEmail, userName, userMessage, userService);
  let getValue = getFromLocal();
  getValue.push({ name: userName, email: userEmail, service: userService,message:userMessage });
  localStorage.setItem("userInfo", JSON.stringify(getValue));
  return false
});
