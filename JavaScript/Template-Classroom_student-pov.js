document.addEventListener("DOMContentLoaded" ,() => { //waits until

document.querySelector('#start-button').addEventlistener('click', aufnahmestarten());
document.querySelector('#stop-button').addEventlistener('click', aufnahmestoppen());

async function aufnahmestarten () {
        const stream = await navigator.mediaDevices.getUserMedia(
                audio = true,
                video = true
        )};
        
        preview.srcObject = stream;
        mediaRecorder = new MediaRecorder(stream);
        chunks = [];

        mediaRecorder.onstop = () => {
                const videoBlob = new Blob(chunks, { type: "video/webm"});
                const videoUrl = URL.createObjectURL(videoBlob);

                const a = document.createElement("a");
                a.href = videoUrl;
                document.body.appendChild(a);
                a.click();
                
                mediaRecorder.start()
        }

async function aufnahmestoppen() {
        mediarecorder.stop()
        
}
}
)