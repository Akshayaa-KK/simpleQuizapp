
//page and btn elements

const loginPage = document.querySelector('.loginPage');
const loginButton = document.getElementById('loginbtn');
const instructionsPage=document.querySelector('.instructionsPage')
const okbtn=document.getElementById('okbtn')
const questionsPage=document.querySelector('.questionsPage')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const submit=document.getElementById('submit')
const resultsPage=document.querySelector('.resultsPage')
const restartQuiz=document.getElementById('restart')
const viewAnswer=document.getElementById('answer')
const answersPage=document.querySelector('.answersPage')

//question & options

var currentquestionIndex=0
var score=0
var _question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")

var options=document.getElementsByName("options")

var timer=document.getElementById("timer")

//score

var _score=document.getElementById("score")
var _playerName=document.getElementById("player-name")
var _playerId=document.getElementById("player-email")

const playerNameInput = document.getElementById('player-name-input');
const playerEmailInput = document.getElementById('player-email-input');

let playerName = '';
let playerEmail = '';

const questions = [
    {
        question: "1. What does HTML stand for?",
        answer: [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Textual Mark LingusticLanguage"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "2. Who is making the Web standards?",
        answer: ["Mozilla", "Microsoft", "Google", "The World Wide Web Consortium"],
        correct: "The World Wide Web Consortium"
    },
    {
        question: "3. Which character is used to indicate an end tag? ",
        answer: ["/","*","^",">"],
        correct:"/"
    },
    {
        question:'4. HTML program is saved using _________ extension.',
        answer:[".htl",".html",".hml",".htlm"],
        correct:".html"
    },
    {
        question:"5. Which of the following is used increase the col width?",
        answer:["cellspacing","cellpadding","Row span","Col span"],
        correct:"Col span"
    }
];

// Add click event listener to the button
// loginButton.addEventListener('click', () => {

    
//   // Change the display property to 'none'
//   loginPage.style.display = 'none';
//   instructionsPage.style.display='block'
// });

document.getElementById("userInfo").addEventListener('submit', (event) => {
     event.preventDefault(); 
    playerName = playerNameInput.value.trim();
    playerEmail = playerEmailInput.value.trim();
    loginPage.style.display = 'none';
  instructionsPage.style.display='block'
});

okbtn.addEventListener('click',()=>{
    instructionsPage.style.display='none'
    questionsPage.style.display='block'
    setInterval(updateTimer,1000)
    showQuestion(currentquestionIndex)
})

restartQuiz.addEventListener('click',()=>{
    resultsPage.style.display='none'
    currentquestionIndex=0
    score=0
    loginPage.style.display='block'
})

viewAnswer.addEventListener('click',()=>{
    resultsPage.style.display='none'
    answersPage.style.display='block'
})

submit.addEventListener('click',()=>{
    questionsPage.style.display='none'
    prepResultsPage()
    resultsPage.style.display='block'

})

next.addEventListener("click",()=>{
    
    if(currentquestionIndex<questions.length)
    {
        currentquestionIndex=currentquestionIndex+1
        showQuestion(currentquestionIndex)
      
    }
    
})

prev.addEventListener('click',()=>{
    if(currentquestionIndex>0)
    {
        currentquestionIndex=currentquestionIndex-1
        showQuestion(currentquestionIndex)
    }
   
})

function prepResultsPage(){
    _score.textContent=`${score}/5`
    _playerName.textContent=playerName
    _playerId.textContent=playerEmail
}


function showQuestion(currentquestionIndex){
    console.log(currentquestionIndex)
        let currentQuestion=questions[currentquestionIndex]
       _question.textContent=currentQuestion.question
       option1.textContent=currentQuestion.answer[0]
       options[0].value=currentQuestion.answer[0]
       option2.textContent=currentQuestion.answer[1]
       options[1].value=currentQuestion.answer[1]
       option3.textContent=currentQuestion.answer[2]
       options[2].value=currentQuestion.answer[2]
       option4.textContent=currentQuestion.answer[3]
       options[3].value=currentQuestion.answer[3]

  
    showbtn()
}

function showbtn(){
        if(currentquestionIndex==questions.length-1)
        {
            submit.style.display='inline-block'
        }
        if(currentquestionIndex>0)
        {
            prev.style.display='inline-block'
            next.style.display='inline-block'
        }
        if(currentquestionIndex==0)
        {
            prev.style.display='none'
            next.style.display='inline-block'
        }
        if(currentquestionIndex!=questions.length-1)
        {
            submit.style.display='none'
        }
        if(currentquestionIndex==questions.length-1)
        {
            next.style.display='none'
        }
}

options.forEach(element=>{
    element.addEventListener('click',function(){
     let currentQA=questions[currentquestionIndex].correct
     console.log(currentQA)
        if(event.target.value==currentQA)
        {
            score=score+1
            console.log(score)
        }
        
    })
})

const totalTime=3
let totalTimeinSec=3*60

function updateTimer(){
    let mins=Math.floor(totalTimeinSec/60)
    let sec=totalTimeinSec%60
    if(mins==0 && sec==0)
    {
        timer.innerHTML="Timeout!!!"
        questionsPage.style.display='none'
        resultsPage.style.display='block'
       _score.textContent=`${score}/5`
    }
    else{
         timer.innerHTML=`${mins}:${sec}`
    }
    totalTimeinSec--;
}


