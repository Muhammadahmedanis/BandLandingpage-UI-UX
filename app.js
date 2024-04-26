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