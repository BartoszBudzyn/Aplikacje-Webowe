const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    const max_characters = parseInt(
        document.getElementById("max_characters").value,
        10
    );
    const min_characters = parseInt(
        document.getElementById("min_characters").value,
        10
    );
    const litery = document.getElementById("litery");
    const znaki = document.getElementById("znaki");
    const len = Math.floor(
        Math.random() * (max_characters - min_characters + 1) + min_characters
    );
    let password = "";
    let characters = lowercaseLetters;
    if (litery.checked) {
        characters += uppercaseLetters;
    }
    if (znaki.checked) {
        characters += specialCharacters;
    }
    for (let i = 0; i < len; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    alert(`Wygenerowane hasło to: ` + password);
}
