'use strict';

class Airport{

  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    }
    this._hangar.push(plane);
  };

  clearForTakeOff() {
    if(this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
    this._hangar = [];
  };
  
};







// class Airport {
  
//   constructor(){
//     this.grounded = []; 
//     this.max_capacity = 1;
//     // this.new_weather = new Weather;
//   }

//   land(plane) {
//     if (this.new_weather.wet_weather() === true) {
//       throw new Error("Landing is not possible due to weather conditions")
//     }
//     this._airportFull()
//     this.grounded.push(plane)
//       return plane
//   }

//   confirmTakeoff(plane) {
//     this.grounded.splice(plane)
//   }

//   _full() {
//    return this.max_capacity <= this.grounded.length;
//   }

//   _airportFull() {
//     if (this._full() === true ) {
//      throw new Error("Landing is not possible")
//     }
//   }
// }

// class Weather {

//   constructor(){
//     this.number = Math.floor(Math.random() * 5) + 1;
//   }

//   wet_weather() {
//     if (this.number === 1 ) {
//       return true
//       }
//     return false
//   }
// }


