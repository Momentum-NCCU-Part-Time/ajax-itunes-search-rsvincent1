const url = "https://itunes.apple.com/search?limit=15&media=music&term=";
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
               
                    <div class="audioContainter" id="content" data-id="song">
<div class="artist">${result.artistName} </div>
<div class= "track">${result.trackName}</div>
<img id="player" src= ${result.artworkUrl100.replace("100x100", "280x280")}></div>
<button class="playBack" id="playSong">PLAY</button> 
</div>
`;
                const audio = document.getElementById("playSong");
                audio.addEventListener('click', function (event) {

                    let target = event.target;

                    songSelected(target)

                    function songSelected() {
                        audioPlay.src = result.previewUrl;
                    }

                })
            });



        });



});
