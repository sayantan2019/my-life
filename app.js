function login() {
    let selectedDate = document.getElementById("Dateaniversary").value;

    if (selectedDate === "2021-08-10") { // Replace with your actual date format if needed
        window.location.href = "home.html";

    } else {
        alert("Please enter the correct anniversary date.");
    }
}

document.getElementById("Dateaniversary").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});