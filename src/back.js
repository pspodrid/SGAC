export class Sgac {
  constructor(age, expected) {
    this.age = age;
    this.expected = expected;
    this.mercAge = 0;
    this.mercAgeEx = 0;
    this.venAge = 0;
    this.venAgeEx = 0;
    this.marsAge = 0;
    this.marsAgeEx = 0;
    this.jupAge = 0;
    this.jupAgeEx = 0;
  }

  mercuryCalc() {
    let mercAgeTest = (this.age * .24)
     this.mercAge = mercAgeTest
     return this.mercAge
  }
  venusCalc() {
    let venusAgeTest = (this.age * .62)
    this.venAge = venusAgeTest
    return this.venAge
  }
  marsCalc() {
    let marsAgeTest = (this.age * 1.88)
    let marsAgeRounded = (marsAgeTest.toFixed(1))
    this.marsAge = marsAgeRounded
    return this.marsAge
  }
  jupCalc() {
    let jupAgeTest = (this.age * 11.86)
    let jupAgeRounded =  (jupAgeTest.toFixed(1))
    this.jupAge = jupAgeRounded
    return this.jupAge
  }
  mercuryExCalc() {
    let mercExAgeTest = this.expected * .24)
    this.mercAgeEx = mercExAgeTest
    return this.MercAgeEx
  }
}
