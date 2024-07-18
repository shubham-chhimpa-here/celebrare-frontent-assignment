let colorButton = document.getElementById('colorButton')
let sizeButton = document.getElementById('sizeButton')
let addText = document.getElementById('addText')
let mainContainer = document.getElementById('mainContainer')
let backButton = document.getElementById('backButton');
let nextButton = document.getElementById('nextButton');



let value = null;
let history = [];
let current = 0;

let fontSize = 16;
let color = 'black'

colorButton.addEventListener('input', (e) => {

    color = e.target.value;
})




sizeButton.addEventListener('input', (e) => {

    fontSize = e.target.value;
})

addText.addEventListener('click', (e) => {
    addTextToMainContainer()
    updateHistory()
    if (current < history.length - 1) {
        history.length = current;

    }

    if (history.length > 9) {
        history.shift()
    }


})

backButton.addEventListener('click', (e) => {
    if (current > 0) {

        current = current - 1;
        mainContainer.innerHTML = history[current]

    }

})
nextButton.addEventListener('click', (e) => {

    if (current < history.length - 1) {

        current = current + 1;
        mainContainer.innerHTML = history[current]

    }


})

function updateHistory() {
    value = mainContainer.innerHTML;

    history.push(value);
    current = history.length - 1;


}

function addTextToMainContainer() {
    let p = document.createElement('p')
    p.contentEditable = true;
    p.style.fontSize = fontSize + 'px';
    p.style.color = color;
    p.innerText = ' '


    p.addEventListener('focus', (e) => {
        p.style.fontSize = fontSize + 'px'
        p.style.color = color;
    })
    mainContainer.appendChild(p)

    p.focus()
    p.addEventListener('input', (e) => {

        p.style.fontSize = fontSize + 'px'
        p.style.color = color;

        if (!e.target.innerText && e.inputType == 'deleteContentBackward') {
            p.remove()
        }
    })
}





