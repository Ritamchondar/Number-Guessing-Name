const result = Math.round((Math.random()*10)+1);
let guesses = 0;

document.getElementById("myButton").onclick= function (){
    let num = document.getElementById("num").value;
    guesses +=1;
    if (num == result){
        window.alert("You are Right and it take you " + guesses + " guesses.")
    } else if (num > result){
        window.alert("Too large.")
    } else if (num< result){
        window.alert("Too small.")
    }
}