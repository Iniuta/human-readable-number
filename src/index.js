module.exports = function toReadable(number) {
    let digitUnits = {
        0: "zero",
        1: "one",
        2: "two",
        4: "four",
        3: "three",
        5: "five",
        7: "seven",
        6: "six",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let digitTens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let digitHoundreds = {
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
    };

    let first = number - (number % 10);
    let second = number % 10;
    let hundreds = number - parseInt((number / 100).toString().split(".")[1]);
    let floatNum = parseInt((number / 100).toString().split(".")[1]);
    let res = floatNum - (floatNum % 10);
    let dig = number - (number % 100);
    let isItNaN = parseInt((number / 10).toString().split(".")[1]);

    if (number) {
        if (number.toString().length === 1) {
            return digitUnits[number];
        } else if (number.toString().length === 2 && number <= 19) {
            return digitUnits[number];
        } else if (number.toString().length === 2 && number % 10 !== 0) {
            return `${digitTens[first]} ${digitUnits[second]}`;
        } else if (number.toString().length === 2 && number % 10 === 0) {
            return digitTens[number];
        } else if (number.toString().length === 3) {
            if (number % 100 === 0) {
                return digitHoundreds[number];
            } else if ((number / 100).toString().length === 4) {
                if (isNaN(isItNaN)) {
                    return `${digitHoundreds[number - floatNum]} ${
                        digitUnits[floatNum]
                    }`;
                } else if (floatNum > 20) {
                    return `${digitHoundreds[number - floatNum]} ${
                        digitTens[floatNum - (floatNum % 10)]
                    } ${digitUnits[floatNum % 10]}`;
                }
                return `${digitHoundreds[number - floatNum]} ${
                    digitUnits[floatNum]
                }`;
            } else if ((number / 100).toString().length === 3) {
                if (floatNum === 1) {
                    return `${digitHoundreds[number - floatNum * 10]} ${
                        digitUnits[floatNum * 10]
                    }`;
                }
                return `${digitHoundreds[number - floatNum * 10]} ${
                    digitTens[floatNum * 10]
                }`;
            }
        }
    }
}
