function sortBinary(arr) { //my first solution to the problem
  let j=0
  for (let i=0; i< arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[j] === 1) {
        arr[j]= 0
        arr[i] = 1
      }
      j++
    }
  }
  return arr
}

function sortBinary2(arr) { //my solution implementing alternative logic
  let left=0;
  let right=arr.length-1;
  while (right > left) {
    if (arr[right] === 0) {
      if (arr[left] === 0) {
        left++
      } else { 
        arr[right--] = 1
        arr[left++] = 0
      }
    } else {
      if (arr[left] === 0) {
        left++
        right--
      } else {
        right--
      }
    }
  }
  return arr
}
console.log(sortBinary([0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]))
console.log(sortBinary2([0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]))