var redlight = document.getElementById("redlight");
var yellowlight = document.getElementById("yellowlight");
var greenlight = document.getElementById("greenlight");
function button1(){
    redlight.style.backgroundColor ="red";
    yellowlight.style.backgroundColor ="white";
    greenlight.style.backgroundColor ="white";
}
function button2(){
    yellowlight.style.backgroundColor ="yellow";
    redlight.style.backgroundColor ="white";
    greenlight.style.backgroundColor ="white";
}
function button3(){
    greenlight.style.backgroundColor ="green";
    redlight.style.backgroundColor ="white";
    yellowlight.style.backgroundColor ="white";
}