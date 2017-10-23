class Driver{
  constructor(name, start){
    this.name = name
    this.startDate = function(){
      let msec = Date.parse(start)
      let date = new Date(msec);
      return date
    }
    
  }
  


}
