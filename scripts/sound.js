function clap(n) {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();

    let i = 0;
    function playNote() {
        var oscillator = audioContext.createOscillator();
        var frequency = Math.random() * (523.25 - 261.63) + 261.63;
        oscillator.frequency.value = frequency;
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5); // Stop after 0.5 seconds

        i++;
        if (i < n) {
            setTimeout(playNote, 499); // Schedule the next note
        }
    }

    playNote(); // Start the first note
}