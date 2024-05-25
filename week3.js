let button = document.getElementById("button");
let image = document.getElementById("image");

let data = [];
async function getImage() {
  const res = await fetch("https://httpcats.com/100.jpg");
//   const data = await res.json();
  console.log(res);
  const imageURL = res.url;
  const img = document.createElement("img");
  img.src = imageURL;
  image.appendChild(img);
}
button.addEventListener("click", getImage);
