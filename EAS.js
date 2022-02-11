// initialize body and container elements 
const container = document.createElement('div'); // create container div
container.setAttribute('class', 'container');
document.body.appendChild(container); 

let sidesize = 16; // set grid size to 16 (per side)
let backgroundColor = 'black';

const colorpicker = document.querySelector('.colorpicker'); // add color palette

// create grid function
function createGrid(container, size) {
    container.textContent = ''; // erase all divs when creating new grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // add new divs
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let div = document.createElement('div');
            container.appendChild(div);
        }
    }
    let alldivs = document.querySelectorAll('.container div');

    // color palette function 
    colorpicker.addEventListener(('input'), () => {
        backgroundColor = colorpicker.value;
    })

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
    while ((sidesize <= 0) || (sidesize > 100) || (isNaN(sidesize))) {
        sidesize = prompt('Size (1 - 100)');
    }
    createGrid(container, sidesize); // create new grid
})