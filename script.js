// Get modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("popupImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];
const downloadBtn = document.getElementById("downloadBtn");

// Select all images
const galleryImages = document.querySelectorAll(".gallery-image");

// Open modal when image is clicked
galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = image.src;
        captionText.innerHTML = image.alt;
        downloadBtn.href = image.dataset.source; // Set download link
    });
});

// Close modal when clicking the close button
closeModal.onclick = () => {
    modal.style.display = "none";
};

// Close modal when clicking outside the image
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
