document.addEventListener("DOMContentLoaded", () => {

        document.querySelector('#start-button').addEventListener('click', startRecording);
        document.querySelector('#stop-button').addEventListener('click', stopRecording);

        async function startRecording() {
            const stream = await navigator.mediaDevices.getUserMedia(
                audio,
                video
            )
        };

        preview.srcObject = stream;
        let mediaRecorder = new MediaRecorder(stream);
        let chunks = [];

        mediaRecorder.onstop = () => {
            const videoBlob = new Blob(chunks, {type: "video/webm"});
            const videoUrl = URL.createObjectURL(videoBlob);

            const a = document.createElement("a");
            a.href = videoUrl;
            document.body.appendChild(a);
            a.click();

            mediaRecorder.start()
        }

        async function stopRecording() {
            mediarecorder.stop()
        };

        async function startScreenRecording() {
            return await navigator.mediaDevices.getDisplayMedia({
                audio: false,
                video: {mediaSource: "screen"}
            });

        }
    }
)