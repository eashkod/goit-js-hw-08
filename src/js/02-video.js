    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
    const LOCALSTORAGE_KEY = "videoplayer-current-time";

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(evt) {
    // data is an object containing properties specific to that event
        localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
};

    player.on('timeupdate', throttle(onPlay,1000));

    player.setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || 0);
