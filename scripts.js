const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clearBtn');

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}

changeSquaresColor();

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


    changeSquaresColor();

})

function changeSquaresColor() {
    document.querySelectorAll('.squares').forEach(square =>
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        }))
}

// function changeSquaresSize(squareSize) {
//     let square = document.querySelector('.squares');
//     squareWidth = 960 / squareSize;
//     square.style.width = squareWidth + 'px';
//     square.style.height = squareWidth + 'px';
// }

function changeSquaresSize(squareSize) {
    squareWidth = (960 / squareSize) * 0.9;
    document.querySelectorAll('.squares').forEach(square => {
        square.style.width = squareWidth + 'px';
        square.style.height = squareWidth + 'px';
    })
}