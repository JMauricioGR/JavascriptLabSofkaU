import data from './data.js'

window.onload = () => { //metodod de carga de la primera pregunta y sus opciones, invocando las funciones correcpondientes
    let random = getRandom(5, 0);

    sessionStorage.setItem('actualLevel', 1);

    levelSpace.innerHTML = "Ronda " + level;
    getQuestionAnswer(random)
    getOptions(random)

}

let gameZone = document.querySelector("#game-zone"),
    questionZone = document.querySelector("#question"),
    optionsZone = document.querySelector("#options"),
    pointsZone = document.querySelector("#pointsZone"),
    levelSpace = document.querySelector("#level"),
    level = String(sessionStorage.getItem('actualLevel')),
    btnContinue = document.querySelector("#btn-continue");


btnContinue.addEventListener('click', () => {
    let random,
        selectedOption = document.querySelector("#select-option");
    
    if (sessionStorage.getItem('answer') == selectedOption.value) {
        sessionStorage.setItem('actualLevel', String(parseInt(sessionStorage.getItem('actualLevel'))+1))
        
        let randonRange = sessionStorage.getItem('actualLevel')
                
        switch (randonRange) { //Calculo del número aleatorio de acuerdo a la ronda en el sessionStorage ('actualLevel')
            case '2':
                random = getRandom(9.9, 5);
                levelSpace.innerHTML = "Ronda " + randonRange;
                break;
            case '3':
                random = getRandom(14.9, 10);
                levelSpace.innerHTML = "Ronda " + randonRange;
                break;
            case '4':
                random = getRandom(19.9, 15);
                levelSpace.innerHTML = "Ronda " + randonRange;
                break;
            case '5':
                random = getRandom(24.9, 19);
                levelSpace.innerHTML = "Ronda " + randonRange;
                break;
        }
        
       
        alert(random + typeof random);
        getQuestionAnswer(random)
        alert(random + typeof random);
        getOptions(random)
    }
}
)



function cleanGameZone() {
    gameZone.innerHTML = "";
}

function getQuestionAnswer(random) { //Función que obtiene una pregunta de acuerdo a un número aleatorio y la agrega al html
    alert("INgresa a consultar y cargar pregunta a html")
    let question = data[random].question,
        answer = data[random].answer,
        points = data[random].points;
    console.log(question + "    " + answer) 
    sessionStorage.setItem('answer', answer)
    questionZone.innerHTML = question
    pointsZone.innerHTML = points;//NEW<----

}

function getOptions(random) { //Función que obtiene las opciones de la pregunta calculada, de acuerdo al mismo número aleatorio de la pregunta. Crea el select con estas opciones
    let options = Object.values(data[random].options)
    let points = data[random].points; //NEW <----
    optionsZone.innerHTML = ""
    let htmlInsert = 
    `<div class="row mb-1">
                        <div class="input-group input-group-md m-4">
                            <div class="input-group-text input-group-md">
                                <select class="form-select form-select-md" aria-label="Default select example" id="select-option">
                                `

    for (let i = 0; i <= options.length - 1; i++) {
        htmlInsert += `<option value="${options[i]}">${options[i]}</option>`;
    }

    htmlInsert += `
                            </select>
                        </div>
                        
                    </div>
                </div>`
    
    optionsZone.innerHTML = htmlInsert

    //Muestra el puntaje
    pointsZone.innerHTML = "" //NEW <---
    let htmlInsert1 = `<div class="position-fixed top-10 right-100 d-flex" id="pointsZone">
    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-coin-investment-kiranshastry-lineal-kiranshastry.png"
    width="50" height="40" id="coin" />
    <input type="number" name="pointswon" id="userPoints" value="${points}" enable>
    </div>`
    pointsZone.innerHTML = htmlInsert1
    
}

function getRandom(max, min) { //Función para obtener un número aleatorio de acuerdo a valores máximos y mínimos
    return Math.floor(Math.random() * (max - min) + min);
}