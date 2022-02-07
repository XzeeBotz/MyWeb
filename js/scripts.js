function isMobile() {
    if (screen.width <= 425) {
        return false;
    } else {
        return true;
    }
}

const AlbumImage = document.getElementById("AlbumImage");

AlbumImage.setAttribute("src", "https://wallpapercave.com/fuwp/uwp547287.jpeg")