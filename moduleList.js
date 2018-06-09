var list = [] //private, not accessabl to outside

function storeNumber (number) {
    list.push(number);
}

// storeNumber((5))
// console.log(list);

function returnList() {
    return sortList(list);
}

//console.log(list)

function sortList(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
}

// console.log(sortList([5, 4, 10, 2, 1]))

module.exports = {
    storeNum: storeNumber,
    returnList: returnList
}