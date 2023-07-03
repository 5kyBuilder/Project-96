function send()
{
    user_name = document.getElementById("usernameInput").value;

    localStorage.setItem("username", user_name);

    window.location = "kwitter_room.html";
    
}