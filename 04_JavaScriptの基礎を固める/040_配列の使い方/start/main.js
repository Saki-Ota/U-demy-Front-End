const arry = new Array (1, 2, 3, 4, 5, 6);

console.log(arry);
console.log(arry[3]);

arry[5] = 8; // you can change a value in array even though it was declared by const
console.log(arry[5]);

arry.push(7);
console.log(arry);

arry.unshift(0);
console.log(arry);

arry.pop();
console.log(arry);

arry.shift();
console.log(arry);


