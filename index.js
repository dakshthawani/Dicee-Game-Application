var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imageNumber = "dice" + randomNumber1 + ".png";
var loc = "images/" + imageNumber;
document.querySelector(".img1").setAttribute("src", loc);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageNumber = "dice" + randomNumber2 + ".png";
var loc = "images/" + imageNumber;
document.querySelector(".img2").setAttribute("src", loc);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw!!"
}
