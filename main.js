function Login() {
    var input = document.getElementById("Username").value;
    localStorage.setItem("username", input);
    window.location.replace("Chat.html");
}