var x = 1;

function foo() {
  console.log(x);  // undefined ブロック外にx=1と定義されているのに!
  var x = 2;
  console.log(x);  // 2
}

foo();

/**
 * 内部的にこのように変換されている。
var x = 1;
function foo() {
  var x;  // 宣言を関数の先頭に巻き上げる
  console.log(x);
  x = 2;
  console.log(x);
}

foo();
 */