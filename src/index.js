module.exports = function toReadable (number) {
    let numStr = number.toString();
    let result = "";
    if (number < 10) {
        result = oneNumber(numStr);
    } else if (number > 9 && number < 20) {
        result = tens(numStr);
    } else if (number > 19 && number < 100) {
        result = twoNumbers(numStr);
    } else if (number > 99) {
        result = threeNumbers(numStr); 
    }
    return result;
}

function oneNumber(numStr) {
    switch (numStr) {
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        case "8": return "eight";
        case "9": return "nine";
        case "0": return "zero";
    }
}

function tens(numStr) {
    switch (numStr) {
        case "10": return "ten";
        case "11": return "eleven";
        case "12": return "twelve";
        case "13": return "thirteen";
        case "14": return "fourteen";
        case "15": return "fifteen";
        case "16": return "sixteen";
        case "17": return "seventeen";
        case "18": return "eighteen";
        case "19": return "nineteen";
    }
}

function twentyNinety(numStr) {
    switch (numStr) {
        case "2": return "twenty";
        case "3": return "thirty";
        case "4": return "forty";
        case "5": return "fifty";
        case "6": return "sixty";
        case "7": return "seventy";
        case "8": return "eighty";
        case "9": return "ninety";
    }
}

function twoNumbers(numStr) {
    if (numStr[1] === "0") {
        return twentyNinety(numStr[0])
    }

    return twentyNinety(numStr[0]) + " " + oneNumber(numStr[1]);
}

function threeNumbers(numStr) {
    if (numStr[1] === "0" && numStr[2] === "0") {
        return oneNumber(numStr[0]) + " hundred"
    } else if (numStr[1] === "0") {
        return oneNumber(numStr[0]) + " hundred " + oneNumber(numStr[2]);
    } else if (parseInt(numStr[1] + numStr[2]) > 9 && parseInt(numStr[1] + numStr[2]) < 20) {
        return oneNumber(numStr[0]) + " hundred " + tens(numStr[1] + numStr[2]);
    } else if (numStr[2] === "0") {
        return oneNumber(numStr[0]) + " hundred " + twentyNinety(numStr[1]);
    }

    return oneNumber(numStr[0]) + " hundred " + twentyNinety(numStr[1]) + " " + oneNumber(numStr[2]);
}
