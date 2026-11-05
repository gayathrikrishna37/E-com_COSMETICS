const products = [
{
    id: 1,
    name: "Vitamin C Serum",
    category: "Skincare",
    price: 799,
    image: "images/serum.jpg"
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
    image: "images/lipstick.jpg"
},
{
    id: 4,
    name: "Foundation",
    category: "Makeup",
    price: 899,
    image: "images/foundation.jpg"
},
{
    id: 5,
    name: "Hair Shampoo",
    category: "Hair Care",
    price: 499,
    image: "images/shampoo.jpg"
},
{
    id: 6,
    name: "Perfume",
    category: "Fragrance",
    price: 1299,
    image: "images/perfume.jpg"
},
{
    id: 7,
    name: "Brush Set",
    category: "Accessories",
    price: 699,
    image: "images/brush.jpg"
}
];

const container = document.getElementById("productContainer");

function showProducts(productList)
{
    container.innerHTML = "";

    productList.forEach(product =>
    {
        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="">
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
.addEventListener("change", function()
{
    const category = this.value;

    if(category === "All")
    {
        showProducts(products);
    }
    else
    {
        const filteredProducts =
        products.filter(
            product => product.category === category
        );

        showProducts(filteredProducts);
    }
});

function addToCart(id)
{
    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    const product =
    products.find(
        product => product.id === id
    );

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added To Cart");
}