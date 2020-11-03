describe('Airport', function(){
  
  beforeEach(function() {
    airport = new Airport();
  });

  describe('grounded', function(){
    
    var grounded = []

    it('checks that there is not plane at the aiport', function (){
      expect(grounded).toEqual([]);
    });
  });

  it('checks that the plane that is in the aiport', function (){
      plane = "plane1"
      expect(airport.land(plane)).toContain('plane1');
  });

  describe('#confirmTakeoff', function(){

    var grounded = []

    it('checks that a plane has left the airport', function (){
      plane = 'plane1'
      airport.land(plane)
      expect(airport.grounded).toContain('plane1')
      airport.confirmTakeoff(plane)
      expect(airport.grounded).not.toContain('plane1')
    });

  });

});