const productsBoxEl = document.querySelector("[data-productsBox]");
const buttons = document.getElementsByTagName("button")

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
// console.log(user.user._id);


return user
  
}
async function fetchProducts() {
    try {
        const res = await fetch("http://localhost:3002/product/getAll");
        const data = await res.json();
        console.log(data);
        generateElements(data);

    } catch (error) {

    }
}
initialUser()
function generateElements(data) {


    if (data.Products && data.Products.length) {
      let ProductHtml = ''
        for (let item of data.Products) {
          if (item._id) {
            ProductHtml += `<ul id="productList-${item.type}">
        <img src="${item.picture}" alt="item-picture" width="100" height="100">
        <li>Name: ${item.productName}</li>
        <li>Type: ${item.type}</li>
        <li>Brand: ${item.brand}</li>
        <li>Price: ${item.price}</li>
        <li>add to favorites<button id="${item._id}" data-productButton class="mosheSlow">+</button></li>
        </ul>
        `
          }
             
      }
      productsBoxEl.innerHTML = ProductHtml

      let btns = document.querySelectorAll('button');
      for (i of btns) {
        i.addEventListener('click', async function(e) {
          const user = await initialUser();
          console.log(e.target.id);
          console.log("this is my user"+user.user._id);
          try {
            
     
          const res = await fetch("http://localhost:3002/user/updateone", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({  _id: user.user._id,products: e.target.id, }),
            
          });
          const updatedUser = await res.json();
          console.log(updatedUser);
          } catch (error) {
            console.log("error in updating user with product");
          }
   


        });
      }





    }

}

async function addProductToFavorites(event) {
    

   
   
    
}


fetchProducts();
