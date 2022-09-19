const name = 'Mario';
const lastname = 'Rossi';
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname;
console.log(`prediction name == lastname ${false}, result ${name == lastname}`);
age <= average;
console.log(`prediction age <= average ${true}, result ${age <= average}`);
firstYearCompleted == lastname;
console.log(
  `prediction firstYearCompleted == lastname ${false}, result ${
    firstYearCompleted == lastname
  }`
);
yearsCompleted == firstYearCompleted;
console.log(
  `prediction yearsCompleted == firstYearCompleted ${true}, result ${
    yearsCompleted == firstYearCompleted
  }`
);
firstYearCompleted === yearsCompleted;
console.log(
  `prediction firstYearCompleted === yearsCompleted ${false}, result ${
    firstYearCompleted === yearsCompleted
  }`
);
examsCompleted < age;
console.log(
  `prediction examsCompleted < age ${true}, result ${examsCompleted < age}`
);
isGraduated > yearsCompleted;
console.log(
  `prediction isGraduated > yearsCompleted ${false}, result ${
    isGraduated > yearsCompleted
  }`
);
