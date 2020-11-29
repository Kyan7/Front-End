document.forms[0].addEventListener("submit", function(event) {
    var id = document.forms[0].id;
    if (id == "register-form") {
        event.preventDefault();
        if (validateRegister()) {
            window.location.replace("posts.html");
        }
    } else if (id == "login-form" && !validateLogin()) {
        event.preventDefault();
    }
}, false);


function validateRegister() {
    var e = document.getElementById("errors");
    e.innerHTML = "";
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    if (emailValid && passwordValid) {
        alert("Success");
        username = document.forms[0]["username"].value;
        email = document.forms[0]["email"].value;
        password = document.forms[0]["password"].value;
        window.auth.register(username, email, password, undefined);
        return true;
    } else {
        return false;
    }
}

function validateLogin() {
    var e = document.getElementById("errors");
    e.innerHTML = "";
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    if (emailValid && passwordValid) {
        alert("Success!");
        return true;
    } else {
        return false;
    }
}

function validateEmail() {
    var x = document.forms[0]["email"].value;
    var e = document.getElementById("errors");
    var errors = [];
    if (x == "") {
        errors.push("Email can't be empty");
    }
    if (!x.includes("@")) {
        errors.push("Email must contain '@'")
    } else {
        var domain = x.split("@")[1];
        if (!domain.includes(".")) {
            errors.push("Email must contain '.'")
        }
    }
    if (x.length < 5) {
        errors.push("Email must be at least 5 characters")
    }
    if (errors.length != 0) {
        errors.forEach(error => {
            var el = document.createElement("li");
            el.innerHTML = error;
            e.appendChild(el);
        });
        return false;
    } else {
        return true;
    }
}

function validatePassword() {
    var x = document.forms[0]["password"].value;
    var e = document.getElementById("errors");
    var errors = [];
    if (x.toLowerCase() == x) {
        errors.push("Password must contain an uppercase letter");
    }
    var containsNumber = false;
    for (var i = 0; i < 10; i++) {
        if (x.includes(i)) {
            containsNumber = true;
        }
    }
    if (!containsNumber) {
        errors.push("Password must contain a number")
    }
    if (!x.includes("!") && !x.includes("@") && !x.includes("#") && !x.includes("$") && !x.includes("%") && !x.includes("^") && !x.includes("&")) {
        errors.push("Password must contain a special character")
    }
    if (x.length < 6) {
        errors.push("Password must be at least 6 characters")
    }
    if (errors.length != 0) {
        errors.forEach(error => {
            var el = document.createElement("li");
            el.innerHTML = error;
            e.appendChild(el);
        });
        return false;
    } else {
        return true;
    }
}