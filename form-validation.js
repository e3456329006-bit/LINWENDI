// =============== Booking Form Validation Script ===============

// Checks: Required fields, email format, phone format, date must be future date.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        let isValid = true;

        // Reset messages
        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        // ================= REQUIRED FIELD VALIDATION =================

        const requiredFields = ["fullname", "email", "phone", "date", "time", "service"];
        requiredFields.forEach(function (id) {
            const field = document.getElementById(id);
            if (!field.value.trim()) {
                field.classList.add("error");
                isValid = false;
            } else {
                field.classList.remove("error");
            }
        });

        // ================= EMAIL FORMAT =================

        const email = document.getElementById("email");
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

        if (!emailPattern.test(email.value)) {
            email.classList.add("error");
            isValid = false;
        }

        // ================= PHONE FORMAT =================
        // Australian mobile phone example: 04XX XXX XXX
        const phone = document.getElementById("phone");
        const phonePattern = /^0[0-9]{1,2}\s?[0-9]{3}\s?[0-9]{3}$/;

        if (!phonePattern.test(phone.value)) {
            phone.classList.add("error");
            isValid = false;
        }

        // ================= DATE VALIDATION =================

        const dateField = document.getElementById("date");
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time for accurate comparison
        const selectedDate = new Date(dateField.value);

        if (selectedDate < today) {
            dateField.classList.add("error");
            isValid = false;
        }

        // ================= AGREEMENT CHECKBOX =================

        const agree = document.getElementById("agree");
        if (!agree.checked) {
            agree.classList.add("error");
            isValid = false;
        }

        // ================= FINAL RESULT =================

        if (isValid) {
            successMessage.style.display = "block";
            form.reset();
        } else {
            errorMessage.style.display = "block";
        }
    });
});
