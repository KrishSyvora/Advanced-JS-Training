var somelist = readVeryLongList();

var nextItem = function () {
    var item = somelist.pop();
    if (item) {
        setTimeout(nextItem, 0); //using an async recursion which checks that it only goes to stack when stack is empty this makes sure that stack doesn't overflows even when value is too long
    }
};

nextItem();