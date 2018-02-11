function HelloFunc(func2) {
    this.greeting = "Hello";
}

HelloFunc.prototype.call = function(func1) {
    func1? func1(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

console.dir(objHello);

console.log(undefined?1:0);