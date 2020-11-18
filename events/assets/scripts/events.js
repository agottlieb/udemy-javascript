const button = document.querySelector('button');

//global property can be accessed
// button.onclick = function () {

// }

const buttonClickHandler = () => {
    alert('button was clicked!');
};

button.onclick = buttonClickHandler;