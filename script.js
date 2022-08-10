 //  we dont want to random decimal number that why Math.ceil using this method
 // Math.random method is creating random numbers 1 to 10
 const num1 = Math.ceil(Math.random()*10) 
 const num2 = Math.ceil(Math.random()*10 )

const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const scoreE1 = document.getElementById("score")

// score is converting string to number
let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0;
}
scoreE1.innerText = `score: ${score}`

questionEl.innerText = `what is ${num1} multiply by ${num2} ?`

const correctAns = num1 * num2

// call back function
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value  // + is converting string to number
    if(userAns === correctAns){
        score++
        updatelocalStorage()
    }
    else{
        score--
        updatelocalStorage()
    }
});
 
function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
 