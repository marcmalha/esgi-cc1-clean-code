function countElementOccurrences(yamsInputNumbers, number) {
    const sortedNumbers = yamsInputNumbers.sort();
    let numOccurrences = 1;
    let i = 0;

    while (i < sortedNumbers.length - 1 && sortedNumbers[i] != number) {
        ++i;
    }

    while (i < sortedNumbers.length - 1 && sortedNumbers[i] == sortedNumbers[i+1]) {
        ++numOccurrences;
        ++i;
    };

    return numOccurrences;
}
