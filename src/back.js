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
    let mercAgeTest = parseFloat(this.age * 4.15)
    let mercAgeParse = parseFloat(mercAgeTest)
     this.mercAge = mercAgeParse
     return this.mercAge
  }
  venusCalc() {
    let venusAgeTest = parseFloat(this.age * 1.62)
    let venAgeParse = parseFloat(venusAgeTest)
    this.venAge = venAgeParse
    return this.venAge
  }
  marsCalc() {
    let marsAgeTest = parseFloat(this.age * .53)
    let marsAgeParse = parseFloat(marsAgeTest)
    this.marsAge = marsAgeParse
    return this.marsAge
  }
  jupCalc() {
    let jupAgeTest = parseFloat(this.age * .084)
    let jupAgeParse =  parseFloat(jupAgeTest)
    this.jupAge = jupAgeParse
    return this.jupAge
  }
}
