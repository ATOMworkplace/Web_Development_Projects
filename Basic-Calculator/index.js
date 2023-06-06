for(var i=0;document.querySelectorAll(".button1").length;i++){
    document.querySelectorAll(".button1")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

});

}
document.addEventListener("keypress",function(Event){ 
    sound(Event.key);
    buttonAnimation(Event.key);
});


function sound(key){
    var sound = new Audio("audio/lclick-13694.mp3")
    sound.play();
}
function run1(){

    document.getElementById("result").value += "1";
};
function run2(){

    document.getElementById("result").value += "2";
};
function run3(){

    document.getElementById("result").value += "3";
};
function run4(){

    document.getElementById("result").value += "4";
};
function run5(){

    document.getElementById("result").value += "5";
};
function run6(){

    document.getElementById("result").value += "6";
};
function run7(){

    document.getElementById("result").value += "7";
};
function run8(){

    document.getElementById("result").value += "8";
};
function run9(){

    document.getElementById("result").value += "9";
};
function run0(){

    document.getElementById("result").value += "0";
};
function runadd(){

    document.getElementById("result").value += "+";
};
function runminus(){

    document.getElementById("result").value += "-";
};
function runmultiply(){

    document.getElementById("result").value += "*";
};
function rundivision(){

    document.getElementById("result").value += "/";
};
function rundot(){

    document.getElementById("result").value += ".";
};
function runequals(){
    var rest = document.getElementById("result").value;
    document.getElementById("result").value = eval(rest);  
};

function runC(){

    document.getElementById("result").value = "";
};

function buttonAnimation(currentKey){
    let key ;
    switch (currentKey){
        case "1": key = 1;
        break;
        case "2": key = 2;
        break;
        case "3": key = 3;
        break;
        case "4": key = 5;
        break;
        case "5": key = 6;
        break;
        case "6": key = 7;
        break;
        case "7": key = 9;
        break;
        case "8": key = 10;
        break;
        case "9": key = 11;
        break;
        case "0": key = 13;
        break;
        case "C": key = 0;
        break;
        case '<img src="images/addition.png">': key = 4;
        break;
        case '<img src="images/minus.png">': key = 8;
        break;
        case '<img src="images/multiplication.png">': key = 12;
        break;
        case '<img src="images/dot.jpg">': key = 14;
        break;
        case '<img src="images/equal2.jpg">': key = 15;
        break;
        case '<img src="images/division.png">': key = 16;
        break;
    }
    var activebutton = document.querySelectorAll(".button1")[key];
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");

    },100);
}