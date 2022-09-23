const alphabets = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const alphabet_array = alphabets.split(" ", 26);

function runProgram() {
    const result_content = document.getElementById("result_content");
    let input = document.getElementById("input").value;
    input = input.toLowerCase();
    input = input.split("");
    for (let i = 0; i < input.length; i++) {
        let character = input[i];
        if (alphabet_array.includes(character)) {
            if (input[i] == "z") {
                input[i] = "a";
            } else {
                let alphabet_position = alphabet_array.indexOf(character);
                alphabet_position++;
                input[i] = alphabet_array[alphabet_position];
            }
        } else {
            character = " ";
        }
    }
    let result = input.join();
    result = result.replaceAll(",", "");
    result_content.textContent = result;
}
