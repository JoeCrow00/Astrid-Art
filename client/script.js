//
// hero slideshow
//

const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slideshowImages[currentImageCounter].style.display = "none";
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
}

//
// axios fetch users
//

const createItem = (user) => {
    const item = document.createElement('div');
    item.className = "grid-item";
    item.onclick = () => {
        window.location.href = `product.html?id=${user.id}`
    }
    // add user details to `li`
    if (user.active === true) {
    item.innerHTML = `<img src= "./Images/${user.image_url}" class="product-grid-image"> <h3>${user.name}</h3><br><p><span>£${user.price} each</span></>`;
    return item;
    }

};

const appendToDOM = (users) => {
    const prodGrid = document.querySelector('.product-grid');
    //iterate over all users
    users.map(user => {
        prodGrid.appendChild(createItem(user));
    });
};

const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
        .then(response => {
            const users = response.data;
            console.log(`GET list users`, users);

            appendToDOM(users);
        })
        .catch(error => console.error(error));
};

fetchProducts();



// new code 
// get user by id

// const fetchUser = () => {
//     axios.get(`http://localhost:3000/users/${id}`)
//         .then(response => {
//             const users = response.data;
//             console.log(`GET list users`, users);

//             appendToDOM(users);
//         })
//         .catch(error => console.error(error));
// };

// fetchUser();