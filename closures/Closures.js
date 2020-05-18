/**
 * 環境が関数についてくるのが本質(環境を変えるかどうかは別問題)
 * 識別子 i が参照する変数は inner 定義時に決定
 * inner 関数をどこで実行しようとも、outer 関数が実行された時の環境を inner 関数は保持
 */

// カウンター
function createCounter() {
  let i = 0;

  return function inner() {
      return i++;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2


// 引数もスコープ内の変数
function defineAdd(i) {
  return v => i + v;
}

const add1 = defineAdd(1);
const add2 = defineAdd(2);

console.log(add1(1));
console.log(add2(1));
console.log(defineAdd(10)(5));


// 指定の範囲で乱数を生成する関数
function randomGen(max) {
  return () => Math.floor(Math.random() * max);
}

const rand5 = randomGen(5);
const rand100 = randomGen(100);

console.log([
  rand5(),
  rand5(),
  rand5(),
  rand5(),
  rand5(),
]);

console.log([
  rand100(),
  rand100(),
  rand100(),
  rand100(),
  rand100(),
]);