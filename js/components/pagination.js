import { randerCards } from "./generateCards.js";

function createPagination(data) {
    for (let i = 1; i <= data; i++) {
        document.querySelector('.searching-link').innerHTML += `
        <a href="#" class="searching-link__item">${i}</a>
        `
    }
}

function pagination(data) {
    let notesOnPage = 10;
    console.log(data)
    let object = data;

    document.querySelectorAll('.searching-link__item').forEach(item => {
        item.addEventListener('click', () => {
           let active =  document.querySelector('.active');
           if (active) {
               active.classList.remove('active')
           }
            
            item.classList.add('active')
            let pageNum = +item.innerHTML;

            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;

            let notes = object.slice(start, end)
            randerCards(notes)
        })
    })
}
export {createPagination, pagination}