//foods
const foods = [
    { name: "Cake", price: 120, img: "images/cake1.webp" },
    { name: "Cake", price: 420, img: "images/cake2.webp" },
    { name: "Dosa", price: 150, img: "images/dosa1.jpg" },
    { name: "Dosa", price: 180, img: "images/dosa2.jpg" },
    { name: "Idli", price: 100, img: "images/idli1.webp" },
    { name: "Idli", price: 110, img: "images/idli2.jpg" },
    { name: "Paratha", price: 130, img: "images/paratha.jpg" },
    { name: "Paratha", price: 150, img: "images/paratha2.jpg" },
    { name: "Poori", price: 110, img: "images/poori.webp" },
    { name: "Poori", price: 120, img: "images/poori1.webp" },
    { name: "Vada", price: 90, img: "images/vada1.jpg" },
    { name: "Vada", price: 95, img: "images/vada2.webp" }
];
const food = document.querySelector("#food");
const cartBtn = document.querySelector("#cartBtn");
const cartCount = document.querySelector("#cartCount");
const login = document.querySelector("#loginBtn");
let cart = [];


//Render the food card
function displayFood(items) {
    food.innerHTML = "";
    items.forEach((item, idx) => {
        // console.log(item);
        const foodCard = document.createElement("div");
        foodCard.className = "food-card";
        foodCard.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <div class="food-info">
        <span>₹${item.price}</span>
        <button data-index ="${idx}">Add</button>
        </div>`;
        food.appendChild(foodCard);
        // console.log(item.price)
    });
}


//Add to cart 
food.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const index = parseInt(e.target.dataset.index);
        cart.push(food[index]);
        updateCartCount();
    }
});

// Update Cart Number
function updateCartCount() {
    cartCount.textContent = `(${cart.length})`;
}

// Handle Login Button
login.addEventListener("click", () => {
    alert("Login functionality is under development.");
});

// Cart Checkout
cartBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Cart is empty.");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const confirmOrder = confirm(`You have ${cart.length} items. Total: ₹${total}\nPlace the order?`);
    if (confirmOrder) {
        alert("Order placed successfully!");
        cart = [];
        updateCartCount();
    }
});

// Filter Foods by Category
document.querySelectorAll(".images img").forEach(img => {
    img.addEventListener("click", () => {
        const keyword = img.alt.toLowerCase();
        const filtered = foods.filter(item => item.name.toLowerCase() === keyword);
        displayFood(filtered);
    });
});

// Reset filter on double click
document.querySelector("#firstSection h1").addEventListener("dblclick", () => {
    displayFood(foods);
});

// Initial render
displayFood(foods);
