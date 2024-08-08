const arry = [1,2,3,4,5];

arry.reduce(function(acc, curr){
    // curr = current array value - second argument
    // acc = accumulation previous loop's return value - first argument
    console.log(acc, curr);
    return acc + curr;
}, 10);

// if reduce method has the second argument like '10', 10 will be the init value.

const str = 'animation';
const strArry = str.split('');
console.log(strArry);

const result = strArry.reduce((accu, curr) => {
    console.log(accu);
    return `${accu}<${curr}>`;
}, '');

console.log(result);

