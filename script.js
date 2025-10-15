const question = [
    {
        question: "Which of the following is true about the data structure :-",
        answer: [
            { text: "Organization of data items in main memory", correct: false},
            { text: "Organization of data items in secondary memory", correct: false},
            { text: "Relationship among the data items", correct: false},
            { text: "all of the above", correct: true},
            { text: "none of the these", correct: false},
        ]
    },
    {
        question: "Which of the following is a non-linear data structure :- ",
        answer: [
            { text: "linked list", correct: false},
            { text: "array", correct: false},
            { text: "tree", correct: true},
            { text: "all of the above", correct: false},
            { text: "none of the these", correct: false},
        ]
    },
    {
        question: "Which of the following is a primitive data structure :-",
        answer: [
            { text: "pointer", correct: false},
            { text: "array", correct: true},
            { text: "list", correct: false},
            { text: "all of the above", correct: false},
            { text: "none of the these", correct: false},
        ]
    },
    {
        question: "An array is not a suitable data structure for which of the following operation :- ",
        answer: [
            { text: "searching", correct: false},
            { text: "sorting", correct: false},
            { text: "deletion", correct: true},
            { text: "traveral", correct: false},
            { text: "all of these", correct: false},

        ]
    },
    {
        question: "Which is the following is a most commonly used data structure is the implementation of a DBMS :- ",
        answer: [
            { text: "linked list", correct: false},
            { text: "array", correct: false},
            { text: "integer", correct: true},
            { text: "stack", correct: false},
        ]
    },
    {
        question: "Which is the following is an application of data structure :- ",
        answer: [
            { text: "statistical analysis of packages", correct: false},
            { text: "simulation", correct: false},
            { text: "operating system", correct: true},
            { text: "graphics", correct: false},
            { text: "all of these", correct: false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
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
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
