var button = document.getElementById('button');
let textToReplance = document.getElementById('status');
let status = document.querySelector("all")
var usrlang = window.navigator.userLanguage || window.navigator.language;
usrlang = usrlang.split('-')[0];


  //Apply the strings and CSS properties
  const texts = strings[usrlang];
  document.getElementById('source').innerHTML = texts.source + texts.css;
  document.getElementById('support').innerHTML = texts.support + texts.css;
  document.getElementById('prot').innerHTML = texts.prot;

    
  button.onclick = () => {
      if(button.checked){
          textToReplance.innerHTML = texts.on;
          textToReplance.style.color = 'green';
          chrome.storage.local.set({'isActive': true});
      } else {
          textToReplance.innerHTML = texts.off;
          textToReplance.style.color = 'red';
          chrome.storage.local.set({'isActive': false});
      }
    }
  
  chrome.storage.local.get(['isActive'], function(result) {
      if(result.isActive){
          button.checked = true;
          textToReplance.innerHTML = texts.on;
          textToReplance.style.color = 'green';
      } else {
          button.checked = false;
          textToReplance.innerHTML = texts.off;
          textToReplance.style.color = 'red';
      }
    });