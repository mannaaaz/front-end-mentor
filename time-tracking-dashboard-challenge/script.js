let timeframe = 'weekly'; // default value
const container = document.querySelector('.contanier')
let regularCards; // place holder for all cards

// 1. initialize menu
const menu = document.querySelectorAll('.choice-link');
console.log(menu);

menu.forEach(element => {
    element.addEventListener('click', choiceOnClick);

});

// 2. get JSON data and create cards
let date = {};

fetch('./public/data.json')
    .then(rsp => rsp.json())
    .then(jsonData => {
       // console.log(jsonData);
        // create cards
       /*  jsonData.forEach(element => {
           container.insertAdjacentHTML('beforeend',
               createRegularCard(element, timeframe));
        });
    });*/

// functions
function choiceOnClick(event) {
    //console.log('click', event.target.innerText.toLowerCase());
    menu.forEach(element => {
        element.classList.remove('choice-active');
    });
    event.target.classList.add('choice-active');
    timeframe = event.target.innerText.toLowerCase();

    updateCards(timeframe);
}

function updateCards(timeframe) {

}

function createRegularCard(element, timeframe) {
let title = element['title'];
let current = element['timeframes'][timeframe]['current'];
let previous = element['timeframes'][timeframe]['previous'];

console.log(title, current, previous);
   return `
  <div class="second-card ${title.toLowerCase().replace(/\s/g, '')}">
  <div class="logo-part">
    <img src="images/icon-work.svg" alt="logoWork">
  </div> 
<div class="second-part">
  <div class="partOne">
    <div class="title">${title}</div>
    <div class="points">
      <img src="images/icon-ellipsis.svg">
    <div class="point1"></div>
      <div class="point2"></div>
      <div class="point3"></div>
    </div> 
    </div> 
      <div class="partTwo">
    <div class="hours"> ${current}</div>
    <div class="description"> Last Week - ${previous} hours</div>
      </div> 
   </div>
  </div> ` }
