function generateCards (data) {
    data.forEach(item => {
        document.querySelector('.result-list').innerHTML += `
        <li class="result-list__item">
        <a href="${item.link}" class="result-list__title">${item.link}</span>
        <a href="${item.link}" class="result-list__link">${item.title}</a>
        <p class="result-list__description">${item.description}</p>
    </li>
        `
    });
}

function randerCards(data) {
    console.log(data)
    data.forEach(item => {
        document.querySelector('.result-list').innerHTML = ''
    })
    generateCards(data)
}

export {generateCards, randerCards}
