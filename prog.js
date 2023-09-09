// Add event listener to "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".products button");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Function to add product to cart
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector("h3").innerText;
  var productPrice = product.querySelector("p").innerText;
  
  // Add product to cart
  var cart = document.querySelector(".cart ul");
  var cartItem = document.createElement("li");
  cartItem.innerText = productName + " - " + productPrice;
  cart.appendChild(cartItem);
  
  // Update cart total
  var cartTotal = document.querySelector(".cart p");
  var currentTotal = parseFloat(cartTotal.innerText.replace("$", ""));
  var newTotal = currentTotal + parseFloat(productPrice.replace("$", ""));
  cartTotal.innerText = "$" + newTotal.toFixed(2);
}

// Add event listener to checkout button
var checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", checkout);

// Function to checkout and place order
function checkout(event) 
{
  var cartItems = document.querySelectorAll(".cart ul li");
  var orderSummary = "";
  
  for (var i = 0; i < cartItems.length; i++) {
    orderSummary += cartItems[i].innerText + "\n";
  }
  
  alert("Thank you for your order!\n\nOrder Summary:\n" + orderSummary);
  
  // Clear cart
  var cartTotal = document.querySelector(".cart p");
  cartTotal.innerText = "$0.00";
  var cartItems = document.querySelectorAll(".cart ul li");
  for (var i = 0; i < cartItems.length; i++)
   {
    cartItems[i].remove
   }

   }
    // Add event listeners to filter buttons
var filterButtons = document.querySelectorAll(".filter button");
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", filterProducts);
}

// Function to filter products by category
function filterProducts(event)
 {
  var category = event.target.dataset.category;
  var products = document.querySelectorAll(".products .product");
  
 }
  for (var i = 0; i < products.length; i++) {
    var productCategory = products[i].querySelector(".category").innerText;
    
     }
        if (productCategory === category || category === "all") {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  
    // Sample data
const data = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};

// Convert data to JSON
const jsonData = JSON.stringify(data);

// Display JSON data
console.log(jsonData);
