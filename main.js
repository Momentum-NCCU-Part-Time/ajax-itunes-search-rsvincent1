const url = "https://itunes.apple.com/search?limit=10&media=music&term=";
let userInput = document.getElementById("userInput");
let save = document.getElementById("submit");
let inputField = document.getElementById("inputField");
const artistResult = document.getElementById("result");

userInput
    .addEventListener("click", (event) => {
        event.preventDefault();
        let term = inputField.value;

        fetch(url + term)
            .then((response) => response.json())
            .then((data) => {
                const fetchedResult = data.results;
                return fetchedResult.map((result) => {
                    // console.log(result);

                    artistResult.innerHTML += `
<div class="artist">${result.artistName} </div>
<div class= "track">${result.trackName}</div>
<img src= ${result.artworkUrl100}>
`

                });
            });
    })
    .catch((error) => {
        console.error("Error:", error);
    });


