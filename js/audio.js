(function () {

    // Playlist array
    var files = [
        "./files/2081-Coin_Drop-Willem_Hunt-569197907/mp3/Coin_Drop-Willem_Hunt-569197907.mp3",
        "./files/2082-Hammering_Soung_6-Lisa_Redfern-411383436/mp3/Hammering_Soung_6-Lisa_Redfern-411383436.mp3",
        "./files/2083-Night_Sounds_-_Crickets-Lisa_Redfern-591005346/mp3/Night_Sounds_-_Crickets-Lisa_Redfern-591005346.mp3"
    ];

    // Current index of the files array
    var current = 0;

    // Get the audio element
    var playlistPlayer = document.querySelector(".audio-control audio");

    // function that will be call at the end of the previous
    function next() {
        // Check for last media in the playlist
        if (current === files.length - 1) {
            current = 0;
        } else {
            current++;
        }

        // Change the audio element source
        playlistPlayer.src = files[current];
    }

    // Check if the player is in the DOM
    if (playlistPlayer === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        playlistPlayer.src = files[current];

        // Listen for the playback ended event, to play the next media
        playlistPlayer.addEventListener('ended', next, false)
    }

})();