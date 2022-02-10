function createGrid(container, size) {
    container.textContent = '';
    container.style.cssText = `width: 500px; height: 500px; display: inline-grid; grid-template-columns: repeat(${size}, 1fr);`
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let div = document.createElement('div');
            container.appendChild(div);
        }
    }
    let alldivs = document.querySelectorAll('.container div');
    alldivs.forEach((div) => {
        div.addEventListener(('mouseenter'), () => {
            div.setAttribute("class", "hovered");
        })
    })
}

let sidesize = 16;
const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.style.cssText = `width: 500px; height: 500px; display: inline-grid; grid-template-columns: repeat(${sidesize}, 1fr);`

body.appendChild(container);
for (i = 0; i < sidesize; i++) {
    for (j = 0; j < sidesize; j++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }
}

let alldivs = document.querySelectorAll('.container div');
alldivs.forEach((div) => {
    div.addEventListener(('mouseenter'), () => {
        div.setAttribute("class", "hovered");
    })
})

const clearbutton = document.querySelector('button');
clearbutton.addEventListener(('click'), () => {
    alldivs.forEach((div) => {
        div.classList.remove('hovered');
    }) 
    let sidesize = Number(prompt('Size'));
    createGrid(container, sidesize);
})
