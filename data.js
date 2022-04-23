
let data = [
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: {opt1: "Mississippi", opt2: "Nilo", opt3:"Amazonas", opt4: "Danubio"},
        answer: "Nilo",
        points: 100
    },
    {
        question: "¿Cuantas cordilleras tienen Colombia?",
        options: {opt1: "Ninguna", opt2: "Cuatro", opt3:"Tres", opt4: "Una"},
        answer: "Tres",
        points: 100
    },
    {
        question: "En estos dos oceanos Colombia tiene costa",
        options: {opt1: "Índico y Pacífico", opt2: "Atlántico y Pacífico", opt3:"Mediterraneo y Atlántico", opt4: "Mediterraneo e Índico"},
        answer: "Atlántico y Pacífico",
        points: 100
    },
    {
        question: "El país mas grande del mundo es:",
        options: {opt1: "Rusia", opt2: "China", opt3:"EEUU", opt4: "Brasil"},
        answer: "Rusia",
        points: 100
    },
    {
        question: "El monte con más altura del planeta es:",
        options: {opt1: "Aconcagua", opt2: "K2", opt3:"Kilimanjaro", opt4: "Everest"},
        answer: "5opción 1",
        points: 100
    },
    {
        question: "Uno de estos no fue emperador Romano",
        options: {opt1: "Marco Aurelio", opt2: "Adriano", opt3:"Napoleon", opt4: "Augusto"},
        answer: "Napoleon",
        points: 200
    },
    {
        question: "¿En qué año el hombre llego a la Luna?",
        options: {opt1: "1958", opt2: "1963", opt3:"1972", opt4: "1969"},
        answer: "1969",
        points: 200
    },
    {
        question: "La batalla de Boyaca se dio en el año: ",
        options: {opt1: "1813", opt2: "1810", opt3:"1819", opt4: " 1823"},
        answer: "1819",
        points: 200
    },
    {
        question: "¿Quién fundo la ciudad de Bogotá?",
        options: {opt1: "Simon Bolivar", opt2: "Gonzalo Jiménez de Quesada", opt3:"Francisco Pizarro", opt4: "Cristobal Colon"},
        answer: "Gonzalo Jiménez de Quesada",
        points: 200
    },
    {
        question: "¿En qué año termino la segunda guerra mundial?",
        options: {opt1: "1945", opt2: "1942", opt3:"1948", opt4: "1947"},
        answer: "1945",
        points: 200
    },
    // Otras 10 preguntas
    {
        question: "¿Cómo se llamaba el cantante de la banda Queen?",
        options: {opt1: "Keith Richards", opt2: "Bon Scott", opt3:"Freddy Mercury", opt4: "Axel Rose"},
        answer: "Freddy Mercury",
        points: 300
    },
    {
        question: "¿Cual de estas peliculas tiene más premios Oscar?",
        options: {opt1: "El Padrino", opt2: "Pulp Fiction", opt3:"Avatar", opt4: "Titanic"},
        answer: "Titanic",
        points: 300
    },
    {
        question: "La marca distintiva de Harry Potter es:",
        options: {opt1: "Un lunar", opt2: "Un tatuaje", opt3:"Una cicatriz", opt4: "Una verruga"},
        answer: "Una cicatriz",
        points: 300
    },
    {
        question: "Uno de estos no es un personaje de la película Matrix",
        options: {opt1: "Morfeo", opt2: "Trinity", opt3:"Jack", opt4: "Neo"},
        answer: "Jack",
        points: 300
    },
    {
        question: "¿Cuál de estos personas es guitarrista de la banda AC/DC?",
        options: {opt1: "Angus Young", opt2: "Slash", opt3:"Keith Richards", opt4: "Bryan May"},
        answer: "Angus Young",
        points: 300
    },
    {
        question: "¿Qué representan los 5 anillos Olímpicos",
        options: {opt1: "Los 5 primeros deportes", opt2: "Los creadores de los Olímpicos", opt3:"Los 5 continentes", opt4: "Los 5 valores del deporte"},
        answer: "Los 5 continentes",
        points: 400
    },
    {
        question: "¿Cuál deportista ha ganado mas medallas Olímpicas?",
        options: {opt1: "Usain Bolt", opt2: "Mark Spitz", opt3:"Carl Lewis", opt4: "Michael Phelps"},
        answer: "Michael Phelps",
        points: 400
    },
    {
        question: "¿Cuál selección gano el primer mundial de futbol?",
        options: {opt1: "Brasil", opt2: "Alemania", opt3:"Uruguay", opt4: "Italia"},
        answer: "Uruguay",
        points: 400
    },
    {
        question: "¿Qué tenista masculino tiene más títulos de Grand Slams?",
        options: {opt1: "Roger Federer", opt2: "Rafael Nadal", opt3:"Novak Djokovic", opt4: "Pete Sampras"},
        answer: "Rafael Nadal",
        points: 400
    },
    {
        question: "¿Qué tenista femenina tiene más títulos de Grand Slams?",
        options: {opt1: "Margaret Court", opt2: "Serena Williams", opt3:"Steffi Graf", opt4: "Martina Navrátilová"},
        answer: "Margaret Court",
        points: 400
    },
    //Otras 5 preguntas.
    {
        question: "¿Quién es al autor de la obra Guernica?",
        options: {opt1: "Pablo Picasso", opt2: "Vincent Van Gogh", opt3:"Leonardo Da Vinci", opt4: "Salvador Dalí"},
        answer: "Pablo Picasso",
        points: 500
    },
    {
        question: "¿Quién pintó la Capilla Sixtina?",
        options: {opt1: "Rembrandt", opt2: "Leonardo Da Vinci", opt3:"Claude Monet", opt4: "Miguel Ángel"},
        answer: "Miguel Ángel",
        points: 500
    },
    {
        question: "¿Cómo se llamaba el caballo que pertenecía a Don Quijote de La Mancha?",
        options: {opt1: "Tiro al Blanco", opt2: "Pegaso", opt3:"Tornado", opt4: "Rocinante"},
        answer: "Rocinante",
        points: 500
    },
    {
        question: "¿Quién es el autor de la Ilíada y la Odisea?",
        options: {opt1: "Miguel de Cervantes", opt2: "Homero", opt3:"Platón", opt4: "Aristóteles"},
        answer: "Homero",
        points: 500
    },
    {
        question: "¿A qué escritor pertenece el libro Rayuela",
        options: {opt1: "Jorge Luis Borges", opt2: "Gabriel García Márquez", opt3:"Ernesto Sábato", opt4: "Julio Cortázar"},
        answer: "Julio Cortázar",
        points: 500
    }    
];

export default data;