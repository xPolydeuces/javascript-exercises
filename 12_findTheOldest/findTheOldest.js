const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let highestAge = 0;
    let oldestPerson;
    for (let i = 0; people.length > i; i++){
        if (people[i].hasOwnProperty('yearOfDeath')){
            personAge = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
        } else {
            personAge = currentYear - people[i]['yearOfBirth'];
        }
        if (personAge > highestAge){
            highestAge = personAge;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
