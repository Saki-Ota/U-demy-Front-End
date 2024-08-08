function hello(name = 'Ota') {
    console.log('hello '+ name);
}

hello('Saki');
hello();

const hello2 = function(name = 'Ota') {
    console.log('hello '+ name);
}
hello2('Saki2')

const hello3 = (name = 'Ota') => console.log('hello '+ name);
hello3('Saki3');

const hello4 = (name, age) => {
    console.log('hello ' + name + age);
    console.log("hello " + name + age);
}
hello4('Saki4',  20);

const arry = [1,2,3,4,5]
arry.forEach(value => console.log(value)); 
