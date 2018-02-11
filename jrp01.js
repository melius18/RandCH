var l = 1;
var h = Math.sqrt(1 - Math.pow(0.5,2));

console.log(h);

var obj1 = {};

console.log(obj1);

var pat = /(?:a) (b) (c) (d)/g;

console.log('a b c d___a b c d_'.replace(pat,'$1 $3 $2'));
