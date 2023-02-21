let input = '{}()';

const IsValid = (s)=>{
    let temp= []
    let temp1 = ''
    for(let i=0; i<s.length; i++){
        for(let j=0; j<s.length; j++){
            if(s[i] === s[j]){
                temp.push(s[i],s[j])
            }
        }
    }

    return temp
}

console.log(IsValid(input))