function cli() {
    var a = document.querySelector(".show");
    var btn = document.querySelector(".clickbtn");
    if(btn.innerText === "See more"){
        a.style.display = "block";
        a.style.display  ="flex";
        btn.innerHTML = "See less"
    }else if (btn.innerText == "See less") {
        a.style.display = "none";
        btn.innerHTML = "See more";
    }
}

var bg = document.querySelector("#main");

var lName = document.querySelector("#lName");
var email = document.querySelector("#email");
var passward = document.querySelector("#passward");
var conPassward = document.querySelector("#conPassward");
var fName = document.querySelector("#fName");
function sub(){
    // if(passward.length != 8) {
    //     passward.value  = "Ypour"
    // }
    console.log(fName.value, lName.value, email.value, passward.value, conPassward.value);
    fName.value = "";
    lName.value = "";
    email.value = "";
    passward.value = "";
    conPassward.value = "";
    var formHide = document.querySelector(".sign");
    formHide.style.display = "none"; 
    bg.style.backgroundColor = "#F0F0F0";
}

function signUp() {
    // console.log("a");
    var a = document.querySelector(".sign")
    a.style.display = "block";
    bg.style.backgroundColor = "darkslategray";
}

