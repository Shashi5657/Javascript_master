const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

let movies = [];

const renderedMovies = () => {
    const movieList = document.getElementById('movie-list')

    if(movies.length === 0){
        movieList.classList.remove('visible')
        return;
    } else {
        movieList.classList.add('visible')
    }

    movieList.innerHTML = ''

    movies.forEach((movie)=> {
        const movieEl = document.createElement('li')
        let text = movie.info.title + ' - '
        for(const key in movie.info){
            if(key !== 'title'){
                text = text + `${key}:${movie.info[key]}`
            }
        }
        movieEl.textContent = text
        movieList.append(movieEl)
    })
}

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
  };

  movies.push(newMovie);
  renderedMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);

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
