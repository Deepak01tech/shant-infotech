import nav from "./navbar.js";

let navbarHTML = nav();
document.getElementById("navbar").innerHTML = navbarHTML;

console.log("This is the cart.js file");

let cartItems = JSON.parse(localStorage.getItem("cart_data")) || [];

console.log(cartItems);

function displayCartItems() {
    let cartContainer = document.getElementById("main");
    //cartContainer.innerHTML = "";
    cartItems.forEach((item) => {
        let cartItemDiv = document.createElement("div");

        let cartItemImage = document.createElement("img");
        cartItemImage.src = item.img;
        let cartItemName = document.createElement("h3");
        cartItemName.innerText = item.name;
         let description = document.createElement("p");
         description.innerText = item.description;
        let cartItemPrice = document.createElement("p");
        cartItemPrice.innerText =  item.price;

        cartItemDiv.appendChild(cartItemImage);
        cartItemDiv.appendChild(cartItemName);
        cartItemDiv.appendChild(description);
        cartItemDiv.appendChild(cartItemPrice);

        main.appendChild(cartItemDiv);
        });

    }
 displayCartItems();


