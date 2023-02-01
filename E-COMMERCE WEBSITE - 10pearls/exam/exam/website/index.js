let div = document.getElementById('product-list');
for(let product of products) {
    div.innerHTML += `
        <div class="product-card">
            <img src="${product.img}"/><a href="product-detail.html?id=${product.id}">${product.name}</a>
        </div>
    `;
}