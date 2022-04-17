window.addEventListener("load", function() {
    var padOne = new Audio('sounds/173837__yellowtree__tom-low.wav');
    document.querySelector('#sound1').addEventListener("click", function() {
      padOne.load()
      padOne.play();
    });
   

    var padTwo = new Audio('sounds/fatty-snare-drum.wav');
    this.document.querySelector('#sound2').addEventListener("click", function() {
      padTwo.load()
      padTwo.play()
    });


    var padThree = new Audio('sounds/jazz-ride.wav');
    this.document.querySelector('#sound3').addEventListener("click", function() {
      padThree.load()
      padThree.play()
    });
 
    var padFour = new Audio('sounds/kick-drum-restrained.wav');
    document.querySelector('#sound4').addEventListener("click", function() {
      padFour.load()
      padFour.play();
    });

    var padFive = new Audio('sounds/tom-ofalltoms.wav');
    document.querySelector('#sound5').addEventListener("click", function() {
      padFive.load()
      padFive.play();
    });

    var padSix = new Audio('sounds/vinyl-crash.wav');
    document.querySelector('#sound6').addEventListener("click", function() {
      padSix.load()
      padSix.play();
    });

});



window.addEventListener("keydown", function(e){

  var keyF = new Audio('sounds/173837__yellowtree__tom-low.wav');
  var fStyleOn = document.getElementById("sound1");
  if (e.key == "f") {
    keyF.load()
    keyF.play();
    fStyleOn.classList.add("sound_active")
  }
  

  var keyG = new Audio('sounds/fatty-snare-drum.wav');
  var gStyleOn = document.getElementById("sound2");
  if (e.key == "g") {
    keyG.load()
    keyG.play();
    gStyleOn.classList.add("sound_active")
  }

  var keyH = new Audio('sounds/jazz-ride.wav')
  var hStyleOn = document.getElementById('sound3')
  if (e.key == "h") {
    keyH.load()
    keyH.play()
    hStyleOn.classList.add("sound_active")
  }

  var keyV = new Audio('sounds/kick-drum-restrained.wav');
  var vStyleOn = document.getElementById("sound4")
  if (e.key == "v") {
    keyV.load()
    keyV.play()
    vStyleOn.classList.add("sound_active")
  }

  var keyB = new Audio('sounds/tom-ofalltoms.wav');
  var bStyleOn = document.getElementById("sound5")
  if (e.key == "b") {
    keyB.load()
    keyB.play()
    bStyleOn.classList.add("sound_active")
  }

  var keyN = new Audio('sounds/vinyl-crash.wav');
  var nStyleOn = document.getElementById("sound6")
  if (e.key == "n") {
    keyN.load()
    keyN.play()
    nStyleOn.classList.add("sound_active")
  }

});

window.addEventListener("keyup", function(e) {
  var fStyle = document.getElementById("sound1");
  fStyle.classList.remove("sound_active");
  
  var gStyle = document.getElementById("sound2");
  gStyle.classList.remove("sound_active");

  var hStyle = document.getElementById("sound3");
  hStyle.classList.remove("sound_active");

  var vStyle = document.getElementById("sound4");
  vStyle.classList.remove("sound_active");

  var bStyle = document.getElementById("sound5");
  bStyle.classList.remove("sound_active")

  var nStyle = document.getElementById("sound6");
  nStyle.classList.remove("sound_active")
});