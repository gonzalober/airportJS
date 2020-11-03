describe('Airport', function(){
  
  beforeEach(function() {
    airport = new Airport();
  });

  describe('grounded', function(){
    grounded = []
    it('checks that there is not plane at the aiport', function (){
      expect(grounded).toEqual([]);
    });
  });

  it('checks that the plane that is in the aiport', function (){
      plane = "plane1"
      expect(airport.land(plane)).toEqual('plane1');
  });

});