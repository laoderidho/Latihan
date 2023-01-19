const hello = 'Hello World'

const hello2 = hello.split('').reverse().join('')

let temp = ''

for(let i=0; i<hello2.length; i++){

   if(hello2[i+1] == ' '){
        temp+= hello2[i] 
    }
    else if(hello2[i]== (' ')){
        temp+= hello2[i]
    }
    else if(hello2[i+1] != null){
        temp+= hello2[i] + '_'
    }
    else{
        temp+= hello2[i]
   }
   
    
}

console.log(temp)