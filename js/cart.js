
let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer =
    document.getElementById("cartContainer");

const totalAmount =
    document.getElementById("totalAmount");

function displayCart() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML =
            "<h2>Your Cart Is Empty</h2>";

        totalAmount.innerText = "Total: ₹0";

        return;
    }

    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;

        cartContainer.innerHTML += `
            <div class="cart-item">

                ${product.image}

                <div>
                    <h3>${product.name}</h3>

                    <p>${product.category}</p>

                    <p>₹${product.price}</p>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    totalAmount.innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    window.location.href = "payment.html";
}

displayCart();
