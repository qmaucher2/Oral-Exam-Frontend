document.querySelector('#start').addEventListener('click', startRecording);

function startRecording() {
    console.log("Test started");
    let userAllows = {audio: true, video: true}
    navigator.mediaDevices.getUserMedia(userAllows).then(function (stream) {


        }
    )
}