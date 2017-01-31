describe("FizzBuzz", function() {

  // var FizzBuzz;
  // var fb = new FizzBuzz();
  // console.log(fb);
  //
  // beforeEach(function() {
  //   FizzBuzz = new FizzBuzz();
  //   console.log(FizzBuzz);
  // });

  describe("#print", function() {

    it("Responds to #print", function() {
      var fb = new FizzBuzz();
      expect(fb.print).toBeDefined();
    });

    it("Returns a number when not divisible by 3 or 5", function() {
      var fb = new FizzBuzz();
      expect(fb.print(4)).toEqual(4);
      expect(fb.print(2)).toEqual(2);
    });

    it("Returns fizz when divisible by 3", function(){
      var fb = new FizzBuzz();
      expect(fb.print(3)).toEqual("Fizz");

    });

  });


});
