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
describe("tests for the subtraction test function", () => {
    test("If the subtraction of the array  [1,2,3] equals 0 ", () => {
        expect(arithmetics.subtraction(1, 2, 3)).toBe(0);
    });
    test("If the subtraction of the array  [1] returns 1 ", () => {
        expect(arithmetics.subtraction(1)).toBe(1);
    });
});
