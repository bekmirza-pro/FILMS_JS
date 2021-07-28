// var elList = document.querySelector('.list');
// var elForm = document.querySelector('.form');
// var elSelect = elForm.querySelector('.select');

// var genres = []
// function generatedGenres(genre){
// if(!genres.includes(genre)){
//     genres.push(genre)
// }
// }
// function genersFilms(genres) {
// 	for (genre of  genres) {
// 		var newOp = document.createElement('option');

// 		newOp.textContent = genre;
// 		newOp.value = genre;

// 		elSelect.appendChild(newOp);
//         console.log(elSelect)
// 	}
// }   
  



// function normalizedDate(time){
//     var year = new Date(time).getFullYear();
//     var month = String(new Date(time).getMonth() + 1).padStart(2, '0');
//     var day = String( new Date(time).getDate()).padStart(2, '0');

//     return day + '.' + month + '.' + year;
// }


// var normalizedFilms = films.map((film) => {
     
//     return{
//         filmId: film.id,
//         title: film.title,
//         filmPoster: film.poster,
//         filmOverview: film.overview,
//         filmDate:normalizedDate(film.release_date),
//         genres:film.genres,
//     }

// });


// function renderFilms(filmsArr){
//     filmsArr.forEach((film) => {
        
//     var newLi = document.createElement('li');
//     newLi.setAttribute('class', 'films-item');

//     // ****************createElement*******************

//     var newFilmId = document.createElement('p');
//     var newTitle = document.createElement('h1');
//     var newImg = document.createElement('img');
//     var newOverview = document.createElement('p');
//     var newDateTime = document.createElement('time');

// //***************value and setAttribute****************

//     newFilmId.textContent = film.filmId;
//     newTitle.textContent = film.title;
//     newImg.setAttribute('src', film.filmPoster);
//     newImg.setAttribute('alt', film.title);
//     newImg.setAttribute('width', '310');
//     newImg.setAttribute('height', '380');
//     newOverview.textContent =film.filmOverview;
//     newDateTime.textContent = film.filmDate;

//     var newGenresUl = document.createElement('ul');
//     newGenresUl.setAttribute('class', 'small-list');

//         film.genres.forEach((genre) => {
//         var newGenres = document.createElement('li');
//         newGenres.textContent = genre;

//         newGenresUl.appendChild(newGenres);

//         generatedGenres(genre);
//     });

// // ************** Append to element *********************

//     newLi.appendChild(newFilmId);
//     newLi.appendChild(newTitle);
//     newLi.appendChild(newImg);
//     newLi.appendChild(newOverview);
//     newLi.appendChild(newDateTime);
//     newLi.appendChild(newGenresUl);

//     elList.appendChild(newLi);

//     });
// }
// renderFilms( normalizedFilms);

// genersFilms(genres); 

// console.log(genres);

// console.log(normalizedFilms);
// console.log(genres)



// *******************************************************************************************************************************************



// *****************************************************************************************************************************************

//*************************GET Elament from DOM *************************************
const elMoviesList = makeElament('.movies_list');
const elSelectGeners = makeElament('.movies_form_select')


// *********************Function renderFilms Geners for select********************************************
function renderGenresSelect(films, element){

    const result = [];

    films.forEach(film => {
        film.genres.forEach(genre => {
            if(!result.includes(genre)){
                result.push(genre);
            }
        });
    });

    element.innerHTML = null;
    result.forEach(genre => {
        const newOp = createDOM('option');
        newOp.value = genre.toLowerCase();
        newOp.textContent = genre;

        element.appendChild(newOp);
    });
}


function  renderGenresList(genre, newGenresList){
    const newLi = createDOM('li');
    newLi.textContent = genre;
    newGenresList.appendChild(newLi);
}

function renderMovies(moviesArr){
    moviesArr.forEach(film => {
// ***********************createElements****************************

        const newLi = createDOM('li');
        const newId = createDOM('p');
        const newHeading = createDOM('h2');
        const newImg = createDOM('img');
        const newParagraph = createDOM('p');
        const newTime = createDOM('time');
        const newGenresList = createDOM('ul');

// *******************Setting attributess and values***************************
        newGenresList.setAttribute('class', 'ganre-list');        
        newLi.setAttribute('class', 'movie');
        newId.textContent = film.id;
        newHeading.textContent = film.title;
        newImg.setAttribute('src', film.poster);
        newImg.setAttribute('alt', film.title);
        newImg.setAttribute('width', 380);
        newImg.setAttribute('height', 470);
        newParagraph.textContent = film.overview.split(' ').slice(0, 20).join(' ') + ' ...';
        newTime.textContent = normalizedDate(film.release_date);


        film.genres.forEach(genre => {
            renderGenresList(genre, newGenresList);
        });
        

        newLi.appendChild(newId);
        newLi.appendChild(newHeading);
        newLi.appendChild(newImg);
        newLi.appendChild(newParagraph);
        newLi.appendChild(newTime);
        newLi.appendChild(newGenresList);


        elMoviesList.appendChild(newLi);

    });
}

renderGenresSelect(films, elSelectGeners);
renderMovies(films , elMoviesList);