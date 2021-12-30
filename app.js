import { renderGoblin } from './render-utils.js';

// import functions and grab DOM elements
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHpEl = document.querySelector('#adventurer-hp');
const form = document.querySelector('form');
const goblinsListEl = document.querySelector('.goblins');


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
        hp: 3
    };
    goblins.push(newGoblin);
    form.reset();

    displayGoblins();
});

function displayGoblins(){
    goblinsListEl.textContent = '';
    
    for (let goblin of goblins){

        const goblinsEl = renderGoblin(goblin);

        if (goblin.hp > 0){
            goblinsEl.addEventListener('click', () => {
                if (Math.random() < .33) {
                    goblin.hp--;
                    alert(' You hit the goblin known as ' + goblin.name);
                } else {
                    alert(' you tried to hit ' + goblin.name + ' but you missed ');
                }
                if (Math.random() < .5) {
                    adventurerHp--;
                    alert(goblin.name + ' hit you ');
                } else {
                    alert(goblin.name + ' tried to hit you but missed! ');
                }
                if (goblin.hp === 0) {
                    defeatedNumber++;
                }
                if (adventurerHp === 0) {
                    alert(' Game Over! ');
                }

                adventurerHpEl.textContent = adventurerHp;
                defeatedNumberEl.textContent = defeatedNumber;

                displayGoblins();
                
            });
        }
        goblinsListEl.append(goblinsEl);
    }
}
displayGoblins();


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
