//define dom
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form > input");
const loginButton = document.querySelector("#login-form > button");
const greeting = document.querySelector("#greeting");

//define key
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//local storage
const savedUserName = localStorage.getItem(USERNAME_KEY);
 
if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",formSubmit);
}else{
    paintGreetings(savedUserName)
}

function paintGreetings(username_){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username_}`
}

function formSubmit(e){
    e.preventDefault();
    const username_input = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username_input);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username_input);
}   


