function FizzBuzz() {


}

FizzBuzz.prototype.print = function(number) {

  if ( number % 3 === 0 ) {
    return 'Fizz';
  }
  return number;

};
