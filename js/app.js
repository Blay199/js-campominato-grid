let gridDim = 8;

let containerElement = document.querySelector('.container');
console.log(containerElement);

grid(gridDim, containerElement)


function grid(dim, container) {
    container.innerHTML = '';
    const cellNum = dim ** 2;

    for (let i = 0; i < cellNum; i++) {
        // console.log(i);
        const cell = getCellElement();

        cell.innerHTML = i + 1;

        // appendere elemento al tabellone
        container.append(cell);
    }
}

function getCellElement() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', clickHandler); 
    return cell;
}

function clickHandler(
) {
    const cell = this;
    cell.classList.toggle('clicked');
    cell.removeEventListener('click', clickHandler);
}