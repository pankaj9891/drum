function playSound(soundPath) {
    var audio = new Audio(soundPath);
    audio.play();
  }
  
  function wclick() {
    playSound("sounds/sound1.mp3");
  }
  
  function aclick() {
    playSound("sounds/sound2.mp3");
  }
  
  function sclick() {
    playSound("sounds/sound3.mp3");
  }
  
  function dclick() {
    playSound("sounds/sound4.mp3");
  }
  
  function jclick() {
    playSound("sounds/sound5.mp3");
  }
  
  function kclick() {
    playSound("sounds/sound6.mp3");
  }
  
  function lclick() {
    playSound("sounds/sound7.mp3");
  }
  
  document.addEventListener("keydown", (e) => {
    var name = e.key.toLowerCase();
    if (name === "w") {
      wclick();
    } else if (name === "a") {
      aclick();
    } else if (name === "s") {
      sclick();
    } else if (name === "d") {
      dclick();
    } else if (name === "j") {
      jclick();
    } else if (name === "k") {
      kclick();
    } else if (name === "l") {
      lclick();
    } else {
      console.log("Other key is pressed");
    }
  });
  