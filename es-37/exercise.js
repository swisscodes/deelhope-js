function printName(params) {
  var helloName = 'Hello Obafemi';
  return function () {
    return helloName;
  };
}

//console.log(printName()()); //way 1

const theFunc = printName();
console.log(theFunc()); //way 2
