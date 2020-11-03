// const chosen = 'ball'

// let person = {
// 'name': 'Jack Danger',
// age: 17,
// 4.6: 'next president',
// [chosen]: '',
// };



// person.isDanger = true;
// delete person.age;
// console.log(person);

const addMovieBtn = document.getElementById('add-movie-btn'); 
const searchMovieBtn = document.getElementById('search-btn'); 

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list')
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName= document.getElementById('extra-name').value;
    const extraValue= document.getElementById('extra-value').value;

    if (title === '') {
    return;
    }

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue
        },
        id: Math.random()
    };
    movies.push(newMovie);
    console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);
//searchMovieBtn.addEventListener('click', searchMovieBtn);
