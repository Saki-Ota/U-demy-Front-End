const person = {
    name: ['Saki', 'Ota'],
    age: 20,
    gender: 'female',
    hobbies: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1]);
    }
};

console.log(person.name[0]);
console.log(person.hobbies.music);

person.age = 12; // or
person['age'] = 12;

person.getFullName();
