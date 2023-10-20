function openPopup(x) {
    let modal = document.querySelector("#popup-container");
    let modal_content = document.querySelector("#popup-content");

    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 300);

    modal_content.style.opacity = 1;
}

function closePopup() {
    let modal = document.getElementById("popup-container");
    let modalContent = document.getElementById("popup-content");

    modal.style.opacity = 0;
    modalContent.style.opacity = 0;

    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
}

function contactSend() {
    let contact_form = document.querySelector("#contact-form")
    if (contact_form.checkValidity()) {
        alert("This doesn't actually work...")
    }
}