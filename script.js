const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function onClick () {
    let text = textInput.value.trim();
    if (text === "") {
        window.alert("Please input a value.");
       return;
    };
    let originalText = text;
    let cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedText = cleanedText.split("").reverse().join("");
    
        // General palindrome check
        if (cleanedText === reversedText) {
            result.textContent = `${originalText} is a palindrome.`;
        } else {
            result.textContent = `${originalText} is not a palindrome.`;
        }
};
checkBtn.addEventListener("click", onClicak);

