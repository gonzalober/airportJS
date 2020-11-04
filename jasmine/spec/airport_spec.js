'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('this block checks landind and take off under normal conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    // it('checks that a plane has left the airport', function (){
      //       plane = 'plane1'
      //       airport.land(plane)
      //       expect(airport.grounded).toContain('plane1')
      //       airport.confirmTakeoff(plane)
      //       expect(airport.grounded).not.toContain('plane1')
      //     });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    
    it('can clear planes for takeoff', function(){
      
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions',function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});



// describe('Airport', function(){
  
//   "use strict";
//   var airport;
//   var max_capacity = 1;

//   beforeEach(function() {
//     airport = new Airport();
//     max_capacity = 1;
//     // this.new_weather.wet_weather() === false;
//   });

//   describe('grounded', function(){
    
//     var grounded = []

//     it('checks that there is not plane at the aiport', function (){
//       expect(grounded).toEqual([]);
//     }); 
//   });

//   describe('#confirmTakeoff', function(){

//     var grounded = []

//     it('checks that a plane has left the airport', function (){
//       plane = 'plane1'
//       airport.land(plane)
//       expect(airport.grounded).toContain('plane1')
//       airport.confirmTakeoff(plane)
//       expect(airport.grounded).not.toContain('plane1')
//     });
//   });

//   it('checks that the plane that is in the aiport', function (){
//     plane = "plane1"
//     expect(airport.land(plane)).toContain('plane1');
//   });

//   it('does not allow a plane to land due to the aiport is full', function(){
//     plane = 'plane1'
//     airport.land(plane)
//     plane2 = 'plane2'
//     expect(function() {airport.land(plane2)}).toThrow(new Error("Landing is not possible"));
//   });

//   it('does not allow a plane to land due to weather conditions', function(){
//     spyOn(Math, 'random').and.returnValue(1);
//     plane = 'plane1'
//     expect(function() {airport.land(plane)}).toThrowError("Landing is not possible due to weather conditions");
//     expect(airport.grounded).toEqual([]);

//   });
// });

// it("should call parent fetch with default options", function() {
//   spyOn(Math, 'random').and.returnValue(0.1);
//   this.collection.fetch();
//   expect(this.fetchSpy).toHaveBeenCalledWith({
//     data: {
//       id: 1,
//       random: Math.floor(Math.random()*10000)
//     }
//   }); 
// });