document.addEventListener("DOMContentLoaded" ,function(){
    var nut = document.getElementById("nutnhan");
    var khoi = document.getElementsByClassName("nd");
    nut.onclick = function(){
        khoi[0].classList.toggle("dichuyen");
    }
} ,false)