document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".zoomable");
    const zoomContainer = document.getElementById("zoomContainer");
    const zoomedImage = document.getElementById("zoomedImage");
    const closeZoom = document.getElementById("closeZoom");

    // Quand on clique sur une image
    images.forEach(image => {
        image.addEventListener("click", function () {
            zoomedImage.src = this.src; // Met à jour l'image zoomée
            zoomContainer.style.display = "flex";
        });
    });

    // Fermer le zoom
    closeZoom.addEventListener("click", function () {
        zoomContainer.style.display = "none";
    });

    // Fermer si on clique en dehors de l'image
    zoomContainer.addEventListener("click", function (e) {
        if (e.target === zoomContainer) {
            zoomContainer.style.display = "none";
        }
    });
});
