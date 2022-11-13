const { Calculator } = require('./calculator');

const calc = new Calculator();
const resAdd = calc.add(1, 2, 3);
const resMult = calc.multiply(4, 2, 3);

describe(`Calculator's verification`, function () {
  beforeAll(() => {
    console.log(`Running before all tests`);
  });

  afterAll(() => {
    console.log(`Running after all tests`);
  });

  it('result of the function Add should be Number(case1)', () => {
    expect(typeof resAdd).toEqual('number');
  });

  it('function should return the result with Add(case2)', () => {
    expect(calc.add(-1, 1)).toEqual(0);
  });

  it('function should return the result with Add(case3)', () => {
    expect(resAdd).toBeLessThan(7);
  });

  it('function should return the result with Add(case4)', () => {
    expect(calc.add(0.3, 0.2)).toBeCloseTo(0.5);
  });

  it('result of the function Multiplication should be Number(case1)', () => {
    expect(typeof resMult).toEqual('number');
  });

  it('function should return the result with Multiplication(case2)', () => {
    expect(resMult).toBeLessThan(25);
  });

  it('function should return the result with Multiplication(case3)', () => {
    expect(calc.multiply(-2, 5)).toBeCloseTo(-10);
  });

  it('function should return the result with Multiplication(case4)', () => {
    expect(calc.multiply(18, 0)).toEqual(Infinity);
  });

  it('function should return the result with Multiplication(case5)', () => {
    expect(calc.multiply(0.5, 0.5)).toBeCloseTo(0.25);
  });

  it('function should return the result with Multiplication(case6)', () => {
    expect(typeof calc.multiply('str', 5)).toEqual('number');
  });

  it('function should return the result with Subtraction(case1)', () => {
    expect(calc.subtraction(12, 4)).toBeGreaterThan(7);
  });

  it('function should return the result with Subtraction(case2)', () => {
    expect(calc.subtraction(0.8, 0.2)).toBeCloseTo(0.6);
  });

  it('function should return the result with Subtraction(case3)', () => {
    expect(calc.subtraction(-8, 0)).toBe(-8);
  });

  it('function should return the result with Division(case1)', () => {
    expect(calc.divide(12, 5)).toBe(2.4);
  });

  it('function should return the result with Division(case2)', () => {
    expect(calc.divide(12, -5)).toBeCloseTo(-2.4);
  });

  it('function should return the result with Division(case3)', () => {
    expect(calc.divide(16.6, 0.2)).toBeCloseTo(83);
  });

  it('function should return the result with Division(case4)', () => {
    expect(calc.divide(15, 0)).toEqual(Infinity);
  });

  it('result of the function should be exponentiation(case1)', () => {
    expect(calc.exponentiation(3)).toBe(9);
  });

  it('result of the function should be exponentiation(case2)', () => {
    expect(calc.exponentiation(-11)).toBeGreaterThan(120);
  });
});
