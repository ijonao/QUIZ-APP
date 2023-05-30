const questions = [
    {
        question: "Qual e o maior animal do mundo?",
        answers:
        [
            { text: "Baleia Azul" , correct: true},
            { text: "Elefante" , correct: false},
            { text: "Tubarao" , correct: false},
            { text: "Giraffa" , correct: false},
        ]
    },
    {
        question: "Qual e o maior animal do mundo?",
        answers:
        [
            { text: "Elefante" , correct: false},
            { text: "Tubarao" , correct: false},
            { text: "Baleia Azul" , correct: true},
            { text: "Giraffa" , correct: false},
        ]
    },
    {
        question: "Qual e o maior animal do mundo?",
        answers:
        [
            { text: "Elefante" , correct: false},
            { text: "Tubarao" , correct: false},
            { text: "Baleia Azul" , correct: true},
            { text: "Giraffa" , correct: false},
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
