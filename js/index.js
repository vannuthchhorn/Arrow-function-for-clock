//function expression
var messi = function foorball() {
    console.log(" function Expression");
}
messi();


//Regular function
function message() {
    console.log(" Hello Regular function");
}
message();

//anonumous function
var anonys = function() {
    console.log("Anonymous function");
}
anonys();


//Immediately invoke function
(function() {
    console.log("Immediately Invoke Function");
}());


//arrow function
var ronado = () => {
    console.log("Arrow function");
}
ronado();

//
var display = (name, age, province, Email) => {
    console.log(name, age, province, Email);
}
display("Vannuth", 19, "Takeo", "Vannuthchhorn@gmail.com");

//clock
var clock = () => {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();

    let timer = document.getElementById("timer");
    if (hour < 12) {
        timer.innerHTML = hour + ":" + minute + ":" + second + "AM";
    }else {
        timer.innerHTML = hour + ":" + minute + ":" + second + "PM";
    }
}
setInterval(clock,1000);
// clock
var purple = () => document.body.style.background = "purple";
var teal = () => document.body.style.background = "teal";
    document.addEventListener('click',teal);
    document.addEventListener('dblclick',purple);


//moreover
 var changeBg = () => {
     if (document.body.style.background == "teal"){
         document.body.style.background = "orange";
     }else {
        document.body.style.background = "teal";
     }
 } 
 setInterval(changeBg,1000);