(function () {

    let testString = 'w3resource';

    function rotateString() {
        let lastIndex = testString.length-1;
        let lastChar = testString[lastIndex];
        testString = lastChar + testString.substring(0, lastIndex);
    }

    function checkPrefix(prefix, testString){
        let prefixPattern = new RegExp(`^${prefix}`);
        let prefixMatch = testString.match(prefixPattern);
        return  prefixMatch ? testString : prefix+testString;
    }
    function removeCharacterAtPosition(position, testString){
        return testString.slice(0, position) + testString.slice(position+1);
    }
    function removeFirstCharacter(testString){
        return testString.slice(1);
    }
    function removeLastCharacter(testString){
        return testString.slice(0, testString.length - 1);
    }
    function removeCharacter(character, testString, allOccurrences){
        let pattern = `[${character}]`;
        let temp = allOccurrences ? new RegExp( pattern, "g") : new RegExp(pattern);

        return testString.replace(temp, '');
    }
    function swapCharactersOnPositions(position1, position2, testString){

        if (testString[position1] === testString[position2])
            return testString;

        if(position1 < testString.length && position2 < testString.length){
            let temp1 = testString.slice(0, position1);
            let temp2 = testString.slice(position1 + 1, position2);
            let temp3 = testString.slice(position2 + 1);
            return temp1 + testString[position2] + temp2 + testString[position1] + temp3;
        }

        return "Error: Invalid Position(s) Passed."
    }

    function swapCharacters(character1, character2, testString){
        let chars = character1.toLowerCase() + character2.toLowerCase() + character1.toUpperCase() + character2.toUpperCase() ;

        let temp = new RegExp(`[${chars}]`, 'g');
        return testString.replace(temp, ($1) => {
            if($1 === $1.toUpperCase()){
                return  $1 === character1.toUpperCase() ? character2.toUpperCase() : character1.toUpperCase();
            }
            return  $1 === character1.toLowerCase() ? character2.toLowerCase() : character1.toLowerCase();
        })
    }
    function getNumberOfOccurrences(character, testString){
        let temp = new RegExp(`${character}`, 'g');
        let characterMatch = testString.match(temp);
        return characterMatch.length;
    }
    function getFirstOccurrence(character, testString){
        return testString.indexOf(character);
    }

    function reverseString(testString){
        return testString.split("").reverse().join("");
    }

    function replaceAt(position, character, testString){
        let temp1 = testString.slice(0, position);
        let temp2 = testString.slice(position + 1);
        return temp1 + character + temp2;
    }

    function replaceCharacter(character, replaceWith, testString, allOccurrences){
        let pattern = `[${character}]`;
        let temp = allOccurrences ? new RegExp( pattern, "g") : new RegExp(pattern);
        return testString.replace(temp, replaceWith);
    }

    function handleCapitalization(type, sentence){
        let words = sentence.split(" ");
        type = type ? "toUpperCase" : "toLowerCase";
        for(let i = 0; i < words.length; i++){
            let word = words[i];
            let firstLetter = words[i][0][type]();
            let partial = word.slice(1);
            words[i] = firstLetter + partial;
        }
        return words.join(" ");
    }

    function capitalize(sentence){
        return handleCapitalization(true, sentence);
    }

    function unCapitalize(sentence){
        return handleCapitalization(false, sentence);
    }

    function sortString(testString){
        let pattern = /\s/;
        let whitespaces = new RegExp( pattern, "g");
        return testString.toLowerCase().replace(whitespaces, '').split("").sort().join("");
    }
    function getDistanceBetweenCharacters(char1, char2, testString){
        let charPosition1 =  getFirstOccurrence(char1, "testString");
        let charPosition2 =  getFirstOccurrence(char2, "testString");
        return testString.slice(charPosition1 + 1, charPosition2).length;
    }
    function getVowelCount(testString){
        let temp = new RegExp(`[AEIOUaeiou]`, 'g');
        let characterMatch = testString.match(temp);
        return characterMatch.length;
    }

    function getLastDigit(num){
        let digits = num.toString().split("");
        let n = digits.length - 1;
        return parseInt(digits[n])
    }

    function getNextAlphabet(testString, position){
        let charCode = testString.charCodeAt(position) + 1;
        return String.fromCharCode(charCode);
    }

    function getMiddleCharacters(n, testString){// in odd
        let midPoint = (testString.length - 1) / 2;
        let space = (n - 1) / 2;
        return testString.slice(midPoint - space, midPoint + space + 1);
    }

    function getSumFromString(testString){
        let digits = testString.match(new RegExp( /\d/, 'g'));
        return digits.reduce((total, num) => parseInt(total) + parseInt(num));
    }

    function isCorrect(testString){
        return !!testString.match(new RegExp(/^[A-Z].*\.$/, 'g'));
    }

    let response =  isCorrect("Aksdfgbdf");
    console.log(response);

})();