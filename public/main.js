var socket = io();
var tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'ChOhcHD8fBA',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.PLAYING)
    {
        socket.emit('play');
    }
    if(event.data == YT.PlayerState.PAUSED)
    {
        socket.emit('pause');
    }
    if(event.data == YT.PlayerState.BUFFERING)
    {
        socket.emit('current time',player.getCurrentTime())
    }
    if(event.data == YT.PlayerState.ENDED)
    {
        player.playVideo();
    }
}

socket.on('play', function(){
    player.playVideo();
});
socket.on('pause', function(){
    player.pauseVideo();
});
socket.on('set current time', function(time){
    player.seekTo(time);
});