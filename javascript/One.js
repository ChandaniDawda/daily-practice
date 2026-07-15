// Day 1: Array methods practice

const users = [
  { name: "Amit", age: 25, city: "Pune" },
  { name: "Priya", age: 17, city: "Mumbai" },
  { name: "Rahul", age: 30, city: "Pune" }
];

// 1. map: 
const names = users.map(user => user.name);
console.log(names);

// 2. filter:  adults (age >= 18)
const adults = users.filter(user => user.age >= 18);
console.log(adults);

// 3. reduce: 
const groupedByCity = users.reduce((acc, user) => {
  acc[user.city] = acc[user.city] || [];
  acc[user.city].push(user.name);
  return acc;
}, {});
console.log(groupedByCity);