Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return []
    }
    let newArray = [];
    for (let i = 0; i < rowsCount; i++) {
        const subArray = [];
        newArray.push(subArray);
    };
    if (rowsCount === 1) {
        newArray = [this];
        return newArray;
    }
    let row = 2;
    let direction = 1;
    newArray[0].push(this[0]);
    for (let i = 1; i < this.length; i++) {
        let r = row-1;
        newArray[r].push(this[i]);
        if (row === rowsCount && i !== this.length - 1 || row === 1 && i !== this.length - 1) {
            let l = row -1;
            i++;
            newArray[l].push(this[i]);
            direction = direction*-1;
        }
        row = row + direction;
    }
    return newArray;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let rowsCount = 5
let colsCount = 5

console.log(nums.snail(rowsCount, colsCount))