function FizzBuzz() {


}

FizzBuzz.prototype.print = function(number) {

  if ( this._divisibleByFifteen(number) ) {
    return 'FizzBuzz';
  } else if ( this._divisibleByThree(number) ) {
      return 'Fizz';
  } else if ( this._divisibleByFive(number) ) {
      return 'Buzz';
  } else {
      return number;
  };
};

FizzBuzz.prototype._divisibleByFifteen = function(number) {
  return number % 15 === 0
};

FizzBuzz.prototype._divisibleByFive = function(number) {
  return number % 5 === 0
};

FizzBuzz.prototype._divisibleByThree = function(number) {
    return number % 3 === 0
};

FizzBuzz.prototype.go = function () {
  return true;
};
