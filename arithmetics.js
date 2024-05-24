function addition(base, ...args) {
    //first parameter is the addition base
    //task handle invalid input
    if (args.length === 1 && base) {
        return base;
    }
    if (args.length === 0) {
        console.error("No argument was provided");
    }

    const sumBase = base;
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return (sum += sumBase);
}

function subtraction(base, ...args) {
    // //finds the largest number as the base and subtracts all other form it
    // let largestInteger = Math.max(...args);
    // // console.log(largestInteger);
    // return largestInteger;]
    if (args.length === 0) {
        return base;
    }
    if (base === undefined) {
        throw new Error("no arguments were provided");
    }
    const baseNumber = Math.max(...args);
    let sub = baseNumber;

    const remainingArgs = args.filter((arg) => arg === baseNumber);
    for (let arg of remainingArgs) {
        sub -= arg;
    }
    return sub;
}

function multiplication(...args) {
    //if only one item is submitted return the only args
    if (args.length === 1) {
        return args[0];
    }
    //if the first argument is 0 it returns 0
    if (args[0] === 0) {
        return 0;
    }
    let product = 1;
    for (let arg of args) {
        product = product * arg;
    }
    return product;
}

module.exports = {
    addition,
    subtraction,
    multiplication,
};
