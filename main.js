const statusBar = document.getElementById('stat-btn');
const questionContain = document.getElementById('question-contain');
const questionElement = document.getElementById('questions');

let shuffledQuestions, currentQuestions
 const question = [
     {
         question: 'what is 4 + 4?',
         answer: [
             {text:'4', correct: true},
             {text:'30', correct:false}
         ]
     }
 ]

statusBar.addEventListener('click', statGame);
function statGame () {
 statusBar.classList.add('hide');
 questionContain.classList.remove('hide');
 shuffledQuestions = question.sort(() => Math.random() - .5);
 currentQuestions = 0;
 setNextQuestion()

} m

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestions]);

}
function showQuestion(question) {
    questions.innerText = question.question

}

function selectAnswer () {

}
