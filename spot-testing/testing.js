var flat = function (arr, n) {
    if (n === 0) {
        return arr
    };
    let newArray = [];
    arr.forEach(member => {
        if (Array.isArray(member)) {
            newArray = newArray.concat(member)
        } else {
            newArray.push(member)
        }
    });
    for (let i = 1; i < n; i++) {
        let tempArray = [];
        newArray.forEach(member => {
            if (Array.isArray(member)) {
                tempArray = tempArray.concat(member)
            } else {
                tempArray.push(member)
            }
        });;
        newArray = tempArray;
    };
    return newArray;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

console.log(flat(arr, 0));

console.log(flat(arr,1))