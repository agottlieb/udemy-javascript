const addMovieModal =  document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const addBackdrop = document.getElementById('backdrop');

//classlist is read-only, but can toggle/remove and add css properties
//keeps the other classes there 
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
    toggleBackdrop();
};

const toggleBackdrop = () => {
    addBackdrop.classList.toggle('visible')
};

startAddMovieButton.addEventListener('click', toggleMovieModal)