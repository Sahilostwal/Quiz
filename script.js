const quizQb=[
    {
        question: "Q1.What is the full form of HTML?",
        a:"GGHGHHGHG",
        b:"fhghghgg",
        c:"gjgjgjgjg",
        d:"ghghtughg",
        ans:"ans4"
    },
    {
        question: "Q2.What is the full form of HTML?",
        a:"GGHGHHGHG",
        b:"fhghghgg",
        c:"gjgjgjgjg",
        d:"ghghtughg",
        ans:"ans4"
    },
    {
        question: "Q3.What is the full form of HTML?",
        a:"GGHGHHGHG",
        b:"fhghghgg",
        c:"gjgjgjgjg",
        d:"ghghtughg",
        ans:"ans4"
    },
    {
        question: "Q4.What is the full form of HTML?",
        a:"GGHGHHGHG",
        b:"fhghghgg",
        c:"gjgjgjgjg",
        d:"ghghtughg",
        ans:"ans4"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const submit=document.querySelector('#submit')
const answers=document.querySelectorAll('.answer')


const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion =() =>{
    let questionlist=quizQb[questionCount]
    question.innerText=questionlist.question;

    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
    
}
loadQuestion();

const getCheckAnswer = () =>
{
    let answer;
   
    answers.forEach((currAnsele)=>{
        if(currAnsele.checked){
            answer=currAnsele.id;
        }
        
    });
    return answer;
};
const deSelectAll= ()=>
{
answers.forEach((currAnsele)=>
currAnsele.checked=false);
}
submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizQb[questionCount].ans)
    {
        score++;
    }
    questionCount++;
    deSelectAll();
    if(questionCount < quizQb.length)
    {
        loadQuestion(); 
    }
    else{
        showScore.innerHTML=
        `<h3> Your Scored ${score}/${quizQb.length}</h3>
        <button class="btn" onclick="location .reload()">Play Again</button>`;

        showScore.classList.remove('scoreArea')

    }
});