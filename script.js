
const loadMoreBtn = document.querySelector("#loadMoreBtn");
const moviesContainer = document.querySelector(".container");
// const NameSearch = document.querySelector("#searchInput");
const NameSearch = document.querySelector("input[name='search']");
const movieContainer = document.getElementById("movieContainer");




// const NameSearch=document.querySelector(".#form");
let requestNum = 1;
//event for button call the orginal funtion below
loadMoreBtn.addEventListener("click", () => {
  requestNum++;
  requestForMore(requestNum);
});


function requestForMore(requestNum) {
  const searchTerm = NameSearch.value.trim();

  if (searchTerm !== "") {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=adcea8098267daad7efd09aa1db2d419&page=${requestNum}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
          generateCards(data.results[i]);
        }
      });
  } else {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=adcea8098267daad7efd09aa1db2d419&page=${requestNum}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
          generateCards(data.results[i]);
        }
      });
  }
}


fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=adcea8098267daad7efd09aa1db2d419")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 9; i++) {
      generateCards(data.results[i]);
    }
  });


function generateCards(movieObject) {
  // create star
  let star = document.createElement('span');
  let starContent = document.createTextNode('Rating ');
  star.appendChild(starContent);
  star.classList.add('star');

  // create rating
  let rating = document.createElement('span');
  let ratingContent = document.createTextNode(movieObject.vote_average);
  rating.appendChild(ratingContent);
  rating.classList.add('rating');

  // create average container
  let averageContainer = document.createElement('div');
  averageContainer.classList.add('average');
  averageContainer.appendChild(star);
  averageContainer.appendChild(rating);

  // image
  let image = document.createElement('img');
  //conditioal logic
  image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path;
  image.alt = movieObject.original_title; // Add alt text with the movie title

  // movie name
  let name = document.createElement('div');
  name.classList.add('name');
  name.innerText = movieObject.original_title;

  // create movie section
  let movie = document.createElement('section');
  movie.classList.add('movie');
  movie.appendChild(image);
  movie.appendChild(averageContainer);
  movie.appendChild(name);

  // add movie to the container
  moviesContainer.appendChild(movie);
}
// const searchfuntion=document.querySelector("#form");//form orgal code

// const searchtext= document.querySelector("input[name='search']");
// searchForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let searchTerm = searchInput.value;
//     if (searchTerm.trim() !== "") {
//       clearMovies();
//       searchMovies(searchTerm);
//     }
//     else{


//     //seach Url + value+ API Keyi
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${searchtext}&api_key=adcea8098267daad7efd09aa1db2d419&page=1`).then((response) => response.json()).then((data) => {
//         console.log(data);
//         movieContainer.innerHTML = ''; // clearing previous movies
//         for (let i = 0; i<data.results.length; i++){
//             movieContainer.appendChild(generateCards(data.results[i])) ;
//         }
//         })
//         pageNum = 1;

// }
//   });
function logSearch(inputtext, pageCount) {
  console.log('The form was submitted.');
  if (inputtext === '') {
    pageCount = 0; // Reset position of search
    fetch(`https://api.themoviedb.org/3/discover/movie?&api_key=adcea8098267daad7efd09aa1db2d419&page=1`).then((response) => response.json()).then((data) => {
      console.log(data);
      movieContainer.innerHTML = ''; // clearing previous movies
      for (let i = 0; i < data.results.length; i++) {
        movieContainer.appendChild(generateCards(data.results[i]));
      }
    })
    pageSearch = 2;
  }
  else {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${inputtext}&api_key=adcea8098267daad7efd09aa1db2d419&page=1`).then((response) => response.json()).then((data) => {
      console.log(inputtext);

      movieContainer.innerHTML = ''; // clearing previous movies
      // for (let i = 0; i < data.results.length; i++) {
      //   generateCards(data.results[i])
      // }

      data.results.forEach((movie) => {
        generateCards(movie)
      })

    })
    pageNum = 1;
  }
}
//   // Select form element
const form = document.getElementById('form');
// // Connect the function to your form by
// // adding a submit event listener
let pageCount = 1;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  //pageCount += 1; // increaser page number in each click
  logSearch(NameSearch.value, pageCount);
});
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
  NameSearch.value = ""; // Clear the search input

  // Reload the "Now Playing" page
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=adcea8098267daad7efd09aa1db2d419")
    .then((response) => response.json())
    .then((data) => {
      moviesContainer.innerHTML = ""; // Clear existing movie cards
      for (let i = 0; i < 9; i++) {
        generateCards(data.results[i]);
      }
    });
});