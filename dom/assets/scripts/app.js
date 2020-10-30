const addMovieModal =  document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const addBackdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if (movies.length === 0){ 
        entryTextSection.style.display = 'block';
    } else { entryTextSection.style.display = 'none';
 }
}

//classlist is read-only, but can toggle/remove and add css properties
//keeps the other classes there 
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible'); 
    toggleBackdrop();
};

const toggleBackdrop = () => {
    addBackdrop.classList.toggle('visible')
};

const toggleBackdropHandler = () => {
    addBackdrop.classList.toggle('visible')
}

const clearMovieInputs = () => {
    for ( const input of userInputs) {
        input.value = ''
    }
};


const cancelButtonHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
};


const confirmMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '') 
    {
        alert ('Please enter valid values')
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    updateUI(); 
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
addBackdrop.addEventListener('click', toggleBackdropHandler);
cancelAddMovieButton.addEventListener('click', cancelButtonHandler);
confirmAddddMovieButton.addEventListener('click', confirmMovieHandler);