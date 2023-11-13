const url = "https://itunes.apple.com/search?limit=10&media=music&term=";
let userInput = document.getElementById("userInput");
let save = document.getElementById("submit");
let inputField = document.getElementById("inputField");
const artistResult = document.getElementById("result");
const audioPlayers = document.getElementById("pinnedAudio")


// const audioPlayers = document.querySelector('#pinnedAudio')
// document.addEventListener("DOMContentLoaded", function () {
const audioPlay = document.createElement('audio');

audioPlay.controls = true;
audioPlayers.appendChild(audioPlay)

// })
userInput.addEventListener("click", (event) => {
    event.preventDefault();
    let term = inputField.value;

    fetch(url + term)
        .then((response) => response.json())
        .then((data) => {
            const fetchedResult = data.results;
            return fetchedResult.map((result) => {
                // console.log(result);

                artistResult.innerHTML += `
                    <div class="containter" id="content" data-id="selectedSong">
<div class="artist">${result.artistName} </div>
<div class= "track">${result.trackName}</div>
<img id="player" src= ${result.artworkUrl100.replace("100x100", "380x380")}>
</div>
`;
                //currently only plays the 1st returned result when clicked 
                const audio = document.getElementById("content");
                console.log(audio)

                audio.addEventListener("click", () => {
                    audioPlay.src = result.previewUrl;
                });
                // const playSong = document.getElementById("selectedSong");
                // function addEvent() {
                //     playSong.addEventListener("click", play)
                //     //souce placement here will play the 1st track from search 
                // }
                // function play() {
                //     audioPlay.src = result.previewUrl;
                //     play();
                // }
                // });

            });
        });



});
