//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = Array.apply(null, {length : 10}).map(() => Math.floor(Math.random() * 200));
function bubbleSort(array) {
    //Edge Case
    if(array.length <= 1) return array;
    let n = array.length;
    while(n > 0){
        // After each pass, the items at the end of the list are already sorted 
        for(let i = 0; i < n - 1; i++){
            //If item is larger  than its following item, swap
            if(array[i] > array[i+1]) [array[i], array[i+1]] = [array[i+1], array[i]];
        }
        n--;
    }
    return array;
}
console.log("Before: ", numbers);
bubbleSort(numbers);
console.log("After: ", numbers);