const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyUp",handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})
stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = " ";
    stopBtn.disabled = true;
    startBtn.disabled = false;

})
function handleDown(e){
    logDiv.textContent =  `Key ${e.key} pressed down`;
    stateDiv.textContent = "Key is down";
}
function handleUp(e){
    logDiv.textContent = `key ${e.key} pressed up`;
    stateDiv.textContent = "Key is up";
}