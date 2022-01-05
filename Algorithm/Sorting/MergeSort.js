//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = Array.apply(null, {length : 10}).map(() => Math.floor(Math.random() * 200 + 1));

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length/2);
  return merge(
    mergeSort(array.slice(0, mid)),
    mergeSort(array.slice(mid))
  )
}

function merge(left, right){
    let leftIdx = 0;
    let rightIdx = 0;
    let result = [];
    while(leftIdx < left.length && rightIdx < right.length ){
        if(left[leftIdx] < right[rightIdx]) result.push(left[leftIdx++]);
        if(left[leftIdx] > right[rightIdx]) result.push(right[rightIdx++]);
    };
    while(leftIdx < left.length) result.push(left[leftIdx++]);
    while(rightIdx < right.length) result.push(right[rightIdx++]);
    return result
}

console.log("before --- ", numbers);
const answer = mergeSort(numbers);
console.log("after --- ", answer);