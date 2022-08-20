// sorting array using quick sort method
const numsArray = [34, 56, 621, 23, 12, 21, 777, 33, 555, 56, 765, 87, 102, 111, 99, 68, 74]

function quickSort(array) {
    if (array.length == 1) {
        return array;
    }
    const lastElem = array[array.length -1];
    const leftArray = [];
    const rightArray = [];
    for (i = 0; i < array.length -1; i++) {
        if(array[i] < lastElem) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), lastElem, ...quickSort(rightArray)];
    } else if (leftArray.length > 0) {
        return [...quickSort(leftArray), lastElem];
    } else {
        return [lastElem, ...quickSort(rightArray)];
    }
    
}
console.log(quickSort(numsArray));
