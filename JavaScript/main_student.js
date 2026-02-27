let Recording_status = false;

function prime_startRecording(){
    console.log("Anticheat started ;)");
    Recording_status = !Recording_status;
    if (Recording_status) {
        start_button.innerHTML= `
        stop-button
        `
        startAnticheat();
        startRecording()
    }
    else{
        start_button.innerHTML = `
        start-button
        `
        stopRecording()
    }
}

async function startAnticheat(){
    let stream = await navigator.mediaDevices.getUserMedia({video: {mediaSource: "screen"}, audio: true})

}


async function startRecording(){

}


function stopRecording(){

}

/*
function stopRecording() {
    console.log("Test stopped");
}
 */
/*
function startRecording() {
    console.log("Test started");
    let userAllows = {audio: true, video: true}
    navigator.mediaDevices.getUserMedia(userAllows).then(function (stream) {


        }
    )
}
 */