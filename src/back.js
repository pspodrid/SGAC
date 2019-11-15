export class Sgac {
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
     this.mercAge = mercAgeTest
     return this.mercAge
  }
  venusCalc() {
    let venusAgeTest = (this.age * 1.62)
    this.venAge = venusAgeTest
    return this.venAge
  }
  marsCalc() {
    let marsAgeTest = (this.age * .53)
    let marsAgeRounded = marsAgeTest
    this.marsAge = marsAgeRounded
    return this.marsAge
  }
  jupCalc() {
    let jupAgeTest = (this.age * .084)
    let jupAgeRounded =  jupAgeTest
    this.jupAge = jupAgeRounded
    return this.jupAge
  }
}
