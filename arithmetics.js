function addition(base, ...args) {
    //first parameter is the addition base
    //task handle invalid input
    if (args.length === 0 && base) {
        return base;
    }
    if (args.length === 0) {
        return 0;
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
    if (base === undefined) {
        let subBase = Math.max(...args);
    }
    const sumBase = base;
    let sum = 0;
    for (let arg of args) {
        console.log(arg);
        sum += arg;
    }
    return (sum += sumBase);
}

function multiplication(...args) {
    if (args.length === 1) {
        return args[0];
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
