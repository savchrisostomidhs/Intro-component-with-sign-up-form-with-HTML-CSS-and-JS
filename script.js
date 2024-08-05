const button = document.querySelector(".js-button");

button.addEventListener("click", check);

function check() {
    let fname = document.querySelector(".js-fname").value;
    let lname = document.querySelector(".js-lname").value;
    let email = document.querySelector(".js-email").value;
    let password = document.querySelector(".js-password").value;

    const form = document.querySelector(".form .info");

    const error = document.querySelectorAll(".form .info img");

    const input = document.querySelectorAll(".form .info input");

    const paragraph = document.querySelectorAll(".form .info .par");

    if (!fname) {
        form.style.height = error[0].style.display === "block" ? form.offsetHeight + "px" : form.offsetHeight + 21 + "px";
        error[0].style.display = "block";
        input[0].style.borderColor = "hsl(0, 100%, 74%)";
        paragraph[0].style.display = "flex";
        input[0].placeholder = ""
    } else {
        document.querySelector(".js-fname").value = "";
        form.style.height = error[0].style.display === "none" ? form.offsetHeight + "px" : form.offsetHeight - 21 + "px";
        error[0].style.display = "none";
        input[0].style.borderColor = "hsla(246, 25%, 77%, 0.6)";
        paragraph[0].style.display = "none";
        input[0].placeholder = "First Name";
    }

    if (!lname) {
        form.style.height = error[1].style.display === "block" ? form.offsetHeight + "px" : form.offsetHeight + 21 + "px";
        error[1].style.display = "block";
        input[1].style.borderColor = "hsl(0, 100%, 74%)";
        paragraph[1].style.display = "flex";
        input[1].placeholder = "";
    } else {
        document.querySelector(".js-lname").value = "";
        form.style.height = error[1].style.display === "none" ? form.offsetHeight + "px" : form.offsetHeight - 21 + "px";
        error[1].style.display = "none";
        input[1].style.borderColor = "hsla(246, 25%, 77%, 0.6)";
        paragraph[1].style.display = "none";
        input[1].placeholder = "Last Name";
    }

    if (!(/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email))) {
        form.style.height = error[2].style.display === "block" ? form.offsetHeight + "px" : form.offsetHeight + 21 + "px";
        error[2].style.display = "block";
        input[2].style.borderColor = "hsl(0, 100%, 74%)";
        paragraph[2].style.display = "flex";
        input[2].placeholder = email ? email : "";
        document.querySelector(".js-email").style.color = "hsl(0, 100%, 74%)";
    } else {
        document.querySelector(".js-email").value = "";
        form.style.height = error[2].style.display === "none" ? form.offsetHeight + "px" : form.offsetHeight - 21 + "px";
        error[2].style.display = "none";
        input[2].style.borderColor = "hsla(246, 25%, 77%, 0.6)";
        paragraph[2].style.display = "none";
        input[2].placeholder = "Email";
        document.querySelector(".js-email").style.color = "black";
    }

    if (!password) {
        form.style.height = error[3].style.display === "block" ? form.offsetHeight + "px" : form.offsetHeight + 21 + "px";
        error[3].style.display = "block";
        input[3].style.borderColor = "hsl(0, 100%, 74%)";
        paragraph[3].style.display = "flex";
        input[3].placeholder = ""
    } else {
        document.querySelector(".js-password").value = "";
        form.style.height = error[3].style.display === "none" ? form.offsetHeight + "px" : form.offsetHeight - 21 + "px";
        error[3].style.display = "none";
        input[3].style.borderColor = "hsla(246, 25%, 77%, 0.6)";
        paragraph[3].style.display = "none";
        input[3].placeholder = "Password";
    }
}