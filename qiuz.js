function check(){
var q1=document.quiz.q1.value;
var q2=document.quiz.q2.value;
var q3=document.quiz.q3.value;
var correct=0;

if(q1=="Providence"){
	correct++;
}
if(q2=="Hartford"){
	correct++;
}
if(q3=="Albany"){
	correct++;
}
var messages= ["Well Done!" , "that's amazing" , " You must keep trying to be better"];
var pictures =["img/giphy1.gif" ,"img/giphy2.gif" ,"img/giphy3.gif"]
var range;
if(correct<1){
	range = 2;
}
if(correct>0 && correct<3){
	range = 1;
}
if(correct>2){
	range = 0;
}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];

document.getElementById("number_correct").innerHTML= "You got" +" " +correct + " "+ "correct.";
document.getElementById("picture").src = pictures[range];
}