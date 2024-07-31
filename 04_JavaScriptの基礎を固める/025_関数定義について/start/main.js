
// anonymous function
const hello = function(name, age) {
    console.log('Hello ' + name + age);
    return name + age
}



// or 
function hello1(name, age) {
    console.log('Hello ' + name + age);
    return name + age;
}

// let name = 'Saki';
// console.log('hello ' + name);

hello('Saki', 20);

const returnValue = hello('Saki', 20);
console.log(returnValue);

