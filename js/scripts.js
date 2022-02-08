function isMobile() {
    if (screen.width <= 425) {
        return true;
    } else {
        return false;
    }
}

function isTablet() {
    if (screen.width >= 768 && screen.width <= 1000) {
        return true;
    } else {
        return false;
    }
}

function isDesktop() {
    if (screen.width >= 1000) {
        return true;
    } else {
        return false;
    }
}

const imagelist = [
    "https://wallpapercave.com/fuwp/uwp542608.jpeg",
    "https://wallpapercave.com/fuwp/uwp1872345.jpeg",
    "https://wallpapercave.com/fuwp/uwp1836344.jpeg",
    "https://wallpapercave.com/fuwp/uwp460511.jpeg",
    "https://wallpapercave.com/fuwp/uwp408536.jpeg",
    "https://wallpapercave.com/fuwp/uwp1987569.jpeg",
    "https://wallpapercave.com/fuwp/uwp1472341.jpeg",
    "https://wallpapercave.com/fuwp/uwp583306.png",
    "https://wallpapercave.com/fuwp/uwp1479064.png",
    "https://wallpapercave.com/fwp/wp9783359.jpg",
    "https://wallpapercave.com/dwp1x/wp1937309.jpg",
    "https://wallpapercave.com/fwp/wp10623656.jpg",
    "https://wallpapercave.com/dwp1x/wp10348230.jpg",
    "https://wallpapercave.com/dwp1x/wp5475498.jpg",
    "https://wallpapercave.com/dwp1x/wp6749081.jpg",
    "https://wallpapercave.com/dwp1x/wp9314851.jpg",
    "https://wallpapercave.com/dwp1x/wp7049862.jpg",
    "https://wallpapercave.com/dwp1x/wp6545650.jpg",
    "https://wallpapercave.com/dwp1x/wp10348248.jpg",
    "https://wallpapercave.com/dwp1x/wp9314724.jpg"
]

function formatImages(src) {
    return `<div class="col"><img src="${src}" class="img-fluid img-album" /></div>`
}

if (isDesktop()) {
    const imagesArea = document.getElementById("images-area-desktop");
    for (let i = 0; i < imagelist.length; i++) {
        imagesArea.innerHTML += formatImages(imagelist[i]);
    }
} else if (isTablet()) {
    const imagesArea = document.getElementById("images-area-tablet");
    for (let i = 0; i < imagelist.length; i++) {
        imagesArea.innerHTML += formatImages(imagelist[i]);
    }
} else if (isMobile()) {
    const imagesArea = document.getElementById("images-area-mobile");
    for (let i = 0; i < imagelist.length; i++) {
        imagesArea.innerHTML += formatImages(imagelist[i]);
    }
}