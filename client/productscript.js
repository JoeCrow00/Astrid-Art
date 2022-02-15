let url_string = (window.location.href);
let url = new URL(url_string);
let productId = url.searchParams.get("id");
console.log(productId);

const createItem = (user) => {

    const item = document.createElement('div');
    item.className = "selected-product-container";

    let pageProduct = {
        id: user.id,
        name: user.name,
        price: user.price,
        image_url: user.image_url,
        inCart: 0
    };
    console.log(pageProduct);
    
    localStorage.setItem("productPage", JSON.stringify(pageProduct));

    item.innerHTML = `<div class="selected-product-image-container"><img src= "./Images/${user.image_url}" class="product-grid-image"></div><div class="selected-product-text-container"> <h2 class="product-title">${user.name}</h2>
    <p class="product-description">${user.description}</p>
    <p class="product-price">£${user.price}.00 each</p>
    <div id="cart_cont" class="button_cont"><a class="example_a" target="_blank">Add To Cart</a></div>`;
    console.log('1');
    return item;

};

const appendToDOM = (users) => {
    const selectProd = document.querySelector('.selected-product');
    //iterate over all users
    users.map(user => {
        selectProd.appendChild(createItem(user));
    });
};

const fetchUser = () => {
    axios.get(`http://localhost:5000/products/${productId}`)
        .then(response => {
            let userId = response.data
            console.log(`GET single user by ID`, userId);
            appendToDOM(userId);
            
        })
        .catch(error => console.error(error));
};

fetchUser();