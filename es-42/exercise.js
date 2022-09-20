let user = {
  name: 'Cosimo',
  age: 30,
};

newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}
newUser.name = 'Paolo';

console.log(newUser);
console.log(user);
