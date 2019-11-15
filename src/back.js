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
    let mercAgeFixed = mercAgeTest.toFixed(1)
    let mercAgeParse = parseInt(mercAgeFixed)
     this.mercAge = mercAgeParse
     return this.mercAge
  }
  venusCalc() {
    let venusAgeTest = (this.age * 1.62)
    let venAgeFixed = venusAgeTest.toFixed(1)
    let venAgeParse = parseInt(venAgeFixed)
    this.venAge = venAgeParse
    return this.venAge
  }
  marsCalc() {
    let marsAgeTest = (this.age * .53)
    let marsAgeFixed = marsAgeTest.toFixed(1)
    let marsAgeParse = parseInt(marsAgeFixed)
    this.marsAge = marsAgeParse
    return this.marsAge
  }
  jupCalc() {
    let jupAgeTest = (this.age * .084)
    let jupAgeFixed = jupAgeTest.toFixed(2)
    let jupAgeParse = parseInt(jupAgeFixed)
    this.jupAge = jupAgeParse
    return this.jupAge
  }
  livingOrDying() {
    return "hi"
  }
}
