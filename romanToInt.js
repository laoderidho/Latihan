const params = 'MD'

const romanToInt =e=>{

    const map = new Map();
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)

    
    let temp =0;
    for(let i=0; i<e.length; i++){
         temp += map.get(e[i])
    }
    return temp
}

console.log(romanToInt(params))