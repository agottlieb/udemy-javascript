const buttons = document.querySelectorAll('button');

//global property can be accessed
// button.onclick = function () {

// }
const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
  };

const anotherButtonClickHandler = () => {
    console.log('This was clicked');
};

// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler)

//removes the event after its called, must use same method
// setTimeout ( () => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
//   });
const form = document.querySelector('form');

form.addEventListener('submit', event=> {
    event.preventDefault();
    console.log(event)})