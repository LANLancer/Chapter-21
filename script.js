//COUNTDOWN
const birthday = "January 11,2026 00:00:00";
const timer = document.getElementById("timer");
setInterval(() => {
    const now = new Date().getTime;
    const diff= new Date(birthday).getTime() - now;
    if(diff<=0){
        timer.innerHTML = "Happy Birthday Sheila!";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff/(1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff/(1000 * 60)) % 60);
    const seconds = Math.floor((diff/1000) % 60);
    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;},1000);
    //SAVE MESSAGES(LOCAL STORAGE)
    function saveMessage(){
        const name=document.getElementById("name").value||"Someone";
        const message=document.getElementById("message").value;
        if(!message)return;
        localStorage.setItem("birthday message",`From: ${name}\nMessage: ${message}`);
        document.getElementById("saved").innerText="Message Saved";
    }