const form = document.querySelector(".form");
const thumbBar = document.getElementById("thumb-bar");
const gallary = [
    { name: "Pic1", src: "images/pic1.jpg", blur: "images/pic1B.jpg"},
    { name: "Pic2", src: "images/pic2.jpg", blur: "images/pic2B.jpg"},
    { name: "Pic3", src: "images/pic3.jpg", blur: "images/pic3B.jpg"},
    { name: "Pic4", src: "images/pic4.jpg", blur: "images/pic4B.jpg"},
    { name: "Pic5", src: "images/pic5.jpg", blur: "images/pic5B.jpg"},
  ];
var displayImg = document.querySelector(".displayed-img");
var input = document.getElementById("effect");


window.addEventListener('load', createImage(gallary));


function createImage(gallary) {
    for (image in gallary) {
        var img = document.createElement("img");
        img.setAttribute("src", `${gallary[image].src}`)
        img.setAttribute("alt", `${gallary[image].name}`)
        thumbBar.appendChild(img)
    }
};


thumbBar.addEventListener('mouseover', function(e) {
    var displayedSrc = e.target.getAttribute("src");
    displayImg.src = `${displayedSrc}`;
    displayImg.name = e.target.getAttribute("alt")
    form.style.display = "block";
}, capture=true);


function submit(gallary) {
    effectEntered = input.value;
    if (effectEntered == "blur") {
        effectImg = gallary.find(isImage);
        displayImg.src = effectImg.blur;
        input.value = null;
    } else {
        input.value = null;
        alert("Effect Error: wrong effect has been entered.")
    }
}


function isImage(image) {
    matchName = displayImg.name;
    return image.name == matchName;
}
