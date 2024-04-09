const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        let age;
        if(!('yearOfDeath' in person)){
            age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if(age > oldestPerson.age) {
            oldestPerson.name = person.name;
            oldestPerson.age = age;
        }
        return oldestPerson;
    },{name: 'lol',age: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
