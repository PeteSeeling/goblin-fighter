// import functions and grab DOM elements
const adventurerDataEl = document.getElementById('adventurer-data');
const defeatedNumberEl = document.getElementById('defeated-number');
const defeatedListEl = document.getElementById('defeat-list');
const adventurerHpEl = document.getElementById('adventurer-hp');
const form = document.querySelector('form');
const goblinsEl = document.getElementById('goblins');

// let state
let defeatedNumber = 0;
let adventurerHp = 5;

let goblins = [
    { name: 'zeus', hp:3 },
    { name: 'al', hp:2 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: Math.floor(Math.random() * 3),
    };
    goblins.push(newGoblin);

    console.log(newGoblin);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
