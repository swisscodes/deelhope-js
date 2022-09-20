var primitive = true;

switch (primitive) {
  case typeof primitive == 'boolean':
    console.log(typeof primitive, primitive);
    break;
  case typeof primitive == 'string':
    console.log(typeof primitive, primitive);
    break;
  case typeof primitive == 'number':
    console.log(typeof primitive, primitive);
    break;
  default:
    break;
}
