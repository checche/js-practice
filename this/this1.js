const foo = {
  bar: function() {
    return this;
  },
};

// 関数だけ取り出して呼び出すとthisがglobalオブジェクトを指すようになる。
const bar = foo.bar;

bar() === foo; // false
