
const paymentForm = document.getElementById("paymentForm");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const total = cart.reduce(
    (sum, product) => sum + Number(product.price),
    0
);

document.getElementById("checkoutTotal").innerText =
    "Total: ₹" + total;

paymentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const order = {
        id: Date.now(),
        name: document.getElementById("customerName").value,
        email: document.getElementById("customerEmail").value,
        address: document.getElementById("address").value,
        paymentMethod: document.getElementById("paymentMethod").value,
        products: [...cart],
        total: total,
        date: new Date().toLocaleDateString(),
        status: "Pending"
    };

    let orders = JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    window.location.href = "orders.html";
});
