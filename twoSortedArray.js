

let arr = [1,2,4]

let arr2 = [1,3,4]
const sort = (list1, list2)=>{
    let arr = []
    arr.push(list1)
    arr.push(list2)
   let n = arr.length; 
   for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(arr, arr2))