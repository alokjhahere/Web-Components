const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    loginBtn.value = "Sign Up"
    signupBtn.innerHTML = "Login";
    
}

loginBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
    loginBtn.value = "Login";
    signupBtn.innerHTML = "signUp";

}