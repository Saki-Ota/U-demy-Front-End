function hello(callBack, lastName) {
    console.log('hello ' + callBack(lastName));
}

function getName() {
    return 'Saki Ota';
}

function getFirstName(){
    return 'Saki';
}

hello(getName);
hello(getFirstName);

hello(function(){
    return 'Saki1'
})

// arrow function
hello(() => 'Saki1');


hello(function(name){
    return 'Saki ' + name; 
}, 'Ota');

function doSomthing(a, b, callback){
    const result = callback(a, b);
    console.log(result);
}


function multiply(a, b){
    return a * b;
}

function plus(a, b){
    return a + b;
}

doSomthing(2, 2, multiply);
doSomthing(2, 3, plus);

