let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let slideElements = document.querySelectorAll(".slide");
let allImages = document.getElementById("all-images");

rightBtn.addEventListener("click", () => {
    for (let i = 0; i < slideElements.length; i++) {
        const a = slideElements;
        if(i < a.length - 1 && !(a[i].classList.contains("w-0"))) {
            a[i].classList.add("w-0");
            a[i+1].classList.remove("w-0");
            let clickableImg = document.querySelectorAll(".clickable-img");
            changeBorder(clickableImg, i+1);
            break;
        }
    }
});

leftBtn.addEventListener("click", () => {
    Array.from(slideElements).forEach((e, i, a) => {
        if(i > 0 && !(a[i].classList.contains("w-0"))) {
            a[i].classList.add("w-0");
            a[i-1].classList.remove("w-0");
            let clickableImg = document.querySelectorAll(".clickable-img");
            changeBorder(clickableImg, i-1);
        }
    });
});

Array.from(slideElements).forEach((e, i) => {
    let imgBoxes = document.createElement("div");
    imgBoxes.classList.add("img-boxes");
    allImages.appendChild(imgBoxes);
    if(i == 0) {
        imgBoxes.innerHTML = `<img src="${e.firstElementChild.src}" class="clickable-img active" alt=""/>`;
    } else {
        imgBoxes.innerHTML = `<img src="${e.firstElementChild.src}" class="clickable-img" alt=""/>`;
    }
    imgBoxes.innerHTML += `<div class="img-count">${i + 1}</div>`;
});

let clickableImg = document.querySelectorAll(".clickable-img");
Array.from(clickableImg).forEach((e, i) => {
    e.addEventListener("click", function () {
        changeBorder(clickableImg, i);
        for (let j = 0; j < slideElements.length; j++) {
            if(i == j) {
                slideElements[j].classList.remove("w-0");
            } else {
                slideElements[j].classList.add("w-0");
            }
        }
    });
})

function changeBorder(clickableImg, index) {
    Array.from(clickableImg).forEach((image, j) => {
        if(j == index) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
}

let imgCount = document.querySelectorAll(".img-count");
Array.from(imgCount).forEach(e => {
    e.addEventListener("click", function() {
        this.previousElementSibling.click();
    });
});