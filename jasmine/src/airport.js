class Airport {
  
  constructor(){
    this.grounded = []; 
    this.max_capacity = 1;
  }

  land(plane) {   
    this._airportFull()
    this.grounded.push(plane)
      return plane
  }

  confirmTakeoff(plane) {
    this.grounded.splice(plane)
  }

  _full() {
   return this.max_capacity <= this.grounded.length;
  }

  _airportFull() {
    if (this._full() === true ) {
     throw new Error("Landing is not possible")
    }
  }


}

  


