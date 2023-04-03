const topBtn = document.getElementsByClassName("topBtn");
const nav = document.getElementById("nav");

window.onscroll = function(e){scrollfunction();console.log(e)};

function scrollfunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn[0].style.display = "block";
    } else{
        topBtn[0].style.display = "none";
    }
}

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

console.log(topBtn[0]);
console.log(nav);