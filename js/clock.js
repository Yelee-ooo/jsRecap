const clock = document.querySelector("#clock");

function addToZero(value){
    return String(value).padStart(2,"0");
}

function sayHello(){
    const date = new Date();
    const Hours = addToZero(date.getHours());
    const Minutes = addToZero(date.getMinutes());
    const Seconds = addToZero(date.getSeconds());

    clock.innerText = `${Hours}:${Minutes}:${Seconds}`;

}
sayHello();
setInterval(sayHello,1000);
// setTimeout(sayHello,1000);