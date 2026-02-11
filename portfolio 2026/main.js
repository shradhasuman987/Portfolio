<script>
function openCertificate(imageSrc) {
    const modal = document.getElementById("certificate-modal");
    const modalImg = document.getElementById("certificate-full");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeCertificate() {
    document.getElementById("certificate-modal").style.display = "none";
}

document.querySelector(".contacts-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});

</script>