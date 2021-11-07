var numberOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i <= numberOfDrumButton.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",
    function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    }
  );
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});


function makeSound(key){
  switch (key) {
    case "s":
      var tom1 = new Audio('sound/tom-1.mp3');
      tom1.play();
      break;

    case "r":
      var tom2 = new Audio('sound/tom-2.mp3');
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio('sound/tom-3.mp3');
      tom3.play();
      break;

    case "m":
      var tom4 = new Audio('sound/tom-4.mp3');
      tom4.play();
      break;

    case "p":
      var snare = new Audio('sound/snare.mp3');
      snare.play();
      break;

    case "d":
      var crash = new Audio('sound/crash.mp3');
      crash.play();
      break;

    case "n":
      var kick = new Audio('sound/kick-bass.mp3');
      kick.play();
      break;
  
    default: console.log(buttonInnerHTML);
      break;
  }
}