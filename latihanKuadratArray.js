const arr = [1, 2, 3, 4, 5, 6];


const myFunc = el =>{

    let temp = []
    for(let i=0; i<el.length; i++){
        if(el[i] % 2==0){
            temp.push(el[i]*el[i])
        }
    }
    return temp;
}

const myFunc2 = el =>{

    for(let i=0; i<el.length; i++){
        if(i==0){
            let temp = el[i]
        }
        else{
            if(el[i])
        }
    }
}

console.log(myFunc(arr))
console.log(myFunc2(arr))