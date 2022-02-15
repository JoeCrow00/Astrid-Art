const createOrder = (order) => {
        axios.post('http://localhost:3000/orders', order)
            .then(response => {
                let addedOrder = response.data;
                console.log(`POST: order was successful`, addedOrder);
    
            })
    
            .catch(error => console.error(error));
    };
    


const form = document.querySelector('.order-button');
    
const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    let order = {}
    let productIdSelector = document.querySelectorAll('.product ion-icon');
    let quantitySelector = document.querySelectorAll(".quantity span");
    let productId;
    let quantity;

    for (let i=0; i < productIdSelector.length; i++) {

        productId = productIdSelector[i].id;
        quantity = quantitySelector[i].textContent;

        console.log(productId);
        console.log(quantity);


        order = { productId, quantity }
        console.log(order);

        createOrder(order);
        
    }

});