const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

let movies = [];

const renderedMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    //obj destructuring
    const { info } = movie;
    let text = movie.getFormattedTitle() + " - ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}:${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: { title, [extraName]: extraValue },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderedMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderedMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// //other example of using obj keys in array like ways
// const movieList = document.getElementById('movie-list')

// movieList.style['display'] = 'block'
// movieList.style['backgroundColor'] = 'red'

// const userChosenKeyName = 'level'
// const person = {
//   //we can also use key name like this, if we want to use any other symbols like -
//   //we should wrap the key in single quotes
//   "first-name": "Shashi",
//   // name : 'Shashi',
//   age: 22,
//   //to access dynamic user entered values
//   [userChosenKeyName] : '...',
//   hobbies: ["Cooking", "Coding"],
//   greet: function () {
//     alert("Hii there!");
//   },
// };

// //now to access that kind of keys, we know obj are arrays
// console.log(person['first-name'])

// //to add a new property or to modify a prop in object
// person.isAdmin = true;
// person.age = 23;

// //to delete a prop in obj
// delete person.age;

// console.log(person);

// person.greet();
