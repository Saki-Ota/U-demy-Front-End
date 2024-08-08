const obj = {
    first_name: 'Saki',
    last_name: 'Ota',
    printFullName: function() {
        console.log('Hello');
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Saki';
        this.last_name = "Ota";
    }
    printFullName() {
        console.log('hello')
    }
}


const obj2 = new MyObj();
obj2.printFullName();
console.log(obj2);
