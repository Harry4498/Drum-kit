var druntraversal = document.querySelectorAll(".drum").length;

for (var i = 0; i < druntraversal; i ++) {

  // this is for detecting button pressed

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
 var  innerhtml = this.innerHTML;
 // inner html will tell me about which buttom is clicked

// calling the make sooud function
makesound(innerhtml);
animation ( innerhtml);

  });

}
// detecting the keyboard pressed
document.addEventListener("keypress", function ( event){
  makesound(event.key);
  animation(event.key);
  // alert ( " the key is pressed");
});


function makesound (key ){


  switch( key){
    case "a":
    var tom1 = new Audio ( "./sounds/tom-1.mp3");
    tom1.play();
    break;

    case "s":
    var tom2 = new Audio ( "./sounds/tom-2.mp3");
    tom2.play();
    break;

    case "d":
    var tom3 = new Audio ( "./sounds/tom-3.mp3");
    tom3.play();
    break;


    case "f":
    var tom4 = new Audio ( "./sounds/tom-4.mp3");
    tom4.play();
    break;


    case "j":
    var snare = new Audio ( "./sounds/snare.mp3");
    snare.play();
    break;


    case "k":
    var crash = new Audio ( "sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio ( "sounds/kick-bass.mp3");
    kick.play();
    break;

    default : console.log(innerhtml);
  }

}

function animation (currentKey){
  // now we havae the value inside here  ( function )
  var activebutton =document.querySelector("." + currentKey)
  // here we use "." to access particular pressed activebutton
  activebutton.classList.add("pressed");
  // Now we need to remove this pressed function so we use settimeout
  setTimeout ( function (){
    activebutton.classList.remove("pressed");
  },100);

}
