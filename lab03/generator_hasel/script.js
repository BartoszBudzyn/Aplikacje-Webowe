const max_characters = document.getElementById('max_characters');
const min_characters = document.getElementById('min_characters');
const litery = document.getElementById('litery');
const znaki = document.getElementById('znaki');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
    const length = Math.floor(Math.random() * (max_characters.value - min_characters.value + 1)) + min_characters.value;
    let password = '';
    let characters = lowercaseLetters;
    if (litery.checked) {
        characters += uppercaseLetters;
    }
    if (znaki.checked) {
        characters += specialCharacters;
    }
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    alert(`Wygenerowane hasło to:`$(password));
}