import nature from "./assets/nature.jpeg";

function createImage() {
  console.log("lets");
  const image = document.createElement("img");
  image.alt = "nature image";
  image.width = 400;
  image.src = nature;
  const body = document.querySelector("body");

  body.appendChild(image);
}

export { createImage };
