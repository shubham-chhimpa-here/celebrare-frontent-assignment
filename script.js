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


function remove() {


    document.querySelectorAll('#mainContainer p').forEach(element => {
        console.log(element)
        element.addEventListener('blur', () => {
            if (element.innerText == '') {
                element.remove()
            }


        })

        element.addEventListener('focus', () => {
            element.style.fontSize = fontSize
            element.style.color = color;
        })

    });
}


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

    remove()

})

backButton.addEventListener('click', (e) => {
    if (current > 0) {

        current = current - 1;
        mainContainer.innerHTML = history[current]

    }
    remove()

})
nextButton.addEventListener('click', (e) => {

    if (current < history.length - 1) {

        current = current + 1;
        mainContainer.innerHTML = history[current]

    }

    remove()

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
   
    p.addEventListener('input', (e) => {
        p.style.fontSize = fontSize + 'px'
        p.style.color = color;
    })
    p.addEventListener('focus', (e) => {
        p.style.fontSize = fontSize + 'px'
        p.style.color = color;
    })
    mainContainer.appendChild(p)
   
    p.focus()
}





