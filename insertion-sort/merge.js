// leftArr and rightArr are sorted
const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr(leftIndex);
        const rightEl = rightArr(rightIndex);

        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};

console.log(merge([34, 56, 6, 9]))
// recursive
// const mergeSort = array => {
//     if (array.length <= 1) {
//         return array;
//     }


//     const middleIndex = Math.floor(array.length / 2);
//     const leftArr = array.slice(0, middleIndex);
//     const rightArr = array.slice(middleIndex, array.length)
//     return merge;
//     mergeSort(leftArr),
//         mergeSort(rightArr)
// }


// mergeSort([9, 110, 8734, 92, 456, 899, 4356, 2])




//[9, 110, 8734, 92, 456]

//[9, 110, 8734] [92,456]

//[9, 110] [8734] [92] [456]

// [9] [110] [8734] [92] [456]

// [9, 110] [8734] [92] [456]

// [9, 110] [92, 8734] [456]

//[9, 92, 110, 8734] [456]

// [9, 92, 110, 456, 8734]