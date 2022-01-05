//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = Array.apply(null, {length : 10}).map(() => Math.floor(Math.random() * 200 - 100));
function selectionSort(array) {
    //Edge Case
    if(array.length <= 1) return array;
    let startIdx = 0; // Increment after each pass
    while(startIdx < array.length - 1){
        let smallestIndex = startIdx; // Store the index of the smallest item in each pass
        for(let i = startIdx + 1; i < array.length; i++){
            // If item at i is smaller than smallest item, assign smallestIndex to i
            if(array[i] < array[smallestIndex]) smallestIndex = i;
        }
        // If smallestIndex is different from startIndx, swap items
        if(smallestIndex !== startIdx) 
            [array[startIdx], array[smallestIndex]] = [array[smallestIndex], array[startIdx]];
        startIdx++;
    }
}
console.log("Before: ", numbers);
selectionSort(numbers);
console.log("After: ", numbers);