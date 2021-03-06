

// **********************************************************************************************

// *************************GET Elament from DOM *************************************
const elForm = makeElament('.form')
const elMoviesTemplate = makeElament('.movies_template').content;
const elModalInfo = makeElament('.modal');

const elInputSearch = makeElament('.movies_form_input', elForm)
const elMoviesList = makeElament('.movies_list');
const elSelectGeners = makeElament('.movies_form_select', elForm);
const elSelectSort = makeElament('.movies_form_select-sort', elForm);

const elOverview = makeElament('.overview');
const elDate = makeElament('.release_date');
const elGenresList = makeElament('.genres_list');
const elCloseModalBtn = makeElament('.modal_close_btn');

function renderGenersSelect(films, element){
 const result = [];

 films.forEach(film => {
     film.genres.forEach(genre => {
         if(!result.includes(genre)){
             result.push(genre);
         }
     });
 });
    result.forEach(genre => {
       const newOp = createDOM('option');
       newOp.value = genre;
       newOp.textContent = genre;

       element.appendChild(newOp);

    });
  
}

function renderFilms(moviesArr, element){
    element.innerHTML = null;

    moviesArr.forEach(film => {

        const filmTemplate = elMoviesTemplate.cloneNode(true);

        makeElament('.id', filmTemplate).textContent = film.id;
        makeElament('.movies_heading', filmTemplate).textContent = film.title;
        makeElament('.film_img', filmTemplate).setAttribute('src', film.poster);
        makeElament('.film_img', filmTemplate).setAttribute('alt', film.title);
        
        const elMoreBtn = makeElament('.movie_btn', filmTemplate);
        elMoreBtn.dataset.film_id = film.id;
        
        elCloseModalBtn.addEventListener('click', (evt)=>{
            elModalInfo.classList.remove('modal_active');
        })

        elMoreBtn.addEventListener('click', (evt)=>{
            elModalInfo.classList.add('modal_active');
            const filmId = evt.target.dataset.film_id;

            const foundFilm = moviesArr.find((item)=> item.id === filmId);
            elOverview.textContent = foundFilm.overview;
            elDate.textContent = normalizedDate(foundFilm.release_date);

            elGenresList.innerHTML = null;
            foundFilm.genres.forEach(genre => {
                const newLi = createDOM('li');
                newLi.textContent = genre;

                elGenresList.appendChild(newLi);
            });
        });
        element.appendChild(filmTemplate);
    });
}

  renderGenersSelect(films, elSelectGeners);
  renderFilms(films, elMoviesList);

elForm.addEventListener('submit', (evt)=>{
     evt.preventDefault();

     const inputSearchValue = elInputSearch.value.trim();
     const selectGenres = elSelectGeners.value.trim();
     const selectSorted = elSelectSort.value.trim();

     const regex = new RegExp(inputSearchValue, 'gi');
     const searchedFilms = films.filter(film => film.title.match(regex));

     sortedFilms(searchedFilms, selectSorted);

     let foundFilms = [];
     
     if(selectGenres === 'All'){
         foundFilms = searchedFilms;
     } else{
         foundFilms = searchedFilms.filter(film => film.genres.includes(selectGenres));
     }
     renderFilms(foundFilms, elMoviesList);
});


function sortedFilms(filmsArr, format){
    const sortedAlph = filmsArr.sort((a, b) =>{
        if(a.title > b.title){
            return 1;
        } else if(a.title < b.title){
            return -1;
        } else{
            return 0;
        }
   });

   const sortedYear = filmsArr.sort((a, b) =>{
    if(a.release_date > b.release_date){
        return 1;
    } else if(a.release_date < b.release_date){
        return -1;
    } else{
        return 0;
    }
});

    if(format === 'a_z'){
     return sortedAlph;
    } else if(format === 'z_a'){
       return sortedAlph.reverse();
    } else if(format === 'old_new'){
        return sortedYear;
    } else if(format === 'new_old'){
        return sortedYear.reverse();
    }
}


















// const elForm = makeElament('.form')
// const elInputSearch = makeElament('.movies_form_input')
// const elMoviesList = makeElament('.movies_list');

