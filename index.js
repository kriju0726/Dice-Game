var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images-1/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images-1/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


/*var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[1].setAttribute("src", "images-1/dice" + randomNumber2 + ".png");*/ 


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩🚩🚩Play 1 wins!!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 wins!!! 🚩🚩🚩";
}
else{
    document.querySelector("h1").innerHTML = "D R A W !!!";
}