const login = document.getElementById("login");
login.addEventListener('click',() =>{
    chrome.runtime.sendMessage({type:"auth"}, (resp)=>{
        console.log(resp);
    })
})