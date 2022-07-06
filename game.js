//generating random number
var systemGuess=Math.floor(Math.random()*100)+1 //Math.random()_->randonly generates a no. between 0 and 1(exc)
var guess=0
function guessNum(){
    var num = document.getElementById("in").value
    if (num === '' || num>100 || num<1){
       console.log("Invalid input")
    }
    else {
    guess++
    var input=document.getElementById("in");
    var num = parseInt(input.value) //fetching value entered in input box
    console.log(typeof(num))

    if(num === systemGuess) {
        console.log("Got the answer correctly")
        document.getElementById("out").innerHTML+=" <i>Got the answer correctly</i><br>"
    } 
    else if(num > systemGuess) {
         console.log("Guess a smaller number")
         document.getElementById("out").innerHTML+=" Guess a smaller number<br>"

    }
    else {
        console.log("Guess a larger number")
        document.getElementById("out").innerHTML+=" Guess a larger number<br>"

    }
}
    
}

//innerHTML-> everything enclosed within that element including html 
//innerHTML -> only text