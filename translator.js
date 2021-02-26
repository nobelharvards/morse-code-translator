import * as dictionary from "./dictionary.js";
const morseToEnglish = (morse, delimiter) =>
    morse.split(delimiter)
        .map(character => dictionary.morse[character])
        .join(""); // .reduce((a, b) => `${a}${b}`);
const englishToMorse = (english, delimiter) => english.split("")
        .map(character => dictionary.alphabet[character])
        .join(delimiter); // .reduce((a, b) => `${a}${delimiter}${b}`);
const checkDelimiter = (delimiter) => delimiter ? delimiter : " ";
const translate = event => {
    event.preventDefault();
    const translationDirection = document.querySelector("input[name=translationDirection]:checked").value;
    switch (translationDirection) {
        case "morseToEnglish":
            output.value = morseToEnglish(input.value, checkDelimiter(delimiter.value));
            //output.value = morseToEnglish(input.value, delimiter.value ? delimiter.value : " ");
            break;
        case "englishToMorse":
            output.value = englishToMorse(input.value, checkDelimiter(delimiter.value));
            break;
        default:
            console.log("Not Morse to English or English to Morse, something has gone wrong?");
            output.value = "Not Morse to English or English to Morse, something has gone wrong?";
    }
}
const input = document.getElementById("input");
const output = document.getElementById("output");
const delimiter = document.getElementById("delimiter");
const form = document.getElementById("form");
form.addEventListener("submit", translate);