const arry = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arry.length; i++) {
    console.log(i);
}

for (let i in arry) {
    console.log(i, arry[i]); // i = array number(integer)
}

for (let v of arry) {
    console.log(v); // v = arry value
}


