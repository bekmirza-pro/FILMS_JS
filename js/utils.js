
const makeElament = (selector) => document.querySelector(selector);
const createDOM = (elament) => document.createElement(elament);



function normalizedDate(time){
    var year = new Date(time).getFullYear();
    var month = String(new Date(time).getMonth() + 1).padStart(2, '0');
    var day = String( new Date(time).getDate()).padStart(2, '0');

    return day + '.' + month + '.' + year;
}
