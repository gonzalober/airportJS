class Airport {
  
  constructor(){
    this.grounded = []; 
    this.max_capacity = 1;
  }

  land(plane) {   
    if (this.max_capacity <= this.grounded.length) {
      throw new Error("Landing is not possible")
    }
    this.grounded.push(plane)
      return plane
  }

  confirmTakeoff(plane) {
    this.grounded.splice(plane)
  }

}

  


