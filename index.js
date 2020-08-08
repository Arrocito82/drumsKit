//getting all the buttons
var buttons = document.getElementsByClassName("drum");

var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");


//function to display the alert that says i got clicked
// function displayAlert() {
//     crash.play();
// }


for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function() {
        var key = this.innerHTML;

        switch (key) {
            case "w":
                tom1.play();
                break;
            case "a":
                crash.play();
                break;
            case "s":
                kickBass.play();
                break;
            case "d":
                snare.play();
                break;
            case "j":
                tom2.play();
                break;
            case "k":
                tom3.play();
                break;
            case "l":
                tom4.play();
                break;
            default:
                break;
        }

    });

    // thispartshouldbethekeypressonthekeyboardcaptured.
    document.addEventListener("keydown", function(event) {

        switch (event.key) {
            case "w":
                tom1.play();
                break;
            case "a":
                crash.play();
                break;
            case "s":
                kickBass.play();
                break;
            case "d":
                snare.play();
                break;
            case "j":
                tom2.play();
                break;
            case "k":
                tom3.play();
                break;
            case "l":
                tom4.play();
                break;
            default:
                break;
        }

    });
}