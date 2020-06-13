const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

btn.addEventListener("click", function(){
    var rand = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(rand);
    document.body.style.backgroundColor = rand;
    colour.textContent = rand;
})