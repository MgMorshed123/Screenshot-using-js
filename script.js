
const screenBtn = document.querySelector("#src-btn")
const captureScreen = async () => {

    try {

        // asking permission to use a media input to record current tab

        const stream = await navigator.mediaDevices.getDisplayMedia({ preferCurrentTab : true });

        console.log(stream);
        
    }  catch (error) {
        console.log(error);
    }
}
screenBtn.addEventListener("click", captureScreen);
