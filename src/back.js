export class Calculator {
  constructor(age) {
    this.age = age;
    this.expected = 79;
    this.mercAge = 0;
    this.venAge = 0;
    this.marsAge = 0;
    this.jupAge = 0;
  }

  mercuryCalc() {
    let mercAgeTest = (this.age * 4.15)
    let mercAgeFixed = parseFloat((mercAgeTest).toFixed(1))
     this.mercAge = mercAgeFixed
     return this.mercAge
  }
  venusCalc() {
    let venusAgeTest = (this.age * 1.62)
    let venAgeFixed = parseFloat((venusAgeTest).toFixed(1))
    this.venAge = venAgeFixed
    return this.venAge
  }
  marsCalc() {
    let marsAgeTest = (this.age * .53)
    let marsAgeFixed = parseFloat((marsAgeTest).toFixed(1))
    this.marsAge = marsAgeFixed
    return this.marsAge
  }
  jupCalc() {
    let jupAgeTest = (this.age * .084)
    let jupAgeFixed = parseFloat((jupAgeTest).toFixed(2))
    this.jupAge = jupAgeFixed
    return this.jupAge
  }
  livingOrDying() {
    let timeLeftOnEarth = (this.expected - this.age)
    if (timeLeftOnEarth > 0) {
      return "You have " + timeLeftOnEarth + "years left to live"
    } else {
      return "You should have died " + (this.age - this.expected) + "years ago"
    }
  }
  livingOrDyingMerc() {
    this.mercuryCalc();
    let timeLeftOnMerc = (this.expected - this.mercAge)
    if (timeLeftOnMerc > 0) {
      return "You have " + timeLeftOnMerc + " years to live"
    } else {
      return "You should have died " + (this.mercAge - this.expected) + " years ago"
    }
  }
  livingOrDyingVen() {
    this.venusCalc()
    let timeLeftOnVen = (this.expected - this.venAge)
    if (timeLeftOnVen > 0) {
      return "You have " + timeLeftOnVen + " years to live"
    } else {
      return "You should have died " + (this.venAge - this.expected) + " years ago"
    }
  }
  livingOrDyingMars() {
    this.marsCalc()
    let timeLeftOnMars = (this.expected - this.marsAge)
    if (timeLeftOnMars > 0) {
      return "You have " + timeLeftOnMars + " years to live"
    } else {
      return "You should have died " + (this.marsAge - this.expected) + " years ago"
    }
  }
  livingOrDyingJup() {
    this.jupCalc()
    let timeLeftOnJup = (this.expected - this.jupAge)
    if (timeLeftOnJup > 0) {
      return "You have " + timeLeftOnJup + " years to live"
    } else {
      return "You should have died " + (this.jupAge - this.expected) + " years ago"
    }
  }
}
