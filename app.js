function compareWords(firstWord, secondWord){
    //Make strings lower case, remove spaces and non-alphabet characters using regex
    first = firstWord.replace(/[^\w]/g, '').toLowerCase()
    second = secondWord.replace(/[^\w]/g, '').toLowerCase()

    console.log(first);
    console.log(second);

    //If words are not same length, or if they are the exact same word, they are not anagrams
    if (first.length != second.length || first === second) {
        console.log(`${firstWord} and ${secondWord} are not anagrams.`);
        return false;
    } else {
        //Split word into component characters, alphabetise, then re-stringify
        //If sorted words are the same, they are anagrams
        first = first.split("").sort().join("");
        second = second.split("").sort().join("");
            if (first === second) {
                console.log(`${firstWord} and ${secondWord} are anagrams.`);
                return true;
            }
    } 
}



compareWords("squirrel", "Squi rrel@");
compareWords("Fantastic", "TicTansFa");