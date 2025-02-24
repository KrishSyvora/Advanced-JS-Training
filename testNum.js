function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is higher than 10`);
        } else {
            reject(`${num} is lesser than or equal to 10`);
        }
    });
}
let num = prompt("Enter a number: ");
testNum(num)
    .then(result => console.log(result))
    .catch(err => console.error(err));
