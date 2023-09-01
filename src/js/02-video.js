import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(TIME_KEY, seconds);
    });
    
}
// console.log(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(localStorage.getItem(TIME_KEY) || 0);

