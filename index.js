let video = document.querySelector("video");
video.addEventListener("pause", function(){
    console.log("Video is paused");
})
video.addEventListener("ended", function(){
    console.log("Video is ended");
})
video.addEventListener("canplay", function(){
    console.log("Video can be played");
})