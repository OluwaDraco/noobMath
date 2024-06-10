const arithmetics = require("../arithmetics");
//addition test
describe("tests for the addition function", () => {
    test("If the Addition of the array  [1,2,3] equals 6 ", () => {
        expect(arithmetics.addition(1, 2, 3)).toBe(6);
    });

    test("If the Addition of the array  [1] returns 1 ", () => {
        expect(arithmetics.addition(1)).toBe(1);
    });

    test("If the Addition of the array  [] returns NAN ", () => {
        expect(arithmetics.addition()).toBe(NaN);
    });
});
//subtraction test
describe("tests for the subtraction function", () => {
    test("If the subtraction of the array  [1,2,3] equals 0 ", () => {
        expect(arithmetics.subtraction(1, 2, 3)).toBe(0);
    });
    test("If the subtraction of the array  [1] returns 1 ", () => {
        expect(arithmetics.subtraction(1)).toBe(1);
    });
});

describe("tests for the multiplication function", () => {
    test("if only one argument is passed return that argument", () => {
        expect(arithmetics.multiplication(1)).toBe(1);
    });
    test("if only one argument  passed is 0 return 0", () => {
        expect(arithmetics.multiplication(0)).toBe(0);
    });
    test("if 0 is passed as one of the arguments  return 0", () => {
        expect(arithmetics.multiplication(1, 2, 3, 4, 0)).toBe(0);
    });
    test("if the product of [1,2,3,] returns 6", () => {
        expect(arithmetics.multiplication(1, 2, 3)).toBe(6);
    });

    test("if the product of [1,'string'] return Error", () => {
        expect(() => arithmetics.multiplication(1, "string")).toThrow(/int/);
    });
});
