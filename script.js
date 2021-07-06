// Assignment code

// variables that the user chooses to input

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// listing the specisl characters that can be used in the generated password
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// listing the acceptable numbers that the password can contain
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// listing the alphabetical characters that can be used in the p/w
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase conversion
space = [];
 
var choices;
// converting letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};

// variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("password").placeholder = ps;
});

// The actual function where password is generated
function writePassword() {
    enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128."));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128."));
    }else {
        // continues once as long as user input is validated and being correct
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    } 

    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    }else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i=0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.legnth)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


