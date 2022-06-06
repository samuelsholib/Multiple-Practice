// let arrayValue = [7, 25, 1, 8, 4, 123, 231, 87, 98, 167, 134, 6894, 896]
//  let length = 13;

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // [array[j], array[j+1] = array[j+1], array[j]];
                const flip = array[j];
                array[j] = array[j + 1];
                array[j + 1] = flip;
            }
        }
    }
    console.log(bubbleSort([7, 25, 1, 8, 4, 123, 231, 87, 98, 167, 134, 6894, 896]))
    return array;
}
bubbleSort(array);
// console.log(bubbleSort([7, 25, 1, 8, 4, 123, 231, 87, 98, 167, 134, 6894, 896]))