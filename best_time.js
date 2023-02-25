const arr = [2, 1, 2, 0, 1];

const maxprofit = (prices)=>{
    let temp = 0;
    let temp2 = 0;
    let sum;

    for(let i=0; i<prices.length; i++){
        if(prices[i]<prices[i+1]){
            temp+= prices[i];
            for(j=prices.length -1 ;j>=0; j--){
                if(prices[j]>prices[j-1]){
                    temp2+=prices[j]
                    sum = temp2 - temp;
                    break;
                }
            }
            break;
        }
    }

    if(sum === undefined){
        return 0;
    }
    return sum;
}

console.log(maxprofit(arr))

// const arr = [2, 1, 2, 0, 1];

// const maxprofit = (prices) => {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// };

// console.log(maxprofit(arr));

