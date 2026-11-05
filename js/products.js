
const products = [
    {
        id: 1,
        name: "Vitamin C Serum",
        category: "Skincare",
        price: 799,
        image: "images/serum.jpeg"
    },
    {
        id: 2,
        name: "Face Wash",
        category: "Skincare",
        price: 299,
        image: "images/facewash.jpg"
    },
    {
        id: 3,
        name: "Lipstick",
        category: "Makeup",
        price: 599,
        image: "https://placehold.co/600x700/EBD5D7/493438?text=Lipstick"
    },
    {
        id: 4,
        name: "Foundation",
        category: "Makeup",
        price: 899,
        image: "https://placehold.co/600x700/EADACB/493438?text=Foundation"
    },
    {
        id: 5,
        name: "Hair Shampoo",
        category: "Hair Care",
        price: 499,
        image: "https://placehold.co/600x700/F2E5DC/493438?text=Hair+Shampoo"
    },
    {
        id: 6,
        name: "Perfume",
        category: "Fragrance",
        price: 1299,
        image: "https://placehold.co/600x700/F0DDE2/493438?text=Perfume"
    },
    {
        id: 7,
        name: "Brush Set",
        category: "Accessories",
        price: 699,
        image: "https://placehold.co/600x700/EADFE8/493438?text=Brush+Set"
    }
];

const container = document.getElementById("productContainer");

function showProducts(productList) {
    container.innerHTML = "";

    productList.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <p>₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>
            </div>
        `;
    });
}

showProducts(products);

document.getElementById("categoryFilter")
.addEventListener("change", function() {

    const category = this.value;

    if (category === "All") {
        showProducts(products);
    } else {
        const filteredProducts = products.filter(
            product => product.category === category
        );

        showProducts(filteredProducts);
    }
});

function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(
        product => product.id === id
    );

    if (!product) return;

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added To Cart");
}
