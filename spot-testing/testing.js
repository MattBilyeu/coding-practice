var createCounter = function(init) {
    let robot = {
        init: init,
        startingValue: init,
        increment: function() {
            init++;
            return init
        },
        decrement: function() {
            init--;
            return init
        },
        reset: function() {
            init = startingValue;
            return init;
        }
    };
    return robot
};

const testBot = createCounter(5);

console.log(testBot.increment());
console.log(testBot.increment());
console.log(testBot.reset());
console.log(testBot.increment());