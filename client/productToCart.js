
async function addToCartListener() {

let carts = document.querySelectorAll('.example_a');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        let product = localStorage.getItem('productPage');
        product = JSON.parse(product);
        cartNumbers(product);
        totalCost(product);
    })
}
    console.log(2);
};



function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action === "decrease") {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    } else if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    // CAN DELETE IF ABOVE WORKS
    // if (productNumbers) {
    //     localStorage.setItem('cartNumbers', productNumbers + 1);
    //     document.querySelector('.cart span').textContent = productNumbers + 1;
    // } else {
    //     localStorage.setItem('cartNumbers', 1);
    //     document.querySelector('.cart span').textContent = 1;
    // }

    setItems(product);

}






// localStorage.setItem('productsInCart', localStorage.getItem('productPage'));
// let cartItems = [];
// console.log(cartItems);


function setItems(product) {

    // new attempt from video

    let cartProds = localStorage.getItem('productsInCart');
    cartProds = JSON.parse(cartProds);
    console.log('My cart items are', cartProds);

    if (cartProds !== null) {
        if (cartProds[product.id] === undefined) {
            cartProds = {
                ...cartProds,
                [product.id]: product
            }
        }
        cartProds[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartProds = {
            [product.id]: product
        } 
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartProds));

    // new attempt from video ends

    let cartItems = [];
    let cartProduct = localStorage.getItem('productPage');
    cartProduct = JSON.parse(cartProduct);
    console.log(cartProduct);

    cartItems.push(cartProduct);

    localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
    console.log(cartItems); 

    
    // cartItems = localStorage.getItem('productsInCart');
    // cartItems = JSON.parse(cartItems);

    // if (cartItems.inCart != null) {
    //     cartItems.inCart += 1;
    // } else {
    //     cartItems.inCart = 1;
    // }

    // localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    
    let cartCost = localStorage.getItem("totalCost");
    
    if (action === "decrease") {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - product.price);

    } else if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");


    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon id="${item.id}" class="delete" name="close-circle"></ion-icon>
                <img src="./images/${item.image_url}">
                <span>${item.name}</span>
            </div>
            <div class="price">£${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="${item.id} decrease" name="caret-back-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="${item.id} increase" name="caret-forward-circle"></ion-icon>
            </div>
            <div class="total">
                £${item.inCart * item.price}.00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    £${cartCost}.00
                </h4>
            </div>


        `
    }

    deleteButtons();
    manageQuantity();

};


function deleteButtons() {

    let deleteButtons = document.querySelectorAll('.product ion-icon');
    
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');


    for (let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            
            // productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
            productName = deleteButtons[i].id;

            // console.log(productName);
            // console.log(cartItems[productName].name + " " + cartItems[productName].inCart);


            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);

            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));


            displayCart();
            onLoadCartNumbers();
            

        });
    }


};




// function removeFromCartListener() {

//     let deleteProductButton = document.querySelectorAll('.delete');

//     for (let i=0; i < deleteProductButton.length; i++) {
//         deleteProductButton[i].addEventListener('click', () => {

//             let productDeleting = localStorage.getItem('productsInCart');
//             productDeleting = JSON.parse(productDeleting);

//             Object.values(productDeleting).map(item => {
//                 var itemId = item.id;
//                 console.log(item.id);
//             });

//             console.log(prodKeys);
//             console.log(productDeleting);

//             console.log("what I'm trying to delete is", productDeleting[5]);


//             var clickedProd = document.getElementById(5);
//             console.log(clickedProd);
            
//         })
//     }

// };
// removeFromCartListener();


function manageQuantity() {

    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let currentQuantity = 0;
    let currentProduct = '';


    
    for (let i=0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            currentProduct = decreaseButtons[i].className.slice(0, 1);
            console.log(currentProduct);
            console.log(cartItems);

            if(cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }

            

        })
    }

    for (let i=0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            currentProduct = increaseButtons[i].className.slice(0, 1);
            console.log(currentProduct);

            
            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
            
        })
    }

};


addToCartListener();

onLoadCartNumbers();
displayCart();
