import { Sgac } from './../src/back.js';

describe('Sgac', () => {

  test('should take in a number and return the age', () => {
    let sgac = new Sgac(5);
    expect(sgac.age).toEqual(5);
  });
  test('should take in an age and return age on mercury', () => {
    let sgac = new Sgac(10);
    expect(sgac.mercuryCalc()).toEqual(41.5);
  });
  test('should take in an age and return age on venus', () => {
    let sgac = new Sgac(10);
    expect(sgac.venusCalc()).toEqual(16.2)
  })
  test('should take in an age and reutrn age on mars', () => {
    let sgac = new Sgac(10);
    expect(sgac.marsCalc()).toEqual(5.3)
  })
  test('should take in an age and return age on jupiter', () => {
    let sgac = new Sgac(10);
    expect(sgac.jupCalc()).toEqual(.84)
  })
  test('should take in an age and return how long they have to live on earth', () => {
    let sgac = new Sgac(10);
    expect(sgac.livingOrDying()).toEqual("You have " + 69 + "years left to live")
  })
  test('should take in an age and return how long they have to live on earth', () => {
    let sgac = new Sgac(100);
    expect(sgac.livingOrDying()).toEqual("You should have died " + 21 + "years ago")
  })
  test('should take in an age and return how long they have to live on Mercury', () => {
    let sgac = new Sgac(10);
    expect(sgac.livingOrDyingMerc()).toEqual("You have " + 37.5 + "years to live")
  })
  test('should take in an age and return how long they have to live on Mercury', () => {
    let sgac = new Sgac(100);
    expect(sgac.livingOrDyingMerc()).toEqual("You should have died " + 336 + " years ago")
  })
  test('should take in an age and reutnr how long they have to live on mercury', () => {
    let sgac = new Sgac(10);
    expect(sgac.livingOrDyingVen()).toEqual("You have " + 63 + "years to live")
  })
});
