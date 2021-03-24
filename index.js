

//  first, we play sound when a button is clicked
var numDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var btn_letter = this.innerHTML;
    makeSound(btn_letter);
    buttonAnimation(btn_letter);
  });

}


// now we play sound when a particular key is pressed.
document.addEventListener("keydown", function(event){
  // the event is the thing which will be passed to the function when a key is pressed. this has key information
  // this is the advantage of callback function
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(detected) {

  switch (detected) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "k":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "l":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    default:
      console.log(btn_letter)

  }
}

// adding animation to the buttons

function buttonAnimation(btn_key){
  document.querySelector("." + btn_key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + btn_key).classList.remove("pressed");
  }, 100)
}
