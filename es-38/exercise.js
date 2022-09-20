function printName(params) {
  var helloName = 'Hello Obafemi';
  return function () {
    return helloName;
  };
}

const theFunc = printName();

setTimeout(() => {
  console.log(theFunc());
}, 1000);
