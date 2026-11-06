function compareLogin(event) {
    event.preventDefault();

    const USERNAME = "epstein";
    const PASSWORD = "diddyblud";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage").value;
    if (username === USERNAME && password === PASSWORD) {
        alert("Welcome back, Mein Fuhrer!");
        window.location.href = "message.html";
    } else {
        alert("You impostor.");
        errorMessage.textContent = "Invalid Username or Password!";
    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', compareLogin);
