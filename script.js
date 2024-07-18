let colorButton = document.getElementById('colorButton')
let sizeButton = document.getElementById('sizeButton')
let addText = document.getElementById('addText')
let mainContainer = document.getElementById('mainContainer')
let backButton = document.getElementById('backButton');
let nextButton = document.getElementById('nextButton');


setele = null;

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
    p.innerText = 'welcome'

    p.style.position = 'absolute'
    p.draggable = true;
    p.style.left = 0;
    p.style.top = 0;
   
    p.addEventListener('mousedown', (e) => {
       
        setele = p;
    })
    p.addEventListener('mouseup', (e) => {
        
        setele = null;
    })

    p.addEventListener('focus', (e) => {
        p.style.fontSize = fontSize + 'px'
        p.style.color = color;
    })
    mainContainer.appendChild(p)

    p.focus()
    p.addEventListener('input', (e) => {

        p.style.fontSize = fontSize + 'px'
        p.style.color = color;

       
    })
}


mainContainer.addEventListener('mousemove', (e) => {


    if (setele) {
        let currentPosX = Number(setele.style.left.split('px')[0])
        setele.style.left = (currentPosX + e.movementX) + 'px'

        let currentPosY = Number(setele.style.top.split('px')[0])
        setele.style.top = (currentPosY + e.movementY) + 'px'

    }

})


