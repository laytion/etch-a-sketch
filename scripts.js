const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn');
const pencilBtn = document.querySelector('#pencil');
const eraserBtn = document.querySelector('#eraser');
const rgbBtn = document.querySelector('#rgb');

//default number of squares: 16
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}
//default pencil
changeSquaresColor('black');

eraserBtn.addEventListener('click', () => {
    changeSquaresColor('white');
})

pencilBtn.addEventListener('click', () => {
    changeSquaresColor('black');
})

clearBtn.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    let squareSize = prompt("Enter the number of squares per side for the new grid");
    while (squareSize > 100) {
        squareSize = prompt("Please Enter a number less than 100");
    }
    console.log(squareSize)
    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            let div = document.createElement('div');
            div.classList.add('squares');
            container.appendChild(div);
        }
    }

    changeSquaresSize(squareSize);


    changeSquaresColor('black');

})

function changeSquaresColor(color) {
    document.querySelectorAll('.squares').forEach(square =>
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        }))
}


function changeSquaresSize(squareSize) {
    squareWidth = (960 / squareSize) * 0.9;
    document.querySelectorAll('.squares').forEach(square => {
        square.style.width = squareWidth + 'px';
        square.style.height = squareWidth + 'px';
    })
}