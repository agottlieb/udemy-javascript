const addMovieModal =  document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');

//classlist is read-only, but can toggle/remove and add css properties
//keeps the other classes there 
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
};

startAddMovieButton.addEventListener('click', toggleMovieModal)