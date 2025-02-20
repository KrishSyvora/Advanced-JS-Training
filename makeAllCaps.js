function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Array contains non-string elements");
        }
    });
}
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            resolve(words.sort());
        } else {
            reject("Array contains non-string elements!");
        }
    })
}

makeAllCaps(["Krish", "Manan", "Mohan"])
    .then(sortWords)
    .then(result => console.log(result))
    .catch(err => console.log(err));
