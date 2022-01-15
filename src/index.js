module.exports = function toReadable(number) {
    let ones = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    let teen = [
        '',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    let tens = [
        "",
        "",
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    let string = Math.abs(number).toString();
    let endNumber = +string[string.length - 1] + +string[string.length - 2];
    let result;

    if (string.length === 1) {
        result = ones[number];
    }
    if (string.length === 2) {
        if (number < 10) {
            result = ones[number];
        } else if (number >= 10 && number < 20) {
            result = teen[+string[0] + +string[1]];
        } else {
            result = tens[string[0]] + ' ' + ones[string[1]];
        }
    }

    if (string.length === 3) {
        if (endNumber === 0) {
            result = ones[string[0]] + ' hundred';
        } else if (+string[string.length - 2] === 0) {
            result = ones[string[0]] + ' hundred ' + ones[string[2]];
        } else if (+string[string.length - 2] === 1) {
            result = ones[string[0]] + ' hundred ' + teen[+string[1] + +string[2]];
        } else {
            result = ones[string[0]] + ' hundred ' + tens[string[1]] + ' ' + ones[string[2]];
        }
    }
    return result;
}
