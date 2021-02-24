function showPasswordSignIn() {
    if (document.getElementById('sign-in').type == "password") {
        document.getElementById('sign-in').type = "text"
        document.getElementById('sign-in-icon').className = "fas fa-eye";
    }
    else {
        document.getElementById('sign-in').type = "password";
        document.getElementById('sign-in-icon').className = "fas fa-eye-slash"
    }
}

function showPasswordSignUp() {
    if (document.getElementById('sign-up').type == "password") {
        document.getElementById('sign-up').type = "text"
        document.getElementById('sign-up-icon').className = "fas fa-eye";
    }
    else {
        document.getElementById('sign-up').type = "password";
        document.getElementById('sign-up-icon').className = "fas fa-eye-slash"
    }
}

function formToggle() {
    if (document.getElementById('check').checked == true)
        document.getElementById('check').checked = false;
    else
        document.getElementById('check').checked = true;
}