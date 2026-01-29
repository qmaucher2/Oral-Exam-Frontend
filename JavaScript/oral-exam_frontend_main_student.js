//document.querySelector('#start').addEventlistener('click', aufnahmestarten());

//function aufnahmestarten ()
//{
//navigator.mediadevices.getusermedia({
  //  video: true,
   // audio: true

//}
//)
//}

document.querySelector('#start').addEventListener('click', async (e) => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true
  })
  document.querySelector('video').srcObject = stream
})