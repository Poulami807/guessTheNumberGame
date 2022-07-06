//generating random number
var systemGuess=Math.floor(Math.random()*100)+1 //Math.random()_->randonly generates a no. between 0 and 1(exc)
var minAttempts=8
var guess=1

function guessNum(){
    var input=document.getElementById("in");
    var num = input.value //fetching value entered in input box
    console.log(`function call ${guess}`)
    if(guess<=minAttempts){
        console.log(guess)
        if (num === '' || num>100 || num<1){
            document.getElementById("out").innerHTML+="Invalid input<br>"
            return
         }
         else {
        guess++
         var num = parseInt(input.value) 
        //  console.log(typeof(num))
         if(num === systemGuess) {
            //  console.log("Got the answer correctly")
             document.getElementById("out").innerHTML+=` <br><br><i>Congratulations! You guessed the number in ${guess-1} attempts</i`
             return
         } 
         else if(num > systemGuess) {
            //   console.log("Guess a smaller number")
              document.getElementById("out").innerHTML+=" Guess a smaller number<br>"
     
         }
         else {
            //  console.log("Guess a larger number")
             document.getElementById("out").innerHTML+=" Guess a larger number<br>"
     
         }
     }
     input.value=''
    }
    else{
        document.getElementById("out").innerHTML+=`<br><br>Sorry only ${minAttempts} attempts allowed! You Lost`
    }
}

//innerHTML-> everything enclosed within that element including html 
//innerHTML -> only text