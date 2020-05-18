function bar() {
  return this;
}

// 逆にfooに突っ込むとthisがfoo(レシーバ)を指すようになる。
const foo = {};
foo.bar = bar;

foo.bar() === foo; // true