// initialize body,container, and button elements 

let sidesize = 16; // set grid size to 16 (per side)

const ui = document.querySelector('.ui');

const container = document.createElement('div'); // create container div
container.setAttribute('class', 'container');

ui.appendChild(container); 

// create grid function
function createGrid(container, size) {
    container.textContent = ''; // erase all divs when creating new grid
    container.style.cssText = 'width: 500px; height: 500px; display: inline-grid;' 
                              + `grid-template-columns: repeat(${size}, 1fr);`;

    // add new divs
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let div = document.createElement('div');
            container.appendChild(div);
        }
    }

    let backgroundColor = 'red'; // set color

    let alldivs = document.querySelectorAll('.container div');

    // drawing function
    alldivs.forEach((div) => {
        div.addEventListener(('mouseenter'), () => {
            div.setAttribute("class", "hovered");
            div.style.cssText = `background-color: ${backgroundColor};`;
        })
    })

    // toggle grid function
    const gridbutton = document.querySelector('.grid');
    gridbutton.addEventListener(('click'), () => {
        alldivs.forEach((div) => {
            if(!div.getAttribute("style")) {
                div.style.borderStyle = 'solid';
            }
            else {
                div.style.borderStyle = null;
            }
            
        })
    })
}

// initialize grid
createGrid(container, sidesize);

alldivs = document.querySelectorAll('.container div');

// clear drawing function
const clearbutton = document.querySelector('.clear');
clearbutton.addEventListener(('click'), () => {
    alldivs.forEach((div) => {
        div.classList.remove('hovered');
    }) 
    
    // ask user for new size 
    sidesize = prompt('Size (1 - 100)');
    while ((sidesize > 100) || (isNaN(sidesize))) {
        sidesize = prompt('Size (1 - 100)');
    }
    createGrid(container, sidesize); // create new grid
})