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
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"1";
    }
function two (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"2";
}
function three (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"3";
}
function four (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"4";
}
function five (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"5";
}
function six (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"6";
}
function seven (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"7";
}
function eight (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"8";
}
function nine (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"9";
}
function zero (){
    document.getElementById("displayTwo").innerHTML = document.getElementById("displayTwo").innerHTML+"0";
}
function dot (){
    let check = document.getElementById("displayTwo").innerHTML
    if(typeof(check) != '.'){
        document.getElementById("displayTwo").innerHTML =  document.getElementById("displayTwo").innerHTML+".";  
    } 
}
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

