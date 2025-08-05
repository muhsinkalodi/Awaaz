const playButton = document.getElementById('play-button');
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    playButton.addEventListener('click', () => {
        event.target.playVideo();
        playButton.style.display = 'none';
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
        playButton.style.display = 'flex';
    } else if (event.data === YT.PlayerState.PLAYING) {
        playButton.style.display = 'none';
    }
}

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);