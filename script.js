const form = document.querySelector(".form");
var thumbBar = document.getElementById("thumb-bar");
const gallary = [
    { name: "Pic1", src: "images/pic1.jpg"},
    { name: "Pic2", src: "images/pic2.jpg"},
    { name: "Pic3", src: "images/pic3.jpg"},
    { name: "Pic4", src: "images/pic4.jpg"},
    { name: "Pic5", src: "images/pic5.jpg"},
  ]

function createImage(gallary) {
    for (image in gallary) {
        var img = document.createElement("img");
        img.setAttribute("src", `${gallary[image].src}`)
        img.setAttribute("alt", `${gallary[image].name}`)
        thumbBar.appendChild(img)
    }
}


