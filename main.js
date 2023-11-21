const url = "https://itunes.apple.com/search?limit=15&media=music&term=";
let userInput = document.getElementById("userInput");
let save = document.getElementById("submit");
let inputField = document.getElementById("inputField");
const artistResult = document.getElementById("result");
const pinnedAudioPlayer = document.getElementById("pinnedAudio");
const nowPlaying = document.getElementById("displayTrack");

const audioPlayer = document.createElement("audio");
audioPlayer.controls = true;
audioPlayer.setAttribute("autoplay", "");
pinnedAudioPlayer.appendChild(audioPlayer);

userInput.addEventListener("click", (event) => {
  event.preventDefault();
  let term = inputField.value;

  fetch(url + term)
    .then((response) => response.json())
    .then((data) => {
      const fetchedResult = data.results;
      return fetchedResult.map((result) => {
        artistResult.innerHTML += `
               
                    <div class="audioContainter" id="content" data-id="song">
<img id="player" src= ${result.artworkUrl100.replace("100x100", "280x280")}>
<div class="artist">${result.artistName} </div>
<div class= "track">${result.trackName}</div>
<button class="playBack" data-id =${result.previewUrl}>PLAY</button> 
</div>
`;

        const audio = document.querySelectorAll(".playBack");
        for (let a of audio) {
          a.addEventListener("click", function (event) {
            event.preventDefault();

            audioPlayer.src = event.target.dataset.id;
            nowPlaying.innerText += `Now Playing: ${result.trackName}`;
          });
        }
      });
    });
});
