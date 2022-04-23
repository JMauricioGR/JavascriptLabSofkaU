import data from './data.js'

window.onload = () => { //metodod de carga de la primera pregunta y sus opciones, invocando las funciones correcpondientes
    let random = getRandom(5, 0);

    sessionStorage.setItem('actualLevel', 1)
    sessionStorage.setItem('totalPoints', 0)

    levelSpace.innerHTML = "Ronda " + level;
    getQuestionAnswer(random)
    getOptions(random)
    sessionStorage.setItem('questionPoints', getPoints(random))
}

let gameZone = document.querySelector("#game-zone"),
    questionZone = document.querySelector("#question"),
    optionsZone = document.querySelector("#options"),
    levelSpace = document.querySelector("#level"),
    level = String(sessionStorage.getItem('actualLevel')),
    btnContinue = document.querySelector("#btn-continue"),
    btnResign = document.querySelector("#btn-resign");

btnContinue.addEventListener('click', () => {
    let random,
        selectedOption = document.querySelector("#select-option");

    if (sessionStorage.getItem('answer') != selectedOption.value ){
        gameZone.innerHTML = 'Lo sentimos has perdido'
    }

    if (sessionStorage.getItem('answer') == selectedOption.value && parseInt(sessionStorage.getItem('actualLevel')) < 5){
        sessionStorage.setItem('actualLevel', String(parseInt(sessionStorage.getItem('actualLevel'))+1))
        
        let randomRange = sessionStorage.getItem('actualLevel')
                
        switch (randomRange) { //Calculo del número aleatorio de acuerdo a la ronda en el sessionStorage ('actualLevel')
            case '2':
                random = getRandom(9.9, 5);
                levelSpace.innerHTML = "Ronda " + randomRange;
                break;
            case '3':
                random = getRandom(14.9, 10);
                levelSpace.innerHTML = "Ronda " + randomRange;
                break;
            case '4':
                random = getRandom(19.9, 15);
                levelSpace.innerHTML = "Ronda " + randomRange;
                break;
            case '5':
                random = getRandom(24.9, 19);
                levelSpace.innerHTML = "Ronda " + randomRange;
                break;
        }
        getQuestionAnswer(random)
        getOptions(random)
        totalPoints()
        sessionStorage.setItem('questionPoints', getPoints(random))
        
    }

    if (sessionStorage.getItem('answer') == selectedOption.value && parseInt(sessionStorage.getItem('actualLevel')) == 5){
        totalPoints()
        gameZone.innerHTML = 'Felicitaciones has GANADO $' + document.querySelector("#userPoints").value
    }
}
)

btnResign.addEventListener('click', () => {gameZone.innerHTML = 'Felicitaciones has GANADO $' + document.querySelector("#userPoints").value})

function getQuestionAnswer(random) { //Función que obtiene una pregunta de acuerdo a un número aleatorio y la agrega al html
    let question = data[random].question,
        answer = data[random].answer;
        
    console.log("Pregunta: " + question + " --- Respuesta: " + answer) 
    sessionStorage.setItem('answer', answer)
    questionZone.innerHTML = question
    

}

function getOptions(random) { //Función que obtiene las opciones de la pregunta calculada, de acuerdo al mismo número aleatorio de la pregunta. Crea el select con estas opciones
    let options = Object.values(data[random].options)
    
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
}

function getPoints(random){ //Función que retorna los puntos de la pregunta selecciona mediante un número aleatorio 
    return data[random].points;
}

function totalPoints(){
    let allPointsWon = parseInt(sessionStorage.getItem('totalPoints')),
        questionPoints = parseInt(sessionStorage.getItem('questionPoints'));
    
    
    document.querySelector("#userPoints").value = allPointsWon + questionPoints
    sessionStorage.setItem('totalPoints', allPointsWon + questionPoints)
    
}

function getRandom(max, min) { //Función para obtener un número aleatorio de acuerdo a valores máximos y mínimos
    return Math.floor(Math.random() * (max - min) + min);
}