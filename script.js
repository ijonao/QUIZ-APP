const questions = [
    {
        question: "Qual o nome do primeiro filme da saga 'Star Wars' lançado em 1977?",
        answers:
        [
            { text: "Star Wars: Episódio IV - uma nova Esperança" , correct: true},
            { text: "Star Wars: Episódio V - O Império Contra-Ataca" , correct: false},
            { text: "Star Wars: Episódio VI - O Retorno de Jedi" , correct: false},
            { text: "Star Wars: Episódio I - A Ameaça Fantasma" , correct: false},
        ]
    },
    {
        question: "Qual é o nome do vilão principal na série de filmes 'Harry Potter'?",
        answers:
        [
            { text: "Draco Malfoy" , correct: false},
            { text: "Severus Snape" , correct: false},
            { text: "Bellatrix Lestrange" , correct: false},
            { text: "Lord Voldemort" , correct: true},
        ]
    },
    {
        question: "Qual é o nome do planeta natal do Superman?",
        answers:
        [
            { text: "Tatooine" , correct: false},
            { text: "Asgard" , correct: false},
            { text: "Krypton" , correct: true},
            { text: "Gotham" , correct: false},
        ]
    },
    {
        question: "Qual é o nome do personagem principal no jogo 'The Legend of Zelda'?",
        answers:
        [
            { text: "Mario" , correct: false},
            { text: "Donkey Kong" , correct: false},
            { text: "Link" , correct: true},
            { text: "Zelda" , correct: false},
        ]
    },
    {
        question: "Qual é o nome do criador do universo Marvel Comics?",
        answers:
        [
            { text: "Alan Moore" , correct: false},
            { text: "Stan Lee" , correct: true},
            { text: "Frank Miller" , correct: false},
            { text: "Jack kirby" , correct: false},
        ]
    },
    {
        question: "Qual é o nome da nave espacial com formato de cabine telefônica londrina na série 'Doctor Who'??",
        answers:
        [
            { text: "Turtis" , correct: false},
            { text: "Mill" , correct: false},
            { text: "Turtle" , correct: false},
            { text: "Tardis" , correct: true},
        ]
    },
    
    
];





const questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Next";
    showQuestion ();
}


function showQuestion () {
resetState ();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement ("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${Score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz ();
