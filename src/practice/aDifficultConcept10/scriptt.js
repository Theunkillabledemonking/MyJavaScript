function createCounter(callback) {
    let count = 0;
    return function() {
        count += 1;
        callback(count);
    }
}

const myCounter = createCounter(function(currentCount) {
    console.log('현재 카운트:', currentCount);
});

myCounter();
myCounter();
myCounter();