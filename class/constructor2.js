const Foo = function(p) {
  this.price = p;
};

Foo.prototype.getPrice = function() {
  return this.price;
};


const Bar = function(p) {
  this.price = p;
  this.getPrice = function() {
    return this.price;
  }
}


/**
 * getPrice プロパティ(メソッド) は new Foo(100) で生成されたオブジェクト自体ではなく
 * そのプロトタイプ(__proto__)である Foo.prototype (コンストラクタ関数の prototype プロパティ)に属する
 * 効率の観点でこちらのほうが省スペース
 * foo.__proto__.getPrice === Foo.prototype.getPrice  // ture
 */
const foo = new Foo(100);
foo.getPrice();

/**
 * getPrice プロパティ(メソッド)は new Foo(100) で生成されたオブジェクト自体に属する
 * bar.getPrice === Foo.prototype.getPrice  // false
 */
const bar = new Bar(100);
bar.getPrice();
