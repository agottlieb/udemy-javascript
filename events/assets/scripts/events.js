const button = document.querySelector('button');

//global property can be accessed
// button.onclick = function () {

// }

const buttonClickHandler = () => {
    alert('button was clicked!');
};

const anotherButtonClickHandler = () => {
    console.log('This was clicked');
};

// button.onclick = buttonClickHandler;

button.addEventListener('click', buttonClickHandler)

//removes the event after its called, must use same method
setTimeout ( () => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);
