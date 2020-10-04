function compareWords(firstWord, secondWord){
    //Make strings lower case, remove spaces and non-alphabet characters using regex
    first = firstWord.replace(/[^\w]/g, '').toLowerCase()
    second = secondWord.replace(/[^\w]/g, '').toLowerCase()

    console.log(first);
    console.log(second);

}



compareWords("squirrel", "Squi rrel");