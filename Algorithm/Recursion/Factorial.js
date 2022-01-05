// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if(number <= 1){
        return number;
    }
    return number*findFactorialRecursive(number-1);
  }
  
  function findFactorialIterative(number) {
    if(number <= 1){
        return number;
    }
    let answer = 1;
    for(let i = 1; i <= number; i++){
        answer *= i;
    }
    return answer;
  }

  console.log(findFactorialRecursive(0))
  console.log(findFactorialIterative(0))