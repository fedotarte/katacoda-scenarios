let str = `{
    "number": 1.23,
    "string": "test string",
    "boolean": {
        "true": true,
        "false": false
    },
    "object": {
        "test1": 1,
        "test2": 2
    },
    "array": [1, 2, 3],
    "null": null
}`;

let res = JSON.parse(str);

console.log(res);