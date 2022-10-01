const users = [
    { id: 1, username: "Apple", active: true, age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true, age: 65 },
    { id: 5, username: "Cat", active: true, age: 80 },
    { id: 6, username: "Ear", active: true, age: 95 },
];

const activeUsers = users.filter(user => user.active);

const sixtyOver = users.filter(user => user.age >= 60);

const ids = users.map(user => user.id);

const usernamesSixtyUnder = users.filter(user => user.age <= 60).map(user => user.username);

console.log(activeUsers);
console.log(sixtyOver);
console.log(ids);
console.log(usernamesSixtyUnder);