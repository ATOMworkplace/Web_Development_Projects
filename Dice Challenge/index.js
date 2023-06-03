var random=Math.floor(Math.random()*6)+1;
var random_dice_img = "dice"+random+".png";
var random_dice_img_source ="images/"+random_dice_img;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_dice_img_source);

var random2=Math.floor(Math.random()*6)+1;
var random2_img_source="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random2_img_source);

if(random>random2){
    var btn = '<img class="btn-img-1" src="images/partying-face_1f973.png"></img> '+"Player 1 wins!";
}else if(random===random2){
    var btn='<img class="btn-img-1" src="images/confused-face_1f615.png"></img> '+"Draw, Roll Again !"+'  <img class="btn-img" src="images/confused-face_1f615.png"></img>';
}else{
    var btn ="Player 2 wins!"+' <img class="btn-img" src="images/partying-face_1f973.png"></img>';
}
document.querySelector("span").innerHTML=btn;

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });