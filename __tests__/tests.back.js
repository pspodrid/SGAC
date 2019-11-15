import { Sgac } from './../src/back.js';

describe('Sgac', () => {



  test('should take in a number and return the number', () => {
    let sgac = new Sgac(5, 10);
    expect(sgac.age).toEqual(5);
    expect(sgac.expected).toEqual(10);
  });
  test('should take in a number and return age on mercury', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.mercuryCalc()).toEqual(2.4);
  });
  test('should take in a number and return age on venus', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.venusCalc()).toEqual(6.2)
  })
  test('should take in a number and reutrn age on mars', () => {
    let sgac = new Sgac(10,100);
    expect(sgac.marsCalc()).toEqual("hi")
  })
});