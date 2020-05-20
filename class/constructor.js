/**
 * コンストラクタ: new Foo()でオブジェクトを生成
 * foo1.__proto__ === Foo.prototype  // true
 */

const Foo = function(p) {
  this.price = p;
};

Foo.prototype.getPrice = function() {
  return this.price;
};

const foo1 = new Foo(100);
console.log(foo1.getPrice());

// 上と同じ
const foo2 = Object.create(Foo.prototype);
Foo.call(foo2, 200);
console.log(foo2.getPrice());

// 上と同じ
const foo3 = { __proto__: Foo.prototype };
Foo.call(foo3, 300);
console.log(foo3.getPrice());