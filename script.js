function firstWord(s) {
    let startIndex = 0;

    while (startIndex < str.length && str[startIndex] === ' ') {
        startIndex++;
    }

    let endIndex = startIndex;

    while (endIndex < str.length && str[endIndex] !== ' ') {
        endIndex++;
    } 

    return str.substring(startIndex, endIndex);

}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
