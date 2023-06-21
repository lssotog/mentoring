function isPangram(word){
    // constant to store all the letter of the alphabet
    const lowerCaseWord = word.toLowerCase();
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const foundLetters = [];

    console.log(alphabet.length);

    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < lowerCaseWord.length; j++) {
            //console.log(alphabet[i], lowerCaseWord[j]);
            if(alphabet[i] === lowerCaseWord[j]){
                foundLetters.push(lowerCaseWord[j]);
                break;
            }
        }
        //console.log("===========")
    }

    if(foundLetters.length === alphabet.length){
        return true;
    } else {
        return false;
    }
}

const word = "The quick brown fox jumps over a lazy dog";
console.log(isPangram(word));

export default  isPangram;