const arry1 = [1, 2, 3, 4, 5];

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
    callback(array[i]);
}
}

function log(val){
    console.log(val);
}

function double(val){
    val = val * 2;
    return log(val);
}

forEach(arry1, log);
forEach(arry1, double);
