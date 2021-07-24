var elList = document.querySelector('.list');



for (var i = 0; i < films.length; i++){
    var newLi = document.createElement('li');
	newLi.setAttribute('class', 'films-item');

    var newId = document.createElement('p')
    newId.textContent = films[i].id;

    var newHeading = document.createElement('h1');
    newHeading.textContent = films[i].title;

    var newPoster = document.createElement('img');
    newPoster.setAttribute('width', '310');
	newPoster.setAttribute('height', '310');
	newPoster.setAttribute('src', films[i].poster);

    var newOverview = document.createElement('h3');
    newOverview.textContent = films[i].overview;

    var newData = document.createElement('p');
    var releaseDay = new Date(films[i].release_date)
    var day = String(releaseDay.getDate()).padStart(2,"0")
    var month = String(releaseDay.getMonth()+1).padStart(2, "0");
    var year = releaseDay.getFullYear();
    var showDay = day + "." + month +"."+year
    newData.textContent = showDay;
    console.log(showDay)

    var newGenres = document.createElement('p');
    newGenres.textContent = films[i].genres;



    newLi.appendChild(newId);
    newLi.appendChild(newHeading);
    newLi.appendChild(newPoster);
    newLi.appendChild(newOverview);
    newLi.appendChild(newData);
    newLi.appendChild(newGenres);

    elList.appendChild(newLi);
}









// {
//     id: '287947',
//     title: 'Shazam!',
//     poster: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
//     overview:
//         'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
//     release_date: 1553299200,
//     genres: ['Action', 'Comedy', 'Fantasy'],
// },