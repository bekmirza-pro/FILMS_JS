var elList = document.querySelector('.list');
// var elForm = document.querySelector('.form');
// var elSelect = elForm.querySelector('.select');


// var genres = []
// function generatedGenres(genre){
// if(!genres.includes(genre)){
//     genres.push(genre)
// }
// }


// // function genersFilms(genres) {
// // 	for (genre of genres) {
// // 		var newOp = document.createElement('option');

// // 		newOp.textContent = genre;
// // 		newOp.value = genre;

// // 		elSelect.appendChild(newOp);
// // 	}
// // }

// function genersFilms(genres) {
// 	for (genre of  genres) {
// 		var newOp = document.createElement('option');

// 		newOp.textContent = genre;
// 		newOp.value = genre;

// 		elSelect.appendChild(newOp);
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
//         genres: film.genres,
//     }

// });


// function renderFilms(filmsArr){
//     filmsArr.forEach(film => {
        
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


// genersFilms(genres); 

// console.log(genres);

// renderFilms( normalizedFilms)
// // console.log(normalizedFilms);
// // console.log(genres)








var elForm = document.querySelector('.form');
var elSelect = elForm.querySelector('.select');


var genres = []
function generatedGenres(genre){
if(!genres.includes(genre)){
    genres.push(genre)
}
}

function genersFilms(genres) {
	for (genre of genres) {
		var newOp = document.createElement('option');
	


		newOp.textContent = genre;
		newOp.value = genre;

		elSelect.appendChild(newOp);
	}
}
  

for (var i = 0; i < films.length; i++){
    var newLi = document.createElement('li');
	newLi.setAttribute('class', 'films-item');

    var newId = document.createElement('p')
    newId.textContent = films[i].id;

    var newHeading = document.createElement('h1');
    newHeading.textContent = films[i].title;

    var newPoster = document.createElement('img');
    newPoster.setAttribute('width', '310');
	newPoster.setAttribute('height', '380');
	newPoster.setAttribute('src', films[i].poster);

    var newOverview = document.createElement('h3');
    newOverview.textContent = films[i].overview;

    var newData = document.createElement('time');
    var releaseDay = new Date(films[i].release_date)
    var day = String(releaseDay.getDate()).padStart(2,"0")
    var month = String(releaseDay.getMonth()+1).padStart(2, "0");
    var year = releaseDay.getFullYear();
    var showDay = day + "." + month +"."+year
    newData.textContent = showDay;
    

    var newGenresUl = document.createElement('ul');
    newGenresUl.setAttribute('class', 'small-list')

        films[i].genres.forEach((genre) => {
        var newGenres = document.createElement('li');
        newGenres.textContent = genre;

        newGenresUl.appendChild(newGenres);
            
        generatedGenres(genre);

    });
    

    newLi.appendChild(newId);
    newLi.appendChild(newHeading);
    newLi.appendChild(newPoster);
    newLi.appendChild(newOverview);
    newLi.appendChild(newData);
    newLi.appendChild(newGenresUl);

    elList.appendChild(newLi);
}





genersFilms(genres);