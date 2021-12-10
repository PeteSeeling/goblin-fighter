

export function renderGoblin(goblinData){
    const goblinsEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinsEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    faceEl.textContent = goblinData.hp > 0 ? '👹' : '🔥';

    if (goblinData.hp < 0){
        goblinsEl.classList.add('dead');

        goblinsEl.append(nameEl, faceEl, hpEl);

        return goblinsEl;

      
    }
    console.log(goblinData.hp);




}