function randomDelay() {
    return Math.floor(Math.random() * 6000);
}
function printNum(num) {
    return new Promise((resolve) => {
        const delay = randomDelay();
        setTimeout(() => {
            console.log(num);
            resolve();
        }, delay)
    })
}
async function printSequentially() {
    for (let i = 0; i <= 10; i++) {
        await printNum(i);
    }
}
printSequentially();