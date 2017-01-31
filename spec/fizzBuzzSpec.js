describe("FizzBuzz", function() {

   var fb;


  beforeEach(function() {
    fb = new FizzBuzz();
  });

  describe("#print", function() {

    it("Responds to #print", function() {
      // var fb = new FizzBuzz();
      expect(fb.print).toBeDefined();
    });

    it("Returns a number when not divisible by 3 or 5", function() {
      // var fb = new FizzBuzz();
      expect(fb.print(4)).toEqual(4);
      expect(fb.print(2)).toEqual(2);
    });

    it("Returns fizz when divisible by 3", function(){
      // var fb = new FizzBuzz();
      expect(fb.print(3)).toEqual("Fizz");
      expect(fb.print(6)).toEqual("Fizz");

    });

    it("Returns buzz when divisible by 5", function() {
      // var fb = new FizzBuzz();
      expect(fb.print(5)).toEqual("Buzz");
      expect(fb.print(10)).toEqual("Buzz");

    });

  });


});
