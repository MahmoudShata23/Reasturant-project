/*var x =10;
var y = 5;
var z = x*y;
window.alert(z);
console.log(z);
document.getElementById("demo").innerHTML = (z);*/

/*var num1 = Number(prompt("enter first number"));
var num2 = Number(prompt("enter second number"));
var z = (num1 + num2) / 2;
window.alert("(num1+num2)/2 = " + z);*/

/*
var career = prompt("enter your career");
if( career =="front"){
    window.alert("learn html");
}
else if(career == "back"){
    window.alert("learn php");
}
else if(career == "ios"){
    window.alert("learn swift");
}
else{
    window.alert("rawe7 nam");
}*/


/*
var content="";
for(var i=0; i<10; i++){
    /*content += '<li><img src="img/EgyptianMusium.jpg" alt=""></li>'
    content += '<img src="img/EgyptianMusium.jpg" alt="">'
}
document.getElementById("myul").innerHTML = content;*/
function sayhello(){
    window.alert("hello")
}
/*function getavg(num1 , num2){
    var sum= num1+num2;
    console.log(sum/2);
}
getavg(10,20);*/
function getfinalprice(price,tax,adds){

    var priceaftertax = price * tax ;
    var priceafteradds = price * adds;
    var finalprice = price + (priceafteradds + priceaftertax);
    console.log(finalprice);
}
getfinalprice(1000,.10,.05);
