const { isBrelan, countAllElementsOccurrences } = require('scoreCalculator');

SCORE_BRELAN = 28;


function evaluateYams(yamsInputNumbers) {
    const allElementsOccurrences = countAllElementsOccurrences(yamsInputNumbers);

    // TODO: check full before this condition as they can overlap
    if (isBrelan(allElementsOccurrences)) {
        return SCORE_BRELAN;
    }
}


module.exports = { evaluateYams };