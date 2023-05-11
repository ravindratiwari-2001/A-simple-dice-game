var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";

var image1 = document.querySelector(".img1")
image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";

var image2 =document.querySelector(".img2")
image2.setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2)
{
      document.querySelector("h1").innerHTML = "🚩Player1 wins!"
}
else if(randomNumber1 < randomNumber2)
{
      document.querySelector("h1").innerHTML = "Player2 wins!🚩"
}
else
{
      document.querySelector("h1").innerHTML = "Draw!"
}