// const elSelectGeners = makeElament('.movies_form_select');
// const elSelectSort = makeElament('.movies_form_select-sort');   


// // *********************Function renderFilms Geners for select********************************************
// function renderGenresSelect(films, element){

//     const result = [];

//     films.forEach(film => {
//         film.genres.forEach(genre => {
//             if(!result.includes(genre)){
//                 result.push(genre);
//             }
//         });
//     });

//     result.forEach(genre => {
//         const newOp = createDOM('option');
//         newOp.value = genre;
//         newOp.textContent = genre;

//         element.appendChild(newOp);
//     });
// }


// function  renderGenresList(genre, newGenresList){

  
//     const newLi = createDOM('li');
//     newLi.textContent = genre;
//     newGenresList.appendChild(newLi);
// }

// function renderMovies(moviesArr, element){

    
//     element.innerHTML = null;
//     moviesArr.forEach(film => {
// // ***********************createElements****************************

//         const newLi = createDOM('li');
//         const newId = createDOM('p');
//         const newHeading = createDOM('h2');
//         const newImg = createDOM('img');
//         const newParagraph = createDOM('p');
//         const newTime = createDOM('time');
//         const newGenresList = createDOM('ul');

// // *******************Setting attributess and values***************************
//         newGenresList.setAttribute('class', 'ganre-list');        
//         newLi.setAttribute('class', 'movie');
//         newId.textContent = film.id;
//         newHeading.textContent = film.title;
//         newImg.setAttribute('src', film.poster);
//         newImg.setAttribute('alt', film.title);
//         newImg.setAttribute('width', 380);
//         newImg.setAttribute('height', 470);
//         newParagraph.textContent = film.overview.split(' ').slice(0, 20).join(' ') + ' ...';
//         newTime.textContent = normalizedDate(film.release_date);
    

//         film.genres.forEach(genre => {
//             renderGenresList(genre, newGenresList);
//         });
        

//         newLi.appendChild(newId);
//         newLi.appendChild(newHeading);
//         newLi.appendChild(newImg);
//         newLi.appendChild(newParagraph);
//         newLi.appendChild(newTime);
//         newLi.appendChild(newGenresList);


//         elMoviesList.appendChild(newLi);

//     });
    
// }

// renderGenresSelect(films, elSelectGeners);

// renderMovies(films , elMoviesList);


// elForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     const inputSearchValue = elInputSearch.value.trim();
//     const selectGenres = elSelectGeners.value.trim();
//     const sortValue = elSelectSort.value.trim();

//     // console.log(sortFilms)
//     const regex = new RegExp(inputSearchValue, 'gi');   
//     const searchedFilms = films.filter(film => film.title.match(regex));

//     sortFilms(searchedFilms, sortValue);

//     let foundFilms = [];
//     if(selectGenres === 'All'){
//         foundFilms = searchedFilms;
//     } else{
//         foundFilms = searchedFilms.filter(film => film.genres.includes(selectGenres));
//     }
//     renderMovies(foundFilms, elMoviesList);
//     // renderMovies(sortedFilms, elMoviesList);    

// });

// function sortFilms(filmsArr, format){
//     if(format === 'a_z'){
//         return filmsArr.sort((a, b) => {
//             if(a.title > b.title){
//                 return 1;
//             } else if(a.title < b.title){
//                 return -1;
//             } else{
//                 return 0;
//             }
//         });
//     } else if(format === 'z_a'){
//         return filmsArr.sort((a, b) => {
//             if(a.title > b.title){
//                 return -1;
//             } else if(a.title < b.title){
//                 return 1;
//             } else{
//                 return 0;
//             }
//         });
//     } else if(format === 'old_new'){
//         return filmsArr.sort((a, b) => {
//             if(a.release_date > b.release_date){
//                 return 1;
//             } else if(a.release_date < b.release_date){
//                 return -1;
//             } else{
//                 return 0;
//             }
//         });
//     } else if(format == 'new_old'){
//         return filmsArr.sort((a, b) => {
//             if(a.release_date > b.release_date){
//                 return -1;
//             } else if(a.release_date < b.release_date){
//                 return 1;
//             } else{
//                 return 0;
//             }
//         });
//     }
// }
