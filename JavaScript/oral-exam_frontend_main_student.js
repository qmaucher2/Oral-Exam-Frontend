document.querySelector('#start').addEventlistener('click', aufnahmestarten());

function aufnahmestarten ()
{
navigator.mediadevices.getusermedia({
    video: true,
    audio: true

}
)
}