const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1]
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton= document.querySelector('header').lastElementChild
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// const confirmAddMovieButton = addMovieModal.querySelector('.btn--success')
const inputs = document.querySelectorAll("input");
const backdrop = document.getElementById("backdrop");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    const listRoot = document.getElementById('movie-list')
    listRoot.children[movieIndex].remove();
}

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${image}" alt= "${title}" />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement)
};

const clearInputs = () => {
  for (const usrinput of inputs) [(usrinput.value = "")];
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearInputs();
};

const addMovieHandler = () => {
  const movietitle = inputs[0].value;
  const imageUrl = inputs[1].value;
  const movieRating = inputs[2].value;

  if (
    movietitle.trim() === "" ||
    imageUrl.trim() === "" ||
    movieRating.trim() === "" ||
    +movieRating < 1 ||
    +movieRating > 5
  ) {
    alert("Please enter valid values (rating between 1 & 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: movietitle,
    image: imageUrl,
    rating: movieRating,
  };

  movies.push(newMovie);
  console.log(movies);

  toggleMovieModal();
  clearInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating)
  updateUI();
};

const backgroundClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backgroundClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
