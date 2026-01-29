document.querySelector('#start').addEventlistener('click', aufnahmestarten());

function aufnahmestarten () {
        console.log("Test started");
        let userallows = { audio: true, video:true}
navigator.mediadevices.getusermedia(userallows).then(function(stream){
    




}
)
}