const images = ["0.png","1.png","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`; 

document.body.appendChild(bgimg);

console.log(bgimg);
