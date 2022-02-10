const container = document.querySelector('.container');
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        let div = document.createElement('div');
        container.appendChild(div);
    } 
}

const alldivs = document.querySelectorAll('.container div');
alldivs.forEach((div) => {
    div.addEventListener(('mouseenter'), () => {
        div.setAttribute("class", "hovered");
    })
})

const clearbutton = document.querySelector('.clear');
clearbutton.addEventListener(('click'), () => {
    let blackdivs = document.querySelectorAll('.hovered');
    blackdivs.forEach((div))
})
