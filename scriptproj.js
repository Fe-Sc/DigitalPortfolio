const cards = document.querySelectorAll('.project-card');
const container = document.querySelector('.project-grid')
const sorttext = document.getElementById('sort')
let reversed = false;
let sortingorder = true; //true is old false is new
cards.forEach((cards, index) =>  {
    const cardNumber = index + 1;
    console.log(cardNumber);
})

document.querySelector('#reverseBtn').addEventListener('click', () => {
    reversed = !reversed;
    sortingorder = !sortingorder;
    const cardArray = Array.from(cards);
    if (reversed) {
        cardArray.reverse().forEach(card => container.appendChild(card));
    } else {
        cardArray.forEach(card => container.appendChild(card));
    }

    if(sortingorder){
        sorttext.textContent = 'oldest first';
    } else{
        sorttext.textContent = 'newest first';
    }

});