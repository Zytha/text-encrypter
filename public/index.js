const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z"; // alphabets basically
const alphabet_array = alphabets.split(" ", 26);

function runProgram() {
    const result_content = document.getElementById("result_content");
    let input = document.getElementById("input").value;
    input = input.toLowerCase();
    input = input.split("");
    for (let i = 0; i < input.length; i++) {
        let character = input[i]; // define a variable for each character
        if (alphabet_array.includes(character)) {
            // check if the character is alphabet or not
            // If yes, it will execute the code below
            let alphabet_position = alphabet_array.indexOf(character);
            // get the character that matches the character in the alphabet list
            alphabet_position++; // plus one to the character index value which takes the character after it
            input[i] = alphabet_array[alphabet_position]; // replace it with the new character
        } else {
            character = " ";
        }
    }
    let result = input.join(); // join them together so it's a string ( better to use )
    result = result.replaceAll(",", ""); // replace all "," to nothing ( better visual )
    result_content.textContent = result;
}
