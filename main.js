const url = "https://itunes.apple.com/search?limit=15&media=music&term=";
let userInput = document.getElementById("userInput");
let save = document.getElementById("submit");
let inputField = document.getElementById("inputField");
const artistResult = document.getElementById("result");
const audioPlayers = document.getElementById("pinnedAudio");

// const audioPlayers = document.querySelector('#pinnedAudio')
// document.addEventListener("DOMContentLoaded", function () {
const audioPlay = document.createElement("audio");
// audioPlay.innerText += `<div class="trackInfo">${result.previewUrl}</div>`;
audioPlay.controls = true;
audioPlay.setAttribute("autoplay", "");
audioPlayers.appendChild(audioPlay);

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
<img id="player" src= ${result.artworkUrl100.replace("100x100", "280x280")}>
<button class="playBack" data-id =${result.previewUrl}>PLAY</button> 
</div>
`;

        const audio = document.querySelectorAll(".playBack");
        console.log(audio);
        for (let a of audio) {
          a.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event.target);
            audioPlay.src = event.target.dataset.id;
          });
        }
      });
    });
});

// const audio = document.getElementById("playback");
// audio.addEventListener('click', function (event) {

//     let target = event.target;

//     songSelected(target)
//     // for (let i = 0; i < audio.length; i++) {

//     // }
//     console.log('audio')
//     console.log('target')
//     function songSelected() {
//         audioPlay.src = result.previewUrl;
//     }

// })

// artistResult.appendChild(playButton);
// const audio = document.getElementById("playSong");
// audio.addEventListener('click', () => {
//     console.log(audio)
//
//      ${result.trackId}`);
// });
//  const playButtons = document.querySelectorAll('.playBack');
//  playButtons.forEach(button) =>{
//     button.addEventListener()
//  }
// });
// const audio = document.getElementById("playback");
// console.log(audio)
// audio.addEventListener('click', function (event) {
//     event.preventDefault();
//     audioPlay.src = result.previewUrl;
// })

// const audio = document.getElementById("playSong");
// audio.addEventListener('click', function (event) {

//     let target = event.target;

//     songSelected(target)
//     for (let i = 0; i < audio.length; i++) {

//     }
//     function songSelected() {
//         audioPlay.src = result.previewUrl;
//     }
//     // audioPlay.src = result.previewUrl;
//     // audioPlay.src = result.previewUrl;
// })
// {/*  */}

// const audio = document.getElementById("playSong");
// audio.addEventListener('click', function (event) {

//     let target = event.target;

//     songSelected(target)
//     for (let i = 0; i < audio.length; i++) {

//     }
//     function songSelected() {
//         audioPlay.src = result.previewUrl;
//     }
//     // audioPlay.src = result.previewUrl;
//     // audioPlay.src = result.previewUrl;
// })
// for (let i = 0; i < audio.length; i++) {
// audio.addEventListener("click", () => {
// audioPlay.src = result.previewUrl;

//
// document.addEventListener("DOMContentLoaded", (event) => {
// const audio = document.getElementById("playback");
// for (let i = 0; i < audio.length; i++) {
//     audio.addEventListener('click', function (event) {
//         event.preventDefault();

//         // audioPlay.src = result.previewUrl;
//         // })
//         let target = event.target;

//         songSelected(target)

//         console.log(audio)
//         function songSelected() {
//             audioPlay.src = result.previewUrl;
//         }

//     });
// }
