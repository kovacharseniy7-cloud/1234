// Alert when clicking Order button
document.getElementById("orderBtn").addEventListener("click", () => {
    alert("Thank you for your interest! Our manager will contact you soon.");
});

// Contact form validation
document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Your message has been sent!");
});
