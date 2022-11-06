const loginInput = document.querySelector("#login-form > input");

const loginButton = document.querySelector("#login-form > button");

function nameValidation(){

    const loginName = loginInput.value
    if (loginName === ""){
        alert("plz write ur name")
    }else if(loginName.length > 15){
        alert("name is too long")
    }

}


loginButton.addEventListener("click",nameValidation>)
