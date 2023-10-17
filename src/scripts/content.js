let father = document.querySelector("body > ytd-app > ytd-popup-container");

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const popShowUp = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog");
            const video = document.querySelector("#movie_player > div.html5-video-container > video");

            chrome.storage.local.get(['isActive'], (result) =>{
                if(result.isActive && popShowUp){
                        popShowUp.remove();
                        video.play();
                }
            });
        }
    }
});

observer.observe(father, { childList: true });
