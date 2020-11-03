class Airport {
  
  constructor(){
    this.grounded = [];
  }

  land(plane) {
    // let planes = plane
    this.grounded.push(plane)
      return plane
  }

  confirmTakeoff(plane) {
    this.grounded.splice(plane)
  }


}

  


