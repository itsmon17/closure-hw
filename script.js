// 1- задание
let counter = 0;
const makeCounter = () => {
    return ++counter;
};
console.log(makeCounter());

//2 -задание
const getFunc = (num1) => {
    let a = num1;
    const func = (num2) => {
        console.log(a + num2);
    };
    return func;
};
getFunc(1)(10);

// 3 - задание
const sumTo = (num) => {
    let result = 0;
    for (let idx = num; idx > 0; idx--) {
        result += idx;
    }
    return result;
};
console.log(sumTo(100));
