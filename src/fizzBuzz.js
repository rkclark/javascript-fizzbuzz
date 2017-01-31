function FizzBuzz() {


}

FizzBuzz.prototype.print = function(number) {

  // if ( number % 15 === 0) {
  //   return 'FizzBuzz';
  // } else {
  //   if ( number % 3 === 0 ) {
  //     return 'Fizz';
  //   } else {
  //     if ( number % 5 === 0 ) {
  //         return 'Buzz';
  //     } else {
  //       return number;
  //     };
  //   }
  // };

  if ( this._divisibleByFifteen(number) ) {
    return 'FizzBuzz';
  } else if ( number % 3 === 0 ) {
      return 'Fizz';
    } else if ( number % 5 === 0 ) {
          return 'Buzz';
      } else {
        return number;
      };
};

FizzBuzz.prototype._divisibleByFifteen = function(number) {
  return number % 15 === 0
};
