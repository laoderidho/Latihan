const arr = [1,2,3,4,5];

const rotate = (arr, target)=>{
    const sliceArray = arr.splice(0, target)
    const array = arr;
    let sumArray = []
    sumArray.push(...array)
    sumArray.push(...sliceArray)
    return sumArray
}

console.log(rotate(arr, 1))