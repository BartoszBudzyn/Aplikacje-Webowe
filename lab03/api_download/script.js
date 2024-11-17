async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    return await response.json();
}

function generateElement(title, description, image) {
    const div = document.createElement("div");
    div.className = "generated-div";
    div.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${image}" alt="${image}" />
    `;
    document.body.appendChild(div);
}

async function createProductDivs() {
    const productsData = await fetchProducts();
    productsData.products.forEach((product) => {
        generateElement(product.title, product.description, product.thumbnail);
    });
}

async function sortProducts() {
    const searchInput = document.querySelector("#searchbar").value;
    const method = document.querySelector("#selectList").value;
    const generatedDivs = document.querySelectorAll(".generated-div");
    generatedDivs.forEach((div) => div.remove());
    const productList = await fetchProducts();
    const filteredProducts = productList.products.filter(
        (product) =>
            product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.description
                .toLowerCase()
                .includes(searchInput.toLowerCase())
    );
    productList.products = filteredProducts;
    switch (method) {
        case "original":
            productList.products.forEach((product) => {
                generateElement(
                    product.title,
                    product.description,
                    product.thumbnail
                );
            });
            break;

        case "asc":
            productList.products.sort((a, b) => a.title.localeCompare(b.title));
            productList.products.forEach((product) => {
                generateElement(
                    product.title,
                    product.description,
                    product.thumbnail
                );
            });
            break;

        case "desc":
            productList.products.sort((a, b) => b.title.localeCompare(a.title));
            productList.products.forEach((product) => {
                generateElement(
                    product.title,
                    product.description,
                    product.thumbnail
                );
            });
            break;
    }
}

createProductDivs();
// sortProducts();
