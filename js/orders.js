
const ordersContainer =
    document.getElementById("ordersContainer");

const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

function displayOrders() {
    ordersContainer.innerHTML = "";

    if (orders.length === 0) {
        ordersContainer.innerHTML =
            "<h2>No Orders Found</h2>";

        return;
    }

    orders.forEach(order => {
        let productList = "";

        order.products.forEach(product => {
            productList += `
                <li>
                    ${product.name} - ₹${product.price}
                </li>
            `;
        });

        ordersContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>Order #${order.id}</h3>

                    <p>Name: ${order.name}</p>

                    <p>Date: ${order.date}</p>

                    <p>Payment: ${order.paymentMethod}</p>

                    <p>Status: ${order.status}</p>

                    <h4>Products:</h4>
                    <ul>${productList}</ul>

                    <h3>Total: ₹${order.total}</h3>
                </div>
            </div>
        `;
    });
}

displayOrders();
