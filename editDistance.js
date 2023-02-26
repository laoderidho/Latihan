const word1 = "intention";
const word2 = "execution";

const distance = (word1, word2)=>{

   
   let output = [];
   let temp = ''
    for(let i =0; i<word1.length; i++){
          if (word2[i] === undefined || word2[i] === null) {
            output.push(word2[i]);
          } else if (word2[i] === word1[i + 1]) {
            temp += word1[i + 1];
          } else if (word1[i] !== word2[i]) {
            output.push(word2[i]);
            temp += word2[i];
          } else if (word1[i] === word2[i]) {
            temp += word1[i];
          }
    }

   return output.length;
}


console.log(distance(word1, word2))



