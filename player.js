document.body.onkeyup = function(e) {
    // Get video player and video bar
    var player = document.getElementsByClassName("genie-video")[0];
    var bar = document.getElementById("video");

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