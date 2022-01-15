import { getData } from "../services/getData.js";
import { randerCards } from "./generateCards.js";
import { createPagination, pagination } from "./pagination.js";

function search() {
    document.querySelector('.search__button').addEventListener('click', () => {
        let value = document.querySelector('.search__input').value;
        getData(`https://google-search3.p.rapidapi.com/api/v1/search/q=${value}&num=100`)
        .then(data => {console.log(data),searchCards(data), createPagination(Math.ceil(data.results.length / 10)), pagination(data.results)})
    })
}

function searchCards(data) {
    randerCards(data.results.slice(0, 11))
    pagination(data.results);
    document.querySelector('.searching-link').innerHTML = ''
    createPagination(Math.ceil(data.results / 10))
}

export {search}