import data from './data.js'

window.onload = () =>{
    let random = getRandom(5,0);
    
    sessionStorage.setItem('actualLevel', 1);
        
    levelSpace.innerHTML = "Ronda "+  level;
    getQuestion(random)
    getOptions(random)

}

let gameZone = document.querySelector("#game-zone"),
    questionZone = document.querySelector("#question"),
    optionsZone = document.querySelector("#options"),
    pointsZone = document.querySelector("#pointsZone"),
    levelSpace = document.querySelector("#level"),
    level = String(sessionStorage.getItem('actualLevel')),
    btnContinue = document.querySelector("#btn-continue");


btnContinue.addEventListener('click', ()=>{
        let random = getRandom(4,0)
        alert(random);
        borraGameZone(); 
        getOptions(random)
    }
)



function borraGameZone(){
    gameZone.innerHTML = "";
}

function getQuestion(random){
    let question = data[random].question;
    questionZone.innerHTML = question
    
}

function getOptions(random){
    let options = Object.values(data[random].options)
    optionsZone.innerHTML = ""
    let htmlInsert =`<div class="row mb-1">
                        <div class="input-group input-group-md m-4">
                            <div class="input-group-text input-group-md">
                                <select class="form-select form-select-md" aria-label="Default select example" id="select-option">
                                `

    for(let i = 0; i <= options.length-1; i++){
        htmlInsert += `<option value="${options[i]}">${options[i]}</option>`;
    }

    htmlInsert += `
            </select>
        </div>
        
    </div>
</div>`
    optionsZone.innerHTML = htmlInsert
    
}

function getRandom(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}