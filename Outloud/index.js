function sayItOutLoud(id) {
    const message = document.getElementById(id).value;

    var speech = new SpeechSynthesisUtterance()

    speech.text = message
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}