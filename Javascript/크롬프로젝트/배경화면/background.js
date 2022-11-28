const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
//이미지 태그를 만든것.

bgimage.src = `img/${chosenImage}`; //이미지 추가
console.log(bgimage); //확인

document.body.appendChild(bgimage); //바디안에 이미지를 추가한다.
