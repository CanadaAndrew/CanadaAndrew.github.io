function hello(){
    document.getElementById("input").style.fontSize = "24pt";
}

function fancy(){
    const input = document.getElementById("input");
    input.style.fontWeight = "bold";
    input.style.color = "blue";
    input.style.textDecoration = "underline";
}

function boring(){
    const input = document.getElementById("input");
    input.style.color = "black";
    input.style.textDecoration = "none";
    input.style.fontWeight = "normal";
}

function moo(){
    var input = document.getElementById("input");
    var str = input.value;
    var capStr = str.toUpperCase();
    var mooStr = capStr.split(".") 
    mooStr = mooStr.join("-MOO.")
    input.value = mooStr;
}
