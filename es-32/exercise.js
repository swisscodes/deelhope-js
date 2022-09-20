function sayHelloName(clbFunc) {
  console.log('hello');
  setTimeout(clbFunc, 1000);
}

function printName() {
  console.log('Obafemi');
}

sayHelloName(printName);
