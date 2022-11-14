"using strict";

(function _petModalDemo() {
    // If there are any error messages, clear them
    _clearErrorMessages();

    const createPetModalDOM = document.querySelector("#createModalP4");
    const createPetModal = new bootstrap.Modal(createPetModalDOM);
    const createPetButton = document.querySelector("#btnCreatePet");
    createPetButton.addEventListener("click", event => {
        createPetModal.show();
    })

    const createPetForm = document.querySelector("#createPetFormFinal");
    createPetForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        _clearErrorMessages();
        await _submitWithAjax(createPetForm);
    });

    async function _submitWithAjax(createPetForm) {
        const url = createPetForm.getAttribute('action');
        const method = createPetForm.getAttribute('method');
        const formData = new FormData(createPetForm);

        const response = await fetch(url, {
            method: method, body: formData
        });
        if (response.ok == false) {
            throw new Error("There was an HTTP error!");
        }
        const result = await response.json();
        if (result === "fail") {
            return;
        }
        console.log(result);
        createPetModal.hide();
    }
    

    function _clearErrorMessages() {
        let spans = document.querySelectorAll('span[data-valmsg-for]');
        spans.forEach(s => {
            s.textContent = "";
        });
    }
})()