const {countElementOccurrences, countAllElementsOccurrences} = require('../scoreCalculator');


test('count the number of 3s in [5,4,5,3,5,4,5,5]', () => {
    const numbers = [5,4,5,3,5,4,5,5];
    
    expect(countElementOccurrences(numbers, 3))
        .toBe(1);
});

test('count the number of 4s in [5,4,5,3,5,4,5,5]', () => {
    const numbers = [5,4,5,3,5,4,5,5];
    
    expect(countElementOccurrences(numbers, 4))
        .toBe(2);
});


test('count the number of 5s in [5,4,5,3,5,4,5,5]', () => {
    const numbers = [5,4,5,3,5,4,5,5];
    
    expect(countElementOccurrences(numbers, 5))
        .toBe(5);
});

test('count number of occurrences of all distinct elements in [5,4,5,3,5,4,5,5]', () => {
    const numbers = [5,3,5,5,4,5,3,5];
    
    expect(countAllElementsOccurrences(numbers))
        .toMatchObject({'3': 2, '4': 1, '5': 5});
});