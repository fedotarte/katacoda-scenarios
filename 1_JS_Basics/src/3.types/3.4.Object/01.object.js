let a = {};

console.log(a);

a = {
    str: 'value',
    num: 10
};

console.log(a);

a = {

    _value: 0,

    method: function() {
        return 1;
    },

    get value() {
        return this._value;
    },

    set value(value) {
        this._value = value;
    },

};

console.log(a);
console.log(a.method());
console.log(a.value);
a.value = 100;
console.log(a.value);
