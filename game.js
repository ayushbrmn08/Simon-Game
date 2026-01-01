var buttonColors = ["green", "red", "blue", "yellow"];
var patterns = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var clickEnabled = true;
var highScore = localStorage.getItem('simonHighScore') || 0;
var currentAudio = null;
var keyPressActive = false;

$(document).ready(function () {
    $("#highScoreDisplay").text(highScore);
    $(document).on("keypress", function () {
        if (keyPressActive) return;
        keyPressActive = true;
        setTimeout(() => { keyPressActive = false; }, 300);
        startGame();
    });
    $(".btn").on("click", startGame);
});

//Event Listener for Button Clicks
$("button.square").on("click", function () {
    if (!clickEnabled || keyPressActive) {
        return;
    }

    clickEnabled = false;

    var buttonColor = $(this).attr("id");
    if (!started) {
        gameOver(buttonColor);
    }
    else {
        checkPattern(buttonColor);
    }
});

//Start Game
function startGame() {
    if (!started) {
        started = true;
        level = 1;
        userClickedPattern.length = 0;
        patterns.length = 0;
        clickEnabled = false;
        nextSequence(level);
    }
}

//Generate Pattern for next level
function nextSequence(lvl) {
    $("h1").text("Level " + lvl);
    var randomNumber = randomNum();
    patterns.push(randomNumber);
    playPattern(0);
}

// Play the Pattern Sequence with delay
function playPattern(index) {
    if (index < patterns.length) {
        var color = buttonColors[patterns[index]];
        buttonPress(color);
        var delay = Math.max(300, 700 - (level * 50)); // speed increases with level
        setTimeout(function () { playPattern(index + 1); }, delay);
    } else {
        setTimeout(function () { clickEnabled = true; }, 200);
    }
}


//Checking User Presses against Game Pattern
function checkPattern(buttonPressed) {
    buttonPress(buttonPressed);

    var colorIndex = buttonColors.indexOf(buttonPressed);
    if (colorIndex === -1) {
        clickEnabled = true;
        return;
    }

    userClickedPattern.push(colorIndex);

    if (userClickedPattern[userClickedPattern.length - 1] === patterns[userClickedPattern.length - 1]) {
        if (userClickedPattern.length === patterns.length) {
            level += 1;
            userClickedPattern.length = 0;
            setTimeout(function () { nextSequence(level); }, 1000);
        } else {
            setTimeout(function () {
                clickEnabled = true;
            }, 250); // Short delay to prevent accidental double clicks
        }
    }
    else {
        gameOver(0);
        userClickedPattern.length = 0;
        patterns.length = 0;
        started = false;
        clickEnabled = true; // Re-enable for new game
    }

}

//Game Over Animation and Sound generation
function gameOver(buttonColor) {
    // Update high score
    if (level > highScore) {
        highScore = level;
        localStorage.setItem('simonHighScore', highScore);
        $("#highScoreDisplay").text(highScore);
    }
    
    started = false;
    clickEnabled = true;
    $("body").css("background-color", "#fc0000ff");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("h1").css("opacity", "0.85");
    if (buttonColor) buttonPress(buttonColor);
    setTimeout(function () {
        audioPlayer('gameover');
    }, 400);
    setTimeout(function () {
        $("body").css("background-color", "#00394c");
        $("h1").css("opacity", "1");
    }, 200);
}

//Play Audio for each button and game over
function audioPlayer(soundType) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    var soundPath;
    switch (soundType) {
        case 'red': soundPath = "sounds/red.mp3"; break;
        case 'green': soundPath = "sounds/green.mp3"; break;
        case 'blue': soundPath = "sounds/blue.mp3"; break;
        case 'yellow': soundPath = "sounds/yellow.mp3"; break;
        case 'gameover': soundPath = "sounds/gameoverr.mp3"; break;
        default: return;
    }

    currentAudio = new Audio(soundPath);
    currentAudio.play();
}

//Button Press Animation and Sound effects
function buttonPress(colorOfButton) {
    audioPlayer(colorOfButton);
    var buttonObject;
    buttonObject = $("#" + colorOfButton);
    buttonObject.addClass("pressed");
    setTimeout(function () {
        buttonObject.removeClass("pressed");
    }, 100);
    buttonObject.fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75).fadeOut(100).fadeIn(100);
}

//Generate Random Number between O and 3 for game logic
function randomNum() {
    var randNum = Math.floor(Math.random() * 4);
    return randNum;
}