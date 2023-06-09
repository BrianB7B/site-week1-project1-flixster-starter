// const loadMore = document.querySelector("#form")
// let requestNum = 0;
// function requestForMore(requestNum){
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=6e11ada88ca7892fb3cd274150744bae").then((response) => response.json()).then((data) => {
//     console.log(data);
//     for (let i = requestNum * 9; i < (requestNum * 9) + 1; i++) {
//         generateCards(data.results[i]);
//     }
// })
// }
  
// fetch("https://api.themoviedb.org/3/discover/movie?api_key=6e11ada88ca7892fb3cd274150744bae").then((response) => response.json()).then((data) => {
//     console.log(data);
//     for (let i = 0; i < 9; i++) {
//         generateCards(data.results[i]);
//     }
// })
//  function generateCards(movieObject){ 
//     let star = document.createElement('span'); 
//     let starContent = document.createTextNode(':star:️'); 
//     star.appendChild(starContent); 
//     star.classList.add('star')
//     let rating = document.createElement('span');
//     let ratingContent = document.createTextNode(movieObject.vote_average);
//     rating.appendChild(ratingContent);
//     document.body.appendChild(rating);
//     rating.classList.add('rating')
    
//     // create average container
//     let averageContainer = document.createElement('div');
//     averageContainer.classList.add('average');
//     averageContainer.appendChild(star);
//     averageContainer.appendChild(rating);
//     document.body.appendChild(averageContainer);
   
//     // image
//     let image = document.createElement('img');
//     image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
//     document.body.insertBefore(image, averageContainer);
    
//     // movie name
//     let name = document.createElement('div')
//     name.classList.add('name');
//     name.innerText = movieObject.original_title;
//     document.body.insertBefore(name, averageContainer.nextSibling);
    
//     //create movie section
//     let movie = document.createElement('section');
//     movie.classList.add('name')
//     movie.appendChild(image)
//     movie.appendChild(averageContainer)
//     movie.appendChild(name)
//     document.body.appendChild(movie)
//     movie.classList.add('movie');
// }
// loadMoreBTN.addEventListener('click',()=>{
//     requestNum++;
//     requestForMore(requestNum)
// });
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

// function requestForMore(requestNum) { 
    // only add one more moive when hit load more
//   fetch("https://api.themoviedb.org/3/discover/movie?api_key=adcea8098267daad7efd09aa1db2d419")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       for (let i = requestNum * 9; i < (requestNum * 9) + 1; i++) {
//         generateCards(data.results[i]);
//       }
//     });
// }

// fetch("https://api.themoviedb.org/3/discover/movie?api_key=adcea8098267daad7efd09aa1db2d419")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < 9; i++) {
//       generateCards(data.results[i]);
//     }
//   });
function requestForMore(requestNum) {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${requestNum}&api_key=adcea8098267daad7efd09aa1db2d419`)
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      //   const startIndex = requestNum * 9;
      //   const endIndex = startIndex + 9;
      //   for (let i = startIndex; i < endIndex; i++) {
      //     if (i >= data.results.length) {
      //       break; // Stop if there are no more results
      //     }
      //     generateCards(data.results[i]);
      //   }
      // });
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      for (let i = 0; i < 9; i++) {
        generateCards(data.results[i]);
      }
    });
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
  let starContent = document.createTextNode(':star:️');
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
  image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path;

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
function logSearch(inputtext, pageCount){
    console.log('The form was submitted.');
    if (inputtext === ''){
        pageCount = 0; // Reset position of search
        fetch(`https://api.themoviedb.org/3/discover/movie?&api_key=adcea8098267daad7efd09aa1db2d419&page=1`).then((response) => response.json()).then((data) => {
        console.log(data);
        movieContainer.innerHTML = ''; // clearing previous movies
        for (let i = 0; i<data.results.length; i++){
        movieContainer.appendChild(generateCards(data.results[i])) ;
    }
    })
    pageSearch = 2;
    }
    else{
    fetch(`https://api.themoviedb.org/3/search/movie?query=${inputtext}&api_key=adcea8098267daad7efd09aa1db2d419&page=1`).then((response) => response.json()).then((data) => {
        console.log(data);
        movieContainer.innerHTML = ''; // clearing previous movies
        for (let i = 0; i<data.results.length; i++){
            movieContainer.appendChild(generateCards(data.results[i])) ;
        }
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
    logSearch(NameSearch.value,pageCount);
});