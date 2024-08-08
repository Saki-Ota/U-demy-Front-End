const arry = [1, 2, 3, 4, 5];

arry.forEach(function(val, i, arry){
    // val = arry values - first argument
    // i = arry postion - second argument
    // arry = the array itself - third argument
    console.log(val, i , arry)

})

arry.forEach((v) => console.log(v))
