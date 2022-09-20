let user = {
  name: 'Cosimo',
  age: 30,
};

let newUser = structuredClone(user);

newUser.name = 'Paolo';

console.log(newUser);
console.log(user);
