function FizzBuzz() {


}

FizzBuzz.prototype.print = function(number) {

  if ( this._divisibleBy(number, 15) ) {
    return 'FizzBuzz';
  } else if ( this._divisibleBy(number, 3) ) {
      return 'Fizz';
  } else if ( this._divisibleBy(number, 5) ) {
      return 'Buzz';
  } else {
      return number;
  };
};

FizzBuzz.prototype._divisibleBy = function(number, divisor) {
  return number % divisor === 0
};

FizzBuzz.prototype.go = function () {
  for ( var i = 1; i <= 100; i += 1 ) {
    console.log(this.print(i));
  };
};
