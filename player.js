/* Working example, observer for a new <div> with ID 'new-div' */
 
// Select the entire DOM for observing:
const target = document.querySelector('body');
var next_button;
// Create a new observer instance:
function next(){

    var url_arr = window.location.pathname.split("/");
    var match = url_arr[3].match(/[0-9]+$/)[0];
    var new_num = (1+parseInt(url_arr[3].match(/[1-9]+$/))).toString();
    while (new_num.length < match.length)
    {
        new_num = "0" + new_num;
    }
    var new_location = window.location.href.replace(/[0-9]+$/,new_num);
    window.location.href = new_location
}
var observer = new MutationObserver(function() {
    if (document.getElementsByClassName('control-bar_container')[0]) {
        console.log("The new class was just appended!");
        // Add new button the the control bar
        var vid_bar = document.getElementsByClassName('control-bar_container')[0];
        var btn = document.createElement('button');
        next_button = vid_bar.appendChild(btn);
        next_button.id = "next-button";
        next_button.addEventListener("click",next)
        next_button.innerHTML = "<svg width='19px' height='19px' viewBox='0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>skip_next</title><desc>Created with Sketch.</desc><g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Rounded' transform='translate(-548.000000, -1000.000000)'><g id='AV' transform='translate(100.000000, 852.000000)'><g id='-Round-/-AV-/-skip_next' transform='translate(442.000000, 142.000000)'><g><rect onclick = 'next' id='Rectangle-Copy-52' x='0' y='0' width='24' height='24'/><path d='M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z' id='🔹Icon-Color' fill='#FFF'/></g></g></g></g></g></svg>";
        document.getElementById("next-button").onclick = function() {next(); console.log(next);}
        console.log(next);
        console.log(next_button.onclick);
        next_button.onmouseover = function () {next_button.innerHTML = "<svg width='19px' height='19px' viewBox='0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>skip_next</title><desc>Created with Sketch.</desc><g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Rounded' transform='translate(-548.000000, -1000.000000)'><g id='AV' transform='translate(100.000000, 852.000000)'><g id='-Round-/-AV-/-skip_next' transform='translate(442.000000, 142.000000)'><g><rect onclick = 'next' id='Rectangle-Copy-52' x='0' y='0' width='24' height='24'/><path d='M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z' id='🔹Icon-Color' fill='#19BEC8'/></g></g></g></g></g></svg>";}
        next_button.onmouseout = function () {next_button.innerHTML = "<svg width='19px' height='19px' viewBox='0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>skip_next</title><desc>Created with Sketch.</desc><g id='Icons' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Rounded' transform='translate(-548.000000, -1000.000000)'><g id='AV' transform='translate(100.000000, 852.000000)'><g id='-Round-/-AV-/-skip_next' transform='translate(442.000000, 142.000000)'><g><rect onclick = 'next' id='Rectangle-Copy-52' x='0' y='0' width='24' height='24'/><path d='M7.58,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.58,7.11 C6.91,6.65 6,7.12 6,7.93 L6,16.07 C6,16.88 6.91,17.35 7.58,16.89 Z M16,7 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,7 C18,6.45 17.55,6 17,6 C16.45,6 16,6.45 16,7 Z' id='🔹Icon-Color' fill='#FFF'/></g></g></g></g></g></svg>";}
        observer.disconnect();
    }
});
 
// Set configuration object:
const config = { childList: true };
 
// Start the observer
observer.observe(target, config);

document.body.onkeyup = function(e) {
    // Get video player and video bar
    var player = document.getElementsByClassName("genie-video")[0];
    var bar = document.getElementById("video");
    console.log(next_button);
    console.log(next_button.onclick);
    // Reveal bar since event triggered
    // (Only for a better aesthetic)
    bar.dispatchEvent(new Event("mousemove")); 

    // Depending on key: play/pause, 
    // rewind or skip forward
    if (e.keyCode == 32)
        // Space
        if (player.paused)
            player.play();
        else
            player.pause();
    
    else if (e.keyCode == 37)
        // Left
        player.currentTime -= 5;

    else if(e.keyCode == 39)
        // Right
        player.currentTime += 5;
  }