const container = document.querySelector('.container');
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        let div = document.createElement('div');
        container.appendChild(div);
    } 
}