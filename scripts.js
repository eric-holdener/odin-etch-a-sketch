window.addEventListener('load', function() {
    createGrid(16);
});

function createGrid(newColumnLength) {
    let gridContainer = document.getElementById('grid-container');
    gridContainer.style.gridtemplatecolumns = newColumnLength;

    if (gridContainer.childNodes.length > 0) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    let x = Math.floor(window.innerWidth / 50);
    let y = Math.floor(window.innerHeight / 50);
    
    console.log('creating boxes');
    for (let i = 0; i < x*y && i < newColumnLength**2; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mouseover', (event) => {
            event.target.className = 'box-transition';
        })
        gridContainer.appendChild(box);
    }
}

function clearGame() {
    let gameSize = prompt('What size of board do you want?', 16);
    gameSize = parseInt(gameSize);
    createGrid(gameSize);
}