const array = []


for(var num=0;num <10;num ++){
    array.push(function(){
        console.log(num)
    })
}
array[2]()
array[8]()