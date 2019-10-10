//1. Understanding merge sort
//Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

//What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//21, 1. It will call first on the left half of the array, then the left half of that, and then the left half of that.

//What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//16, 49, 39, 27, 43, 34, 46, 40. Sorting the left half of the initial array involves 15 recursive calls.
//Starting to sort on the right half is the 16th call.

//What are the first 2 lists to be merged?
//21 and 1 will merge first, followed by 26 and 45.

//Which two lists would be merged on the 7th merge?
//The 7th merge would be 21, 1, 26, 45 and 45, 29, 28, 2


//2. Understanding quicksort
//After one partition: 3 9 1 14 17 24 22 20.

//The pivot could have been 17, but could not have been 14 FALSE
// The pivot could have been either 14 or 17 TRUE
// Neither 14 nor 17 could have been the pivot FALSE
// The pivot could have been 14, but could not have been 17 FALSE
//The pivot could have been either of those two, since for both only higher #s are right and lower #s left.

// Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12

// When using the last item on the list as a pivot
// 10, 3, 9, 12, 14, 17, 13, 15, 19, 16

// When using the first item on the list as a pivot
// 13, 10, 3, 9, 12, 14, 17, 15, 19, 16


//3. Implementing quicksort
const qSort = (arr, start=0, end=arr.length) => {
  if (start >= end) return arr;
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle+1, end);
  return arr;
}

const partition = (arr, start, end) => {
  const pivot = arr[end-1];
  let j = start;
  for (let i=start; i<end-1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j++)
    }
  }
  swap(arr, end-1, j)
  return j;
}

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const sortData = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

// console.log(qSort(sortData))

//4. Implementing merge sort

const mSort = (arr) => {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length/2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)
  left = mSort(left)
  right = mSort(right)
  return merge(left, right, arr)
}

const merge = (left, right, arr) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    } else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;
}

console.log(mSort(sortData))