function login(){
localStorage.setItem("username", user.value);
window.location.href="dashboard.html";
}

function register(){
alert("Registered!");
window.location.href="index.html";
}

function goReg(){
window.location.href="register.html";
}
