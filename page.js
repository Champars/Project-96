var firebaseConfig = {
    apiKey: "AIzaSyCBWisGNHptemuW7He_lcQjEdzCuS5PPt0",
    authDomain: "lets-chat-2f472.firebaseapp.com",
    databaseURL: "https://lets-chat-2f472-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2f472",
    storageBucket: "lets-chat-2f472.appspot.com",
    messagingSenderId: "68505970846",
    appId: "1:68505970846:web:c01e7343bda95d8250b38f"
};

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("Roomname");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}