function validate() {
    let peremoga = true;

    let answer1 = document.querySelector('input[name="citizen"]:checked').value;

    let answer2 = document.querySelector('input[name="deserve"]:checked').value;

    let answer3 = document.querySelector('input[name="palyanytsa"]:checked').value;

    if (answer1 !== "yes") {
        alert("Excuse me! Ця анкета тільки для громадян України")
        return;
    }

    if (answer2 !== "yes") {
        peremoga = false;
    }

    if (answer3 !== "bread") {
        peremoga = false;
    }

    if (peremoga === true) {
        location.href = '/questionnaire/welcome-to-eu.html'
    } else {
        location.href = '/questionnaire/zrada.html'
    }
}
