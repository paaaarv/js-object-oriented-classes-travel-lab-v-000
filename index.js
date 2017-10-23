class Driver{
  constructor(name, start){
    this.name = name
    let msec = Date.parse(start)
    this.startDate = new Date(msec)

  }
  yearsExperienceFromBeginningOf(end){
    return (end - (this.startDate.getFullYear()+1))
  }

}

class Route{
  
}
