'use strict';

class Weather {
  constructor() {
    this._CHANCE_OF_STORMY = 0.5;
  };
  isStormy() {
     return (Math.random() > this._CHANCE_OF_STORMY);
  };
};

// module.exports = Weather;

// require_relative 'airport_challenge'
// class Weather
//     WEATHER = rand(5)
//     def weather_status?
//       if @weather == 1
//         return true
//       end
//     return false
//     end
// end