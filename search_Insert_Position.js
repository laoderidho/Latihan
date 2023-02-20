
const arr = [1,3,5,6]

const searchInsert = (nums, target) => {
    let temp;
    for(let i=0; i<nums.length; i++){
        if (nums[i] === target) {
          temp = i;
          break;
        } else if (nums[i] > target) {
          temp = i;
          break;
        } else if (nums[nums.length - 1] < target) {
          temp = nums.length;
          break;
        }
    }
   return temp;  
}       

console.log(searchInsert(arr, 7))