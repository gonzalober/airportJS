describe('Airport', function(){
  
  beforeEach(function() {
    airport = new Airport();
    max_capacity = 1;
  });

  describe('grounded', function(){
    
    var grounded = []

    it('checks that there is not plane at the aiport', function (){
      expect(grounded).toEqual([]);
    }); 
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

  it('checks that the plane that is in the aiport', function (){
    plane = "plane1"
    expect(airport.land(plane)).toContain('plane1');
  });

  it('does not allow a plane to land due to the aiport is full', function(){
    plane = 'plane1'
    airport.land(plane)
    plane2 = 'plane2'
    expect(function() {airport.land(plane2)}).toThrow(new Error("Landing is not possible"));
  });

});