function welcome() {
    var player = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "Welcome" + " " + player;
    console.log(player);
}

var firebaseConfig = {
    apiKey: "AIzaSyCBWisGNHptemuW7He_lcQjEdzCuS5PPt0",
    authDomain: "lets-chat-2f472.firebaseapp.com",
    databaseURL: "https://lets-chat-2f472-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2f472",
    storageBucket: "lets-chat-2f472.appspot.com",
    messagingSenderId: "68505970846",
    appId: "1:68505970846:web:c01e7343bda95d8250b38f"
};


firebase.initializeApp(firebaseConfig);

function addroom() {
    roomname = document.getElementById("Addroom").value;
    firebase.database().ref("/").child(roomname).update({
        roomname: "Addroom"
    });
    localStorage.setItem("Roomname", roomname);
    window.location.replace("page.html");
}