let score=0

let scoreHtml= document.getElementById("score")

function increase(){
score=score+1
scoreHtml.innerHTML = score
}


function welcome(username) {
    
    var welcomeMessageElement = document.getElementById("welcome-message");

    
    var message = "Welcome, " + username + "!";

    
    welcomeMessageElement.innerHTML = message;
}


var username = "shaimaa";
welcome(username);
