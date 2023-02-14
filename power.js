//all the calculator buttons functions. get the value from HTML tag and put it back with new items 
function add() {
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+" + ";
}

function less (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+" - ";   
}

function forr () {
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+" * ";   
}

function dividing (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+" / ";   
}

function one (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"1";   
}

function two (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"2";
}

function three (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"3";
}

function four (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"4";
}

function five (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"5";
}

function six (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"6";
}

function seven (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"7";
}

function eight (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"8";
}

function nine (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"9";
}

function zero (){
    if (document.getElementById("displayTwo").innerHTML == "0"){
        document.getElementById("displayTwo").innerHTML = ""; 
    } 
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"0";
}

function dot (){
    let check = document.getElementById("displayTwo").innerHTML
    if(typeof(check) != '.'){
        document.getElementById("displayTwo").innerHTML =  document.getElementById("displayTwo").innerHTML+".";  
    } 
}

//result function. split the display string into array
function result (){

let b = document.getElementById("displayTwo").innerHTML
let a = b.split(" ")



let num1 = Number(a[0])
let num2 = Number(a[2])
if (a[1] == "+" ){
    document.getElementById("displayTwo").innerHTML = num1+num2;
} else if (a[1] == "-" ){
    document.getElementById("displayTwo").innerHTML = num1-num2; 
} else if (a[1] == "*" ){
    document.getElementById("displayTwo").innerHTML = num1*num2; 
} else {
    document.getElementById("displayTwo").innerHTML = num1/num2; 
}

}

function deleting (){
    document.getElementById("displayTwo").innerHTML = "0";
    c = 0
}


let c = 0

