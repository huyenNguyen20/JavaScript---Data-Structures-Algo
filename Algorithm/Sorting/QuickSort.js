// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = Array.apply(null, {length : 5}).map(() => Math.floor(Math.random() * 200 - 100));
function quickSort(array, left, right){
    if(left < right){
        // Step 1. Rearrange the items surrounding the pivots
        const pivot = array[left];
        //Items larger than pivot will be on the right of the pivot
        //Items smaller than pivot will be on the left of the pivot
        let pivotIdx = left;
        for(let i = left + 1; i <= right; i++){
            // If the item at i is smaller than pivot and i >  pivotIdx + 1, 
            // insert it to the place next to the pivot
            if(array[i] < pivot) {
                if(i > pivotIdx + 1){ // It means that the item is not next to the pivot index
                    let item = array[i];
                    array.splice(i,1);
                    array.splice(pivotIdx+1, 0, item); // Therefore, must insert the item right after the pivot index
                } 
                pivotIdx++;
            }
        }
        // Step 2. Insert the pivot into its right place;
        if(pivotIdx !== left) {
            array.splice(left, 1);
            array.splice(pivotIdx, 0, pivot);
        }
        // Step 3. Quick sort the 2 halves recursively
        quickSort(array, left, pivotIdx - 1);
        quickSort(array, pivotIdx + 1, right);
    }
}


//Select first and last index as 2nd and 3rd parameters
console.log("original array ---", numbers);
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
