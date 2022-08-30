let userName = window.prompt('samantha:')
for(let i = 0; i < questions.length; i++){
 let question = questions[i]   
 let userAnswer = window.prompt (question.text)
 if(userAnswer === question.correctAnswer) 
 {userScore = userScore + 10}
 {window.alert('Your score is: '+userScore)}
 {console.log('correct')}
    text: `What is the first book of the Old Testament?
    A. Leviticus
    B. Numbers
    C. Genesis
    D. Exodus`,
    correctAnswer; "C"



}
