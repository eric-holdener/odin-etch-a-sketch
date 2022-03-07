window.addEventListener('load', function() {
    createGrid();
});

function createGrid() {
    let gridContainer = document.getElementById('grid-container');

    if (gridContainer.childNodes.length > 0) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    let x = Math.floor(window.innerWidth / 50);
    let y = Math.floor(window.innerHeight / 50);
    
    console.log('creating boxes');
    for (let i = 0; i < x*y && i < 256; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        gridContainer.appendChild(box);
    }
    console.log('boxes created');
}

window.addEventListener('resize', function() {
    createGrid();
});

