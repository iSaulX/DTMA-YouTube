var button = document.getElementById('button');
let textToReplance = document.getElementById('status');
let status = document.querySelector("all")

button.onclick = () => {
    if(button.checked){
        textToReplance.innerHTML = 'ON';
        textToReplance.style.color = 'green';
        chrome.storage.local.set({'isActive': true});
    } else {
        textToReplance.innerHTML = 'OFF';
        textToReplance.style.color = 'red';
        chrome.storage.local.set({'isActive': false});
    }
}



chrome.storage.local.get(['isActive'], function(result) {
    if(result.isActive){
        button.checked = true;
        textToReplance.innerHTML = 'ON';
        textToReplance.style.color = 'green';
    } else {
        button.checked = false;
        textToReplance.innerHTML = 'OFF';
        textToReplance.style.color = 'red';
    }
});