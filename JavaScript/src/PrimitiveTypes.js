const number_type = 33;
console.log(`Type of number_type: ${typeof number_type}`); // 'number'

const bigint_type = 9007199254740991n;
console.log(`Type of bigint_type: ${typeof bigint_type}`); // 'bigint'

const infinity_type = Math.pow(10, 1000);
console.log(`Type of infinity_type: ${typeof infinity_type}`); // 'infinity'

const string_type = 'Antonio';
console.log(`Type of string_type: ${typeof string_type}`); // 'string'

const boolean_type = true;
console.log(`Type of boolean_type: ${typeof boolean_type}`); // 'boolean'

/* Not initialized variables are undefined */
let undefined_type;
console.log(`Type of undefined_type: ${typeof undefined_type}`); // 'undefined'

const null_type = null;
console.log(`Type of null_type: ${typeof null_type}`); // 'object'

const symbol_type = Symbol('Antonio');
console.log(`Type of symbol_type: ${typeof symbol_type}`); // 'symbol'

const object_type = { name: 'Antonio', age: 33 };
console.log(`Type of object_type: ${typeof object_type}`); // 'object'

