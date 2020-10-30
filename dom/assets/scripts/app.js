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

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
  };

const renderNewMovie = (id, title, imageUrl, rating) => {
    const newMovie= document.createElement('li');
    newMovie.className = 'movie-element';
    newMovie.innerHTML = `
      <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
      </div>
      <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
      </div>
    `;
    //bind handler to reconfigure arguments
    newMovie.addEventListener ('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovie);
  };
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
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI(); 
}

startAddMovieButton.addEventListener('click', toggleMovieModal);
addBackdrop.addEventListener('click', toggleBackdropHandler);
cancelAddMovieButton.addEventListener('click', cancelButtonHandler);
confirmAddddMovieButton.addEventListener('click', confirmMovieHandler);