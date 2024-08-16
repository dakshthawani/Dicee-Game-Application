var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imageNumber = "dice" + randomNumber1 + ".png";
var loc = "images/" + imageNumber;
$(".img1").attr("src", loc);
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageNumber = "dice" + randomNumber2 + ".png";
var loc = "images/" + imageNumber;
$(".img2").attr("src", loc);
if(randomNumber1 > randomNumber2) {
    $("h1").html("Player 1 wins")
}
else if(randomNumber1 < randomNumber2) {
    $("h1").html("Player 2 wins")
}
else{
    $("h1").html("Draw!!")
}
