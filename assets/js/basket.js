const qutu = document.getElementById('unit2')

function getProducts() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = ""

    cart.map((item, index) => {
        let box = document.createElement('div');
        box.innerHTML = `
        <p>${item.title}</p>
            <h2>${item.price}</h2>
            <img src="${item.image}" alt="picture">
            <button onclick = "removeItem(${index})">Sepetden Sill</button>`;
            qutu.append(box);
    })
}
getProducts()