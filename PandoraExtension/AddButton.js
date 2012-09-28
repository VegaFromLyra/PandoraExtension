// JScript source code

// TODO - Make script run when page is done loading
// Add a spotify icon to the div
// Update style of newly added to match 'buy' and 'share'

document.body.onload = OnLoad;

function OnLoad() {
    var spotifyDiv = document.getElementById('Spotify');
    if (spotifyDiv == null) {
        AddSpotifyDiv();
    }
}

function AddStylesToDiv(divElement) {
    divElement.style.marginTop = "5px";
}

function AddSpotifyDiv() {
    var Elements = document.getElementsByClassName("buyButton");

    // There ought to be only 1
    var buyButtonElement = Elements[0];

    // Get parent element of buyButton
    var ContainerElement = buyButtonElement.parentNode;

    // Create new div
    var newdiv = document.createElement('div');

    var divIdName = 'Spotify';

    newdiv.setAttribute('id', divIdName);

    var anchorElement = document.createElement('a');
    anchorElement.setAttribute('id', 'SpotifyAnchor');

    anchorElement.innerHTML = 'Spotify';
    anchorElement.addEventListener("click", UpdateHrefForSpotifyAnchorElement, false);

    newdiv.appendChild(anchorElement);

    AddStylesToDiv(newdiv);

    // Append a child div to the parent element
    ContainerElement.appendChild(newdiv);    
}

function UpdateHrefForSpotifyAnchorElement() {

    var songNameElements = document.getElementsByClassName("songTitle");
    var artistNameElements = document.getElementsByClassName("artistSummary");
    var albumNameElements = document.getElementsByClassName("albumTitle");

    var songName = songNameElements[0].innerText;
    var artistName = artistNameElements[0].innerText;
    var albumName = albumNameElements[0].innerText;

    // Replace spaces in the strings above with + sign
    songName = songName.replace(/\s/g, "+");
    artistName = artistName.replace(/\s/g, "+");
    albumName = albumName.replace(/\s/g, "+");

    // Construct the uri to launch spotify in search mode
    var spotifyUri = 'spotify:search:' + songName + '+artist:' + artistName + '+album:' + albumName;

    // Get the anchor element and update href
    var anchorElementToModify = document.getElementById('SpotifyAnchor');
    anchorElementToModify.href = spotifyUri;
}


