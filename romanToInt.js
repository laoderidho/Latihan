const params = 'VI'

const romanToInt =e=>{
    const map = new Map([['I',1], ['V', 5], ['X', 10], ['L',50] ,['C',100], ['D' , 500], ['M', 1000]]);
    // map.set('I', 1)
    // map.set('V', 5)
    // map.set('X', 10)
    // map.set('L', 50)
    // map.set('C', 100)
    // map.set('D', 500)
    // map.set('M', 1000)
    
    let temp =0;
    for(let i=0; i<e.length; i++){
        if(map.get(e[i]) < map.get(e[i+1])){
           temp-= map.get(e[i])
        }else{
            temp+= map.get(e[i])
        }
    }
    return temp
}

console.log(romanToInt(params))