function canPlay() {
  let sport = ' Football';

  if (true) {
    personName = 'Cosimo';
    console.log(personName + sport);
  }
}

canPlay();

/*here personName is conditionally declared and that makes
    it conditionally in the execution context scope
    its only available inside the if(true) block
    we can either move the console.log line into that scope 
    or declare personName in the global scope of canPlay not in the if
  

    eg
    function canPlay() {
    let personName;
    let sport = ' Football';

    if (true) {
      personName = 'Cosimo';
    }

    console.log(personName + sport);
   */
