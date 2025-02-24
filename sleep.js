function sleep(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}
let seconds = prompt("Enter seconds to wait: ");
sleep(seconds).then(() => {
    console.log(`After ${seconds} seconds`);
});