function showPassword() {
    if (document.getElementById('pass').type == "password") {
        document.getElementById('pass').type = "text"
        document.getElementById('pass-icon').className = "fas fa-eye";
    }
    else {
        document.getElementById('pass').type = "password";
        document.getElementById('pass-icon').className = "fas fa-eye-slash"
    }
}