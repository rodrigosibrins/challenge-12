const exercises = require("./exercises");

describe("Function return a string", () => {
  test("Function is defined", () => {
    expect(exercises.texto("defined")).toBeDefined();
  });
  test("Return 'text'", () => {
    expect(exercises.texto("text")).toBe("text");
  });
  test("Return a word from string", () => {
    expect(exercises.texto("This is a long text to test the function")).toContain("long");
  });
});

describe("Function display sums of two values", () => {
  test("Adds 1 + 2 to equal 3", () => {
    expect(exercises.suma(1, 2)).toBe(3);
  });
  test("Adds - 1 - 2 to equal -3", () => {
    expect(exercises.suma(-1, -2)).toBe(-3);
  });
  test("Function doesn't return a string value", () => {
    expect(exercises.suma(1, 2)).not.toBe("3");
  });
  test("Function doesn't return a string value", () => {
    expect(exercises.suma(5670, 3405)).toBeGreaterThan(9000);
  });
});

describe("Rest function", ()=> {
  test("Rest 4 - 2 to equal 2", () => {
    expect(exercises.resta(4, 2)).toBe(2);
  });
  test("Adds - 4 - 2 to equal -6", () => {
    expect(exercises.suma(-4, -2)).toBe(-6);
  });
  test("The returned value is not a string", () => {
    expect(exercises.resta(4, 2)).not.toBe("2");
  });
  test("The returned value is not a string", () => {
    expect(exercises.resta(-1, -1)).toBeLessThanOrEqual(0);
  });
});

describe("Multiply function", () => {
  test("Multiply 2 x 4 to equal 8", () => {
    expect(exercises.multiplicacion(2, 4)).toBeTruthy();
  });
  test("Multiply 2 x 4 to equal 8", () => {
    expect(exercises.multiplicacion(2, 4)).toBe(8);
  });
  test("The returned value is not a string", () => {
    expect(exercises.multiplicacion(2, 4)).not.toBe("8");
  });
});

describe("Division function", () => {
  test("Can not divide by 0", () => {
    expect(exercises.division(8, 0)).toMatch("No se puede dividir por 0");
  });
  test("Divide 8 by 2 to equal 4", () => {
    expect(exercises.division(8, 2)).toBe(4);
  });
  test("The returned value is not a string", () => {
    expect(exercises.division(8, 2)).not.toBe("4");
  });
  test('Divide 7 by 6 close to 1', () => {
    expect(exercises.division(7, 6)).toBeCloseTo(1.16, 0.5);
  });
});

describe("Multiplication table function", () => {
  test("If multiplicador is undefined then multiplicador is equal to 10", () => {
    expect(exercises.tablaMultiplicar(2)).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  test("Multiplicando is 2 and multiplicador 4", () => {
    expect(exercises.tablaMultiplicar(2, 4)).toEqual([0, 2, 4, 6, 8]);
  });
  test("The length of the array is correct", () => {
    expect(exercises.tablaMultiplicar(2, 3)).toHaveLength(4);
  });
});

describe("Exponent function", () => {
  test("0 cubed to be false", () => {
    expect(exercises.potencia(0, 3)).toBeFalsy();
  });
  test("2 cubed to equal 8", () => {
    expect(exercises.potencia(2, 3)).toBe(8);
  });
  test("The returned value is not a string", () => {
    expect(exercises.potencia(2, 3)).not.toBe("8");
  });
});

describe("Nested function", () => {
  test("2^2 + 4^4 to be 20", () => {
    expect(exercises.anidada(2, 4)).toBe(20);
  });
  test("The returned value is not a string", () => {
    expect(exercises.anidada(2, 4)).not.toBe("20");
  });
  test("The returned value is not a string", () => {
    expect(exercises.anidada(2, 4)).not.toBeNull();
  });
});

describe("Add 0 to the left", () => {
  test("The function is defined", () => {
    expect(exercises.cerosIzq(2, 4)).toBeDefined();
  });
  test("2 to have three 0 to the left", () => {
    expect(exercises.cerosIzq(2, 4)).toBe("0002");
  });
});