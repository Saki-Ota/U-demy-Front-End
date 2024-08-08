const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}

function reduce(arry, callBack, defaultValue){
    let accu = defaultValue;
    for(let i = 0; i < arry.length; i++){
        let curr = arry[i];
        accu = callBack(accu, curr);
    }

    return accu;
}
const result = reduce(strArry, tag, '');
// const result = strArry.reduce(tag, "");
console.log(result);
