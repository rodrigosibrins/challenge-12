const exercises = require("./exercises");

test("return a string", () => {
  expect(exercises.texto("text")).toBe("text");
});

test("adds 1 + 2 to equal 3", () => {
  expect(exercises.suma(1, 2)).toBe(3);
});

test("rest 4 - 2 to equal 2", () => {
  expect(exercises.resta(4, 2)).toBe(2);
});

test("multiply 2 x 4 to equal 8", () => {
  expect(exercises.multiplicacion(2, 4)).toBe(8);
});

test("can not divide by 0", () => {
  expect(exercises.division(8, 0)).toBe("No se puede dividir por 0");
});

test("divide 8 by 2 to equal 4", () => {
  expect(exercises.division(8, 2)).toBe(4);
});

test("if multiplicador is undefined then multiplicador is equal to 10", () => {
  expect(exercises.tablaMultiplicar(2)).toBe(10);
});

test("table of 2", () => {
  expect(exercises.tablaMultiplicar(2, 4)).toBe(0);
});

test("2 cubed to equal 8", () => {
  expect(exercises.potencia(2, 3)).toBe(8);
});

test("2^2 + 4^4 to be 20", () => {
  expect(exercises.anidada(2, 4)).toBe(20);
});

test("2 to have three 0 to the left", () => {
  expect(exercises.cerosIzq(2, 4)).toBe("0002");
});
