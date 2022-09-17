$(".select-input .input").click(function () {
    $(this).attr('style', 'border: none; outline: none;');
});

$(".input-text input").click(function () {
    $(this).attr('style', 'border: none; outline: none;');
});

var color = localStorage.getItem("color");
if (!color) {
    localStorage.setItem("color", "red");
    color = 'red';
}

$(".theme .theme-set div").click(function () {
    color = $(this).attr('data-color');
    localStorage.setItem("color", color);
    window.location.reload();
});


if (color == 'red') {
    selectedRed();
} else if (color == 'blue') {
    selectedBlue();
} else if (color == 'green') {
    selectedGreen();
}

function selectedRed() {
    var red = "#EC6462";

    $(".button").addClass('button-color-red');
    $(".button").removeClass('button-color-blue');
    $(".button").removeClass('button-color-green');

    $(".theme .theme-set-button div").addClass("red");
    $(".theme .theme-set-button div").removeClass("blue");
    $(".theme .theme-set-button div").removeClass("green");
    $(".theme .theme-set .seted").removeClass("seted");
    $(".theme .theme-set .red").addClass("seted");

    $(".slope .slope-title span").attr('style', 'color: ' + red);

    $(".about-desc .other div span").attr('style', 'color: ' + red);

    $(".main-input-text .input-button").addClass('input-button-red');
    $(".main-input-text .input-button").removeClass('input-button-blue');
    $(".main-input-text .input-button").removeClass('input-button-green');
}

function selectedBlue() {
    var blue = "#1835cfab";

    $(".button").addClass('button-color-blue');
    $(".button").removeClass('button-color-red');
    $(".button").removeClass('button-color-green');

    $(".theme .theme-set-button div").addClass("blue");
    $(".theme .theme-set-button div").removeClass("red");
    $(".theme .theme-set-button div").removeClass("green");
    $(".theme .theme-set .seted").removeClass("seted");
    $(".theme .theme-set .blue").addClass("seted");

    $(".slope .slope-title span").attr('style', 'color: ' + blue);

    $(".about-desc .other div span").attr('style', 'color: ' + blue);

    $(".main-input-text .input-button").addClass('input-button-blue');
    $(".main-input-text .input-button").removeClass('input-button-red');
    $(".main-input-text .input-button").removeClass('input-button-green');
}

function selectedGreen() {
    var green = "#2ecc50c7";

    $(".button").addClass('button-color-green');
    $(".button").removeClass('button-color-red');
    $(".button").removeClass('button-color-blue');

    $(".theme .theme-set-button div").addClass("green");
    $(".theme .theme-set-button div").removeClass("blue");
    $(".theme .theme-set-button div").removeClass("red");
    $(".theme .theme-set .seted").removeClass("seted");
    $(".theme .theme-set .green").addClass("seted");

    $(".slope .slope-title span").attr('style', 'color: ' + green);

    $(".about-desc .other div span").attr('style', 'color: ' + green);

    $(".main-input-text .input-button").addClass('input-button-green');
    $(".main-input-text .input-button").removeClass('input-button-red');
    $(".main-input-text .input-button").removeClass('input-button-blue');
}
