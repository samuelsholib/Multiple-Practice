// quickSort
function quickSort(array) {
    if (array.length == 1) {
        return array;
    }
    const lastNum = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < lastNum){
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i]);
        }
    }
    if(leftArray.length > 0 && rightArray.length > 0) {
        return [...quickSort(leftArray), lastNum, ...quickSort(rightArray)];

    } else if(leftArray.length > 0) {
        return [...quickSort(leftArray), lastNum];

    } else {
        return [lastNum, quickSort(rightArray)];
    }
}
// array used for testing purposed
const numsArray = [34, 56, 621, 23, 12, 21, 777, 33, 555, 56, 765, 87, 102, 111, 99, 68, 74]


//For neater code 

// function neaterQuickSort(array) {
//     const rightArray = [];
//     const leftArray = [];
//     const pivot = array[array.length -1];

//     for (const element of array.slice(0, array.length -1)) {
//         element < pivot ? leftArray.push(element) : rightArray.push(element);
//     }

//     if(leftArray.length > 0 && rightArray.length > 0) {
//                 return [...neaterQuickSort(leftArray), pivot, ...neaterQuickSort(rightArray)];
        
//            } else if(leftArray.length > 0) {
//                return [...neaterQuickSort(leftArray), pivot];
        
//             } else {
//                return [pivot, neaterQuickSort(rightArray)];
//            }
// }
// console.log(neaterQuickSort(numsArray));