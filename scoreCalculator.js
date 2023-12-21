function countElementOccurrences(yamsInputNumbers, number) {
    const sortedNumbers = yamsInputNumbers.sort();
    let numOccurrences = 1;
    let i = 0;

    while (i < sortedNumbers.length && sortedNumbers[i] !== number) {
        ++i;
    }

    while (i < sortedNumbers.length - 1 && sortedNumbers[i] === sortedNumbers[i+1]) {
        ++numOccurrences;
        ++i;
    };

    return numOccurrences;
}

function countAllElementsOccurrences(yamsInputNumbers) {
    const numOccurrencesByNumber = Object.fromEntries(yamsInputNumbers.map(number => [number, 0]));

    for (let i = 0; i < yamsInputNumbers.length; ++i) {
        numOccurrencesByNumber[`${yamsInputNumbers[i]}`] = countElementOccurrences(yamsInputNumbers, yamsInputNumbers[i]);
    }

    return numOccurrencesByNumber;
}

function isBrelan(occurrences) {
    for (let key of occurrences) {
        if (occurrences[key] === 3) {
            return true;
        }
    }

    return false;
}

module.exports = { countElementOccurrences, countAllElementsOccurrences, isBrelan};