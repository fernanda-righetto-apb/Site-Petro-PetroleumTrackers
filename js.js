const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const button = document.querySelector('.container')

button.addEventListener('click', () => {
  sun.classList.toggle('visible')
  moon.classList.toggle('visible')
})

// sun.addEventListener('click', () => {
//   sun.classList.toggle('visible')
//   moon.classList.toggle('visible')
// })

// moon.addEventListener('click', () => {
//   sun.classList.toggle('visible')
//   moon.classList.toggle('visible')
// })

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  var dk = body.className;

  //imagens
  var fullScreen = document.getElementById("btnFullscreen");
  var menu2 = document.getElementById("menu2");
  var priInfo = document.getElementById("1-imgInfo");
  var secInfo = document.getElementById("2-imgInfo");
  var gp = document.getElementById("gp");
  var x1 = document.getElementById("x1");
  var x2 = document.getElementById("x2");
  var x3 = document.getElementById("x3");
  var logo = document.getElementById("logo");
  var i = document.getElementById("i");

  
  //imagens


  if(dk=="dark-mode"){
    x1.src = "img/xdk.png";
    x2.src = "img/xdk.png";
    x3.src = "img/xdk.png";
    fullScreen.src = "img/image-44dk.png";
    menu2.src = "img/menu2dk.png";
    gp.src = "img/Group 37dk.png";
    priInfo.src = "img/1-infodk.png";
    secInfo.src = "img/2-infodk.png";
    logo.style.filter = "grayscale(100%)";
    i.style.filter = "grayscale(100%)";
  }else{
    x1.src = "x.png";
    x2.src = "x.png";
    x3.src = "x.png";
    fullScreen.src = "img/image-44.png";
    menu2.src = "img/menu2.png";
    gp.src = "img/Group 37.jpg";
    priInfo.src = "img/1-info.png";
    secInfo.src = "img/2-info.png";
    logo.style.filter = "grayscale(0%)";
    i.style.filter = "grayscale(0%)";
  }
}

function modalFecha(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function modalAbre(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}