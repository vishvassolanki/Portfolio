const play = document.getElementById('play');
const music = document.querySelector('audio');
const image = document.querySelector('img')
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const songs = [
    {
        name: "v1",
        title: "Gulabi Sadi",
        artist: "Sanju Rathod"
    },
    {
        name: "v2",
        title: "O mahi O Mahi",
        artist: "Arijit Singh"
    },
    {
        name: "v3",
        title: "meri jaan",
        artist: "King"
    },

]

let isPlaying = false;


// for Play
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause')
    image.classList.add('anime')
}


// for Pause 
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play')
    image.classList.remove('anime')
}


play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
})

const loadSongs = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `images/${song.name}.jpeg`;
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}


next.addEventListener('click', nextSong)
previous.addEventListener('click', prevSong)