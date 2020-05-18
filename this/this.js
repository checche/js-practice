/**
 * thisは通常レシーバを指す。
 * レシーバがなければglobal objectを指す。
 */

 // 1
this; // this -> global object

// 2
function foo() {
  return this;
}

foo(); // this -> global object

// 3
const foo = {
  bar: function() {
    return this;
  },
};

foo.bar() === foo; // this -> foo