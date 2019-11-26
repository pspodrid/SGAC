import { Calculator } from './../src/back.js';

describe('Calculator', () => {

  test('should take in a number and return the age', () => {
    let newCalculator = new Calculator(5);
    expect(newCalculator.age).toEqual(5);
  });
  test('should take in an age and return age on mercury', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.mercuryCalc()).toEqual(41.5);
  });
  test('should take in an age and return age on venus', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.venusCalc()).toEqual(16.2)
  })
  test('should take in an age and reutrn age on mars', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.marsCalc()).toEqual(5.3)
  })
  test('should take in an age and return age on jupiter', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.jupCalc()).toEqual(.84)
  })
  test('should take in an age and return how long they have to live on earth', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.livingOrDying()).toEqual("You have " + 69 + "years left to live")
  })
  test('should take in an age and return how long they have to live on earth', () => {
    let newCalculator = new Calculator(100);
    expect(newCalculator.livingOrDying()).toEqual("You should have died " + 21 + "years ago")
  })
  test('should take in an age and return how long they have to live on Mercury', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.livingOrDyingMerc()).toEqual("You have " + 37.5 + " years to live")
  })
  test('should take in an age and return how long they have to live on Mercury', () => {
    let newCalculator = new Calculator(100);
    expect(newCalculator.livingOrDyingMerc()).toEqual("You should have died " + 336 + " years ago")
  })
  test('should take in an age and return how long they have to live on Venus', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.livingOrDyingVen()).toEqual("You have " + 62.8 + " years to live")
  })
  test('should take in an age and return how long they have to live on Venus', () => {
    let newCalculator = new Calculator(200);
    expect(newCalculator.livingOrDyingVen()).toEqual("You should have died " + 245 + " years ago")
  })
  test('should take in an age and return how long they have to live on Mars', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.livingOrDyingMars()).toEqual("You have " + 73.7 + " years to live")
  })
  test('should take in an age and return how long they have to live on Mars', () => {
    let newCalculator = new Calculator(200);
    expect(newCalculator.livingOrDyingMars()).toEqual("You should have died " + 27 + " years ago")
  })
  test('should take in an age and return how long they have to live on Jupiter', () => {
    let newCalculator = new Calculator(10);
    expect(newCalculator.livingOrDyingJup()).toEqual("You have " + 78.16 + " years to live")
  })
});
