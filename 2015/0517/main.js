foo = function () {
	this.myName = "Foo function.";
}
foo.prototype.sayHello = function () {
	alert(this.myName);
}
foo.prototype.bar = function () {
	setTimeout(this.sayHello, 1000);
}
var f = new foo;
f.bar();