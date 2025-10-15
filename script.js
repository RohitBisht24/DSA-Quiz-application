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
            { text: "array", correct: true},
            { text: "integer", correct: false},
            { text: "stack", correct: false},
        ]
    },
    {
        question: "Which is the following is an application of data structure :- ",
        answer: [
            { text: "statistical analysis of packages", correct: false},
            { text: "simulation", correct: false},
            { text: "operating system", correct: false},
            { text: "graphics", correct: false},
            { text: "all of these", correct: true},

        ]
    },
    {
        question: "The memory address of the first element of the array is known :- ",    
        answer: [
            { text: "floor adddress", correct: false},
            { text: "first address", correct: false},
            { text: "foundation address", correct: false},
            { text: "base address", correct: true},
        ]
    },
    {
        question: "Which is the following data structure is indexed data structure :- ",
        answer: [
            { text: "linear arrays", correct: true},
            { text: "linked list", correct: false},
            { text: "both linear arrays and linked list ", correct: false},
            { text: "neither linear arrays and linked list", correct: false},
        ]
    },
    {
        question: "Which of the following data structure can't store the non-homogeneous data elements :- ",
        answer: [
            { text: "records", correct: false},
            { text: "pointers", correct: false},
            { text: "arrays", correct: true},
            { text: "none of these", correct: false},
        ]
    },
    {
        question: "To represent hierarchical relationship between elements which data structure is suitable :- ",
        answer: [
            { text: "linked lists", correct: false},
            { text: "array", correct: false},
            { text: "tree", correct: true},
            { text: "graph", correct: false},
        ]
    },
    {
        question: "The length linear array can be abtained by which of the formula :- ",
        answer: [
            { text: "UB+LB-1", correct: false},
            { text: "UB-LB", correct: false},
            { text: "UB-LB+1", correct: true},
            { text: "UB+LB-1", correct: false},
        ]
    },
    {
        question: "Sparse Matrices are matrices with :- ",
        answer: [
            { text: "Less proportion of Zeros", correct: false},
            { text: "High proportion of Zeros", correct: true},
            { text: "No Zeros", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "Representation of data structure is memory is known as :- ",
        answer: [
            { text: "recursive", correct: false},
            { text: "file structure", correct: false},
            { text: "storage structure", correct: true},
            { text: "abstract data type", correct: false},
        ]
    },
    {
        question: "The elements of array are stored in contiguous memory locations irrespective of the type and dimension of the array :- ",
        answer: [
            { text: "TRUE", correct: false},
            { text: "FALSE", correct: true},
            { text: "Indeterminate", correct: false},
        ]
    },
    {
        question: "Which of the following data structures are best suited for the random accessing of the element :- ",
        answer: [
            { text: "linked lists", correct: false},
            { text: "pointer", correct: false},
            { text: "array", correct: true},
            { text: "all of the above", correct: false},
            { text: "none of the above", correct: false},
        ]
    },
    {
        question: "Given as array, A(5:50), Base address=300, w=4. find the address of the element A(15):- ",
        answer: [
            { text: "355", correct: false},
            { text: "340", correct: true},
            { text: "350", correct: false},
            { text: "330", correct: false},
            { text: "can't determine", correct: false},
        ]
    },
    {
        question: "Given as array, A(5:50), Base address=300, w=4. find the address of the element A(55):- ",
        answer: [
            { text: "340", correct: true},
            { text: "540", correct: false},
            { text: "680", correct: false},
            { text: "850", correct: false},
            { text: "can't determine", correct: false},
        ]
    },
    {
        question: "Consider and array B(-5:10), Find the length of the arry B :- ",
        answer: [
            { text: "16", correct: true},
            { text: "18", correct: false},
            { text: "17", correct: false},
            { text: "15", correct: false},
        ]
    },
    {
        question: "Consider and array C(1:8, -5:5, -10:5), Find the length of the arry C :- ",
        answer: [
            { text: "1008", correct: false},
            { text: "1508", correct: false},
            { text: "1468", correct: false},
            { text: "1408", correct: true},
        ]
    },
    {
        question: "Which of the following is a perfect data structure in terms of utilization of memory and run time :- ",
        answer: [
            { text: "tree", correct: false},
            { text: "array", correct: false},
            { text: "linked list", correct: false},
            { text: "all of the above", correct: false},
            { text: "none of the above", correct: true},
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
