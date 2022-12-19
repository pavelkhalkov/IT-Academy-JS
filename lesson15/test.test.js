const { Calculator } = require('./calculator');

const calc = new Calculator();

describe('check Add-functionality', function () {
  test.each([
    [1, 2, 3],
    [30, 8, 38],
    [40, 10, 50],
  ])('check addition of positive numbers: %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  test.each([
    [-1, 2, 1],
    [3, -3, 0],
    [-40, -10, -50],
  ])('check addition of negative numbers: %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  test.each([
    [0, 2, 2],
    [3, 0, 3],
    [0, 0, 0],
  ])('check addition of  "zero": %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  // Bug

  test('check addition of numbers (number is written as string)', async () => {
    const result = calc.add('3', 5, -5);
    expect(typeof result).toEqual('number');
  });

  test('check addition of fractional numbers ', async () => {
    const result = calc.add(0.3, 0.5);
    expect(result).toBeCloseTo(0.8);
  });

  test('check addition of "null" ', async () => {
    const result = calc.add(null, 0);
    expect(result).not.toBeNull();
  });

  test('check result is defined ', async () => {
    const result = calc.add(5, 5);
    expect(result).toBeDefined();
  });

  test('check result is not "Null"', async () => {
    const result = calc.add(5, -5);
    expect(result).not.toBeNull();
  });

  test('check result is "0"', async () => {
    const result = calc.add(5, -5);
    expect(result).toBe(0);
  });
});

describe('check Subtraction-functionality', function () {
  it.each([
    [10, 2, 8],
    [30, 10, 20],
    [40, 10, 30],
  ])('check Subtraction of positive numbers: %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  it.each([
    [-1, 2, -3],
    [3, -3, 6],
    [-40, -10, -30],
  ])('check Subtraction of negative numbers: %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  it.each([
    [0, -2, 2],
    [3, 0, 3],
    [0, 0, 0],
  ])('check Subtraction of  "zero": %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  // Bug

  it('check subtraction of more than 2 numbers ', async () => {
    const result = calc.subtraction(1, 5, 5, 5);
    expect(result).toEqual(-14);
  });

  it('check result is "truthy" in case of more than 2 number', async () => {
    let result = calc.subtraction(5, 5, 10, 30);
    expect((result = -40)).toBeTruthy();
    expect(result).toEqual(-40);
  });

  it('check subtraction of only numbers ', async () => {
    const result = calc.subtraction('fff', 5, -5);
    expect(result).toBeNaN();
  });

  it('check subtraction of numbers (number is written as string)', async () => {
    const result = calc.subtraction('3', 5);
    expect(typeof result).not.toBeNaN();
    expect(typeof result).toBe('number');
    expect(result).toBe(-2);
  });

  it('check subtraction of fractional numbers ', async () => {
    const result = calc.subtraction(0.8, 0.5);
    expect(result).toBeCloseTo(0.3);
  });

  it('check subtraction of null', async () => {
    const result = calc.subtraction(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(-5);
  });

  it('check result of substraction is defined ', async () => {
    const result = calc.subtraction(5, 15);
    expect(result).toBeDefined();
  });

  it('check result is not "Null"', async () => {
    const result = calc.subtraction(-5, -5);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });
});

describe('check Multiply-functionality', function () {
  it.each([
    [1, 2, 2],
    [30, 10, 300],
    [200, 200, 40000],
  ])('check multiply of positive numbers: %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it.each([
    [-1, 2, -2],
    [3, -3, -9],
    [-40, -10, 400],
  ])('check multiply of negative numbers: %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it.each([
    [0, 2, 0],
    [3, 0, 0],
    [0, 0, 0],
  ])('check multiply of  "zero": %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it('check multiply of numbers (number is written as string) ', async () => {
    const result = calc.multiply('3', 5);
    expect(typeof result).toEqual('number');
    expect(result).toBe(15);
  });

  it('check multiply only of numbers ', async () => {
    const result = calc.multiply('fff', 5);
    expect(result).toBeNaN();
  });

  it('check multiply of fractional numbers ', async () => {
    const result = calc.multiply(0.3, 0.5);
    expect(result).toBeCloseTo(0.15);
  });

  it('check result is not "Null" during multiply to 0', async () => {
    const result = calc.multiply(5, 0);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });

  it('check multiply of "null" ', async () => {
    const result = calc.multiply(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });

  it('check result is defined ', async () => {
    const result = calc.multiply(5, 5);
    expect(result).toBeDefined();
  });
});

describe('check Divide-functionality', function () {
  it.each([
    [4, 2, 2],
    [10, 100, 0.1],
    [200, 200, 1],
  ])('check divide of positive numbers: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  // Bug

  xit('check result of division of more than 2 numbers', async () => {
    const result = calc.divide(10, 2, 5);
    expect(result).toBe(1);
  });

  it.each([
    [-4, 2, -2],
    [3, -3, -1],
    [-40, -10, 4],
  ])('check divide of negative numbers: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  // Bug

  xit.each([
    [0, 2, 0],
    [0, -2, 0],
  ])('check divide of  "zero" to number: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  it('check divide of only numbers (number is written as string) ', async () => {
    const result = calc.divide('3', 3);
    expect(result).toEqual(1);
    expect(typeof result).toEqual('number');
  });

  it('check divide of only numbers (there are string) ', async () => {
    const result = calc.divide('fff', 3);
    expect(result).toBeNaN();
  });

  it('check divide of fractional numbers ', async () => {
    const result = calc.divide(0.6, 2);
    expect(result).toBeCloseTo(0.3);
  });

  it('check division null to number  ', async () => {
    const result = calc.divide(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
    expect(typeof result).toEqual('number');
  });

  it('check result is defined ', async () => {
    const result = calc.divide(5, 5);
    expect(result).toBeDefined();
  });

  it('check division to 0', async () => {
    const result = calc.divide(5, 0);
    expect(result).not.toBeNull();
    expect(typeof result).toEqual('number');
    expect(result).toEqual(Infinity);
  });

  // Bug

  it('check result of divide array to number', async () => {
    const result = calc.divide([5, 1], 5);
    expect(result).toBeNaN();
  });
});

describe('check Exponentiation-functionality', function () {
  it.each([
    [0, 0],
    [3, 9],
    [10, 100],
  ])('check exponentiation of positive numbers: %d ^2 = %d', async (a, b) => {
    expect(calc.exponentiation(a)).toBe(b);
  });

  it.each([
    [-1, 1],
    [-3, 9],
    [-40, 1600],
  ])('check exponentiation of negative numbers: %d ^2 = %d', async (a, b) => {
    expect(calc.exponentiation(a)).toBe(b);
  });

  it('check exponentiation of numbers (when number is written as "string") ', async () => {
    const result = calc.exponentiation('3');
    expect(typeof result).toEqual('number');
    expect(result).toEqual(9);
  });

  it('check exponentiation of numbers (when there is a "string") ', async () => {
    const result = calc.exponentiation('3', 9);
    expect(typeof result).toEqual('number');
    expect(result).toEqual(9);
  });

  it('check exponentiation of fractional numbers ', async () => {
    const result = calc.exponentiation(0.3);
    expect(result).toBeCloseTo(0.09);
  });

  it('check exponentiation of null ', async () => {
    const result = calc.exponentiation(null);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });

  it('check result is defined ', async () => {
    const result = calc.exponentiation(5);
    expect(result).toBeDefined();
    expect(result).toBe(25);
  });

  // Bug

  it('check result of exponentiation array ', async () => {
    const result = calc.exponentiation([5]);
    expect(result).toBe(25);
  });
});
