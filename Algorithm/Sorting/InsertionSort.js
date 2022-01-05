//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = Array.apply(null, {length : 10}).map(() => Math.floor(Math.random() * 200 + 1));
function insertionSort(array) {
    //Edge Case
    if(array.length <= 1) return array;
    let end = 0; // Mark end of the sorted sublist
    while(end < array.length){
        if(array[end + 1] < array[end]) {
            let i = end - 1; // Mark potential insertion position
            //Find the insertion position
            while(i >= 0){
                if(insertionItem > array[i]) break;
                i--;
            }
            //Move all items after the position position up 1 position
            array.splice(i+1, 0, array.splice(end+1,1)[0]);
        }
        end++;
    }
}
console.log("Before: ", numbers);
insertionSort(numbers);
console.log("After: ", numbers);