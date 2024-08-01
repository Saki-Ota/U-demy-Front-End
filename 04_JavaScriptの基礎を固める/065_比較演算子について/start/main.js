if(1 === '1'){
    console.log('this is true');
}else if(1 == '1'){
    console.log('this is else if');
}else{
    console.log('this is false');
}

const num = Number(true);
const num2 = Number(false);
console.log(num, num2);

if(0 =='0' && 0 === '0'){
    console.log('this is true');
}else if (0 == '0' || 0 === '0'){
    console.log('this is else if');
}else{
    console.log('this is false');
}

const num3 = 0; // 0 = false
if(num3){
    console.log('this is true');
}else{
    console.log('this is false');
}

