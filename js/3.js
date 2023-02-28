const obj1 = {"a": 1, "b": 2};
const obj2 = {"a": 1, "b": 7};
const one =JSON.stringify(obj1);
const two =JSON.stringify(obj2);
var result = (one) === (two);
console.log(result);

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // truej