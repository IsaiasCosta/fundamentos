const array = []


for(let num=0;num <10;num ++){
    array.push(function(){
        console.log(num)
    })
}
array[2]()// uma função é um conch
array[8]()