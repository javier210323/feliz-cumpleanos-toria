document.getElementById('addImage').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageURL').value;
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Imagen añadida";
        document.getElementById('imageGallery').appendChild(img);
        document.getElementById('imageURL').value = ''; // Limpiar el campo de texto
    }
});

document.getElementById('playMusic').addEventListener('click', function() {
    const musicUrl = document.getElementById('musicURL').value;
    if (musicUrl) {
        const youtubeLink = musicUrl.replace("watch?v=", "embed/");
        document.getElementById('youtubePlayer').src = youtubeLink;
        document.getElementById('musicURL').value = ''; // Limpiar el campo de texto
    }
});
