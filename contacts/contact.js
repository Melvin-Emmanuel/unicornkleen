let initialCount = 0;
//setting variabole for first decrement button
let bedNum = document.getElementById("bedSize1");
//decreasing value by one on buttton click
document.getElementById("minus").addEventListener("click", (e) => {
  e.preventDefault();
  bedNum.innerHTML = initialCount--;
  // preventing value from being negative
  if (bedNum.innerHTML <= 0) {
    initialCount = 0;
  }
});
//incrementing values by one
document.getElementById("plus").addEventListener("click", function (e) {
  e.preventDefault();
  bedNum.innerHTML = initialCount++;
});
let bednum2 = document.getElementById("bedSize2");
// decreasing value by one
document.getElementById("minus2").addEventListener("click", (e) => {
  e.preventDefault();
  bednum2.innerHTML = initialCount--;
  //preventing negative value
  if (bednum2.innerHTML <= 0) {
    initialCount = 0;
  }
});
//incrementing valueby one
document.getElementById("plus2").addEventListener("click", function (e) {
  e.preventDefault();
  bednum2.innerHTML = initialCount++;
});

//capturing form data

let arrayOfData = [
  {
    name: "melvin",
    address: "lagos",
    number: 2347086758713,
    mail: "emmanulmelv@gmail.com",
    bedrooms: 567,
    bathrooms: 678,
  },
];
// console.log(arrayOfData)
localStorage.setItem("userDetails", JSON.stringify(arrayOfData));
let getFromStorage = () => {
  let newarray = [];
  newarray = JSON.parse(localStorage.getItem("userDetails"));
  return newarray;
};

// getFromStorage()

document.getElementById("bookNow").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked and working fine ");
  let number = document.getElementById("num").value;
  let email = document.getElementById("mail").value;
  let address = document.getElementById("address").value;
  let name = document.getElementById("nam").value;
  let bedValue1 =parseInt( document.getElementById("bedSize1").innerHTML)
  let bedValue2 = parseInt(document.getElementById("bedSize2").innerHTML);
  let getValue = getFromStorage();
  getValue.push({
    name: name,
    email: email,
    address: address,
    number: number,
    bedroom: bedValue1,
    bathrooms: bedValue2,
  });
  localStorage.setItem("userDetails", JSON.stringify(getValue));
  console.log(bedValue2);
  return false;
});
