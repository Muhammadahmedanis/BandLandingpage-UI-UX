function cli() {
    var a = document.querySelector(".show");
    var btn = document.querySelector(".clickbtn");
    if(btn.innerHTML === "See more"){
        a.style.display = "block";
        a.style.display  ="flex";
        btn.innerHTML = "See less"
    }else if (btn.innerHTML == "See less") {
        a.style.display = "none";
        btn.innerHTML = "See More";
    }
}


var lName = document.querySelector("#lName");
var email = document.querySelector("#email");
var passward = document.querySelector("#passward");
var conPassward = document.querySelector("#conPassward");
var fName = document.querySelector("#fName");
function sub(){
    if(passward.length != 8) {
        passward.value  = "Ypour"
    }
    console.log(fName.value, lName.value, email.value, passward.value, conPassward.value);
    fName.value = "";
    lName.value = "";
    email.value = "";
    passward.value = "";
    conPassward.value = "";
}

function signUp() {
    // console.log("a");
    var a = document.querySelector(".sign")
    a.style.display = "block";
}

