function sayHelloName(clbFunc) {
  console.log('hello');
  clbFunc();
}

function printName() {
  console.log('Obafemi');
}

sayHelloName(printName);
