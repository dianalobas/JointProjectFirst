productsArray = xhr.response
productsGrid.innerHTML = null;
productsArray.forEach(p =>{
    productsArray.puch(p);
    let pElem = document.createElement('div');
    pElem.classList.add('product');
    pElem.innerHTML = `
    <h2 class="product-name">${p.name}</h2>
    <img class="product-photo" src="${p.photo_url}" alt="${p.name}">
    <p class="product-price"><b>Price:</b>${p.price}</p>
    <p class="product-description"><b>Description:</b>${p.description}</p>

    `
})