function FizzBuzz() {


}

FizzBuzz.prototype.print = function(number) {

  if ( number % 3 === 0 ) {
    return 'Fizz';
  }

  if ( number === 5 ) {
      return 'Buzz';
  };

  return number;

};
