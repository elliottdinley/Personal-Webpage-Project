function playPianoAudio(note) {
    var audio = new Audio(note);
    audio.play();
}

var letterElements = document.querySelectorAll('.letter');
letterElements.forEach(function(letter) {
    var note = letter.getAttribute('data-note');
    letter.addEventListener('mouseover', function() {
        if (note) {
            playPianoAudio("sounds/" + note);
        }
    });
});