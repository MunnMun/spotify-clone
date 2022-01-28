console.log("welcome to spotify");
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('mastersongname');

let songs=[
    {songname: "chin-chin",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname: "munn-munn",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname: "wai-wai",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname: "bing-bing",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname: "pen-pen",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname: "tin-tin",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname: "kin-kin",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"}
]

songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});

// audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})


const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `C:/Users/kaush/Desktop/project/spotifyclone/songs/3.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})