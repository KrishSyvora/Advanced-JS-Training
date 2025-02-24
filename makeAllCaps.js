let words = prompt("Enter words separated by commas: ").split(",").map(word => word.trim());

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Error in makeAllCaps: Array contains non-string elements");
        }
    });
}
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            resolve(words.sort());
        } else {
            reject("Error in sortWords: Array contains non-string elements!");
        }
    })
}

makeAllCaps(words)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.error(err));
