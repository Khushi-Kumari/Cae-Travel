
//     var audio = document.createElement('audio');
//     audio.setAttribute('src', 'sound.mp3');
//     audio.loop = true;
//     audio.muted = true;
//     audio.play();
//     if (audio !== undefined) {
//         audio.hasAttributeNS(_ => {
//         }).catch(() => {
//         });
//     }
var audio=new Audio('sound.mp3');
function play(){  
    audio.play();
    audio.loop=true;
}

function pause(){
    audio.pause();
}