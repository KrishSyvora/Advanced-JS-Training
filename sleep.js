function sleep(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}
sleep(3).then(() => {
    console.log("After 3 seconds");
});