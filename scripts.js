window.addEventListener('load', function() {
    createGrid(16);
});

function createGrid(newColumnLength) {
    let gridContainer = document.getElementById('grid-container');
    gridContainer.style.setProperty('grid-template-columns', 
        `repeat(${newColumnLength}, 1fr)`);

    if (gridContainer.childNodes.length > 0) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
    
    for (let i = 0; i < (newColumnLength * newColumnLength); i++) {
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
    if (gameSize > 100) {
        alert('That board is too big! Please pick a smaller size!');
        clearGame();
    } else {
        createGrid(gameSize);
    }
}