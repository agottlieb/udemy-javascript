const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
      } else {
        movieList.classList.add('visible');
      }
    movieList.innerHTML = '';
    const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    const { title: movieTitle } = info;
    let text = movie.getFormattedTitle() + ' - ';
    for (const key in info) {
      if (key !== 'title' && key !== '_title' ) {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = (filter = '') => {
    const title = document.getElementById('title').value;
    const extraName= document.getElementById('extra-name').value;
    const extraValue= document.getElementById('extra-value').value;

    const newMovie = {
        info: {
            set title(value) {
                this._title =value
            },
            get title() { //accessed when you want to read it
                return this._title
            }, 
            [extraName]: extraValue
        },
        id: Math.random(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();

        }
    };

   newMovie.info.title= title;

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
  };
  
  addMovieBtn.addEventListener('click', addMovieHandler);
  searchBtn.addEventListener('click', searchMovieHandler);