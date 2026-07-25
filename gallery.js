console.log("gallery.js loaded");
const photos = [];

for (let i = 1; i <= 41; i++) {
    photos.push(`images/photo${i}.png`);
}

let current = 0;

function showPhotos(){

    document.getElementById("leftPhoto").src =
        photos[current];

    document.getElementById("rightPhoto").src =
        photos[(current+1)%photos.length];

}

function nextPage(){

    current += 2;

    if(current >= photos.length){
        current = 0;
    }

    showPhotos();
}

function previousPage(){

    current -= 2;

    if(current < 0){
        current = photos.length-2;
    }

    showPhotos();
}

showPhotos();