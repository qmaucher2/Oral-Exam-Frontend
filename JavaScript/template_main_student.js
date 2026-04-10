let Recording_status = false;
let mediaRecorder;
let audioChunks = [];

async function prime_startRecording() {
    const buttonbox = document.getElementById("start_button");
    console.log("Anticheat started ;)");
    Recording_status = !Recording_status;
    if (Recording_status) {
        buttonbox.textContent = " 🛑stop-button";
        await startAnticheat();
        startRecording().then();
        await startScreenRecording();
    } else {
        buttonbox.textContent = "🎤start-button"
        stopRecording()
    }
}

async function startAnticheat() {
    try {
        await navigator.mediaDevices.getUserMedia({audio: true});
        console.log("Anticheat permissions granted");
    } catch (err) {
        console.error("Please Accept the Permissions:", err);
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
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


let screencount = 0;

async function startScreenRecording() {
    const stream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true});
    const recorder = new MediaRecorder(stream, {mimeType: 'video/webm'});
    const chunks = [];
    if (screencount === 0) {
        mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'screen-recording.webm';
            a.click();
            URL.revokeObjectURL(url);
        };
        recorder.start();
    } else {
        screencount = 0;
        recorder.stop()
    }
}


function stopRecording() {
    // Check state using the correct string value 'inactive' as per MDN docs
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        console.log('Recording stopped');

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, {type: 'audio/webm'});
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