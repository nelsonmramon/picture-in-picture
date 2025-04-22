const videoElement = document.getElementById('video');
const button = document.getElementById('button');

const buttonEventListner = async ()=>{
    //Disabled button
    button.disabled = true;

    //Start picture in picture
    await videoElement .requestPictureInPicture();

    //Reset button
    button.disabled = false;
}

//Prompt to select media stream, pass to a video element, then play
const selectMediaStream = async ()=>{
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(error){
        console.log('Wrong Input',error);
    }
}

//Button event listener
button.addEventListener('click', buttonEventListner)


//onLoad
selectMediaStream();
