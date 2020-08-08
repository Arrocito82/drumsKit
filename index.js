//getting all the buttons
var buttons = document.getElementsByClassName("drum");

//function to display the alert that says i got clicked
// function displayAlert() {
//     crash.play();
// }


for (let index = 0; index < buttons.length; index++) {

    buttons[index].addEventListener("click", function() {
        var key = this.innerHTML;
        makeSound(key);
    });

    // thispartshouldbethekeypressonthekeyboardcaptured.
    document.addEventListener("keydown", function(event) {

        makeSound(event.key);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "d":

            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}
