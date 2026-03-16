let Recording_status = false;
let mediaRecorder;
let audioChunks = [];

async function prime_startRecording(){
    const buttonbox = document.getElementById("start_button");
    console.log("Anticheat started ;)");
    Recording_status = !Recording_status;
    if (Recording_status) {
        buttonbox.textContent= " 🛑stop-button";
        await startAnticheat();
        startRecording().then();
    }
    else {
        buttonbox.textContent = "🎤start-button"
        stopRecording()
    }
}

async function startAnticheat(){
        try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Anticheat permissions granted");
    } catch (err) {
        console.error("Please Accept the Permissions:", err);
    }
}

async function startRecording(){
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = []; // Reset chunks for new recording

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.start();
        console.log("Recording started");
    } catch (error) {
        console.error("Microphone Access failed/denied:", error);
        alert("Please Accept the Microphone permissions");
    }
}



function uploadAssignment_Supplemental(){
    alert("Add function in js");
}

/*
function stopRecording(){
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        console.log("Recording stopped");

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log("Recording available at:", audioUrl);
        };
    }
}
 */



function startScreenRecording(){
    // const stream = await navigator.mediaDevices.getUserMedia();
    const recorder = new MediaRecorder(stream);
    recorder.start();

    const [video] = stream.getVideoTracks();
    video.addEventListener("ended", ()=>{})
    recorder.start();
}



function stopRecording() {
    // Check state using the correct string value 'inactive' as per MDN docs
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        console.log('Recording stopped');

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log('Recording available at:', audioUrl);


            const downloadLink = document.createElement('a');
            document.body.appendChild(downloadLink);

            // Set link attributes
            downloadLink.style.display = 'none';
            downloadLink.href = audioUrl;
            downloadLink.download = 'audio_recording.webm';

            downloadLink.click();
            document.body.removeChild(downloadLink);

            URL.revokeObjectURL(audioUrl);

            audioChunks = [];
        };
    }
}


/*
async function startScreenRecording() {
    return await navigator.mediaDevices.getDisplayMedia({ audio: false, video: { mediaSource: "screen" } });
}
 */

/*
function stopRecording() {
    console.log("Test stopped");
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        console.log("Recording stopped");

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log("Recording available at:", audioUrl);
        };
    }
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


/*let recordingStatus = false;
let mediaRecorder;
let audioChunks = [];

async function prime_startRecording() {
    const buttonbox = document.getElementById("start_button");
    console.log("Anticheat started;");

    recordingStatus = !recordingStatus;

    if (recordingStatus) {
        buttonbox.textContent = "Stop Recording"; // Use textContent for plain text
        await startAnticheat();
        startRecording();
    } else {
        buttonbox.textContent = "Start Recording";
        stopRecording();
    }
}

async function startAnticheat() {
    // Note: 'mediaSource: screen' is non-standard; use getDisplayMedia for screens
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Anticheat permissions granted");
    } catch (err) {
        console.error("Anticheat error:", err);
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = []; // Reset chunks for new recording

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.start();
        console.log("Recording started");
    } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Could not start recording. Check microphone permissions.");
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        console.log("Recording stopped");

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log("Recording available at:", audioUrl);
        };
    }
}
async function startScreenRecording() {
    return await navigator.mediaDevices.getDisplayMedia({ audio: false, video: { mediaSource: "screen" } });
}

*/



