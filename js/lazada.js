var logo = document.querySelector(".logo");
// console.log(logo);
var menu = document.querySelector(".menu");
// console.log(menu);
window.addEventListener("scroll", function(){
    var vitri = window.pageYOffset;
    if (vitri > 180)
    {
        logo.classList.add("truotlen");
        menu.classList.add("bienhinh");
    }
    else
    {
        logo.classList.remove("truotlen");
        menu.classList.remove("bienhinh");
    }
})
