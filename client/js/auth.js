const navbarUserStatusEl = document.getElementById("user-status");
const productNameEl = document.querySelector("[data-productName]");
const productPriceEl = document.querySelector("[data-price]");
const productTypeEl = document.querySelector("[data-type]");
const productBrandEl = document.querySelector("[data-brand]");

const productBoxEl = document.querySelector("[data-productBox]");
let productButton = '';


async function initialUser() {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const res = await fetch("http://localhost:3002/user/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const user = await res.json();
// console.log(user);
return user
  
}


async function initialApp() {
  
  const user = await initialUser();

 
  if (!user) {
    navbarUserStatusEl.innerHTML = "please Login";
    navbarUserStatusEl.addEventListener("click",  () => {
     return window.location.href = "/client/login.html"
     });
   
    
  } else {
    generateElements(user)
    navbarUserStatusEl.innerHTML = `User - ${user.user.username} not you? <span>Click here to log out</span> `;
    navbarUserStatusEl.addEventListener("click",  () => {
      localStorage.removeItem("token")
     
     return location.reload();
       
     });
  }
}
function generateElements(user) {


    if (user) {
      user.user.products.forEach((item)=> {
      if (item ) {
        let ProductHtml = `<ul>
        <img src="${item.picture}" alt="item-picture" width="100" height="100">
        <li>Name: ${item.productName}</li>
        <li>Type: ${item.type}</li>
        <li>Brand: ${item.brand}</li>
        <li>Price: ${item.price}</li>
        </ul>
        `
        productBoxEl.innerHTML += ProductHtml
       
      }
      
      })
      
    }
   
  }

initialApp();

