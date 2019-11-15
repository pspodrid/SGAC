import { Sgac } from './../src/back.js';

describe('Sgac', () => {



  test('should take in a number and return the age', () => {
    let sgac = new Sgac(5, 10);
    expect(sgac.age).toEqual(5);
    expect(sgac.expected).toEqual(10);
  });
  test('should take in an age and return age on mercury', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.mercuryCalc()).toEqual(2.4);
  });
  test('should take in an age and return age on venus', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.venusCalc()).toEqual(6.2)
  })
  test('should take in an age and reutrn age on mars', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.marsCalc()).toEqual("18.8")
  })
  test('should take in an age and return age on jupiter', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.jupCalc()).toEqual("118.6")
  })
  test('should take in an expected age and return expected age on mercury', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.mercuryExCalc()).toEqual(24)
  })
  test('should take in an expected age and return expected age on venus', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.venusExCalc()).toEqual(62)
  })
  test('should take in an expected age and return expected age on mars', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.marsExCalc()).toEqual(188)
  })
  test('should take in an expected age and return expected age on jupiter', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.jupExCalc()).toEqual(1186)
  })
});
