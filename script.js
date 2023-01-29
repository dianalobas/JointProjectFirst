let productsGrid = document.getElementById('products-grid');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/dianalobas/JointProjectFirst';

xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function (){
    productsArray = xhr.response
    productsGrid.innerHTML = null;
    productsArray.forEach(p -> {