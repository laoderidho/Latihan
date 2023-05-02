class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  _getCar() {
    console.log(`your car name is ${this.name} and speed ${this.speed}`);
  }
}

class maintained extends Car{
     addBoost(){
      return  this.speed + 12;
    }
}



const setCar = new Car("Tesla", 180, "red");

const getMainted = new maintained()


console.log(getMainted.addBoost())