/**
 * setTimeout内のthisはグローバルオブジェクトを指すので
 * 定数に格納しておくと良い。
 */

const a = {
  name: 'foo',
  say: function() {
    const self = this; // this -> a
    setTimeout(function() {
      console.log(self.name);
    }, 1000);
  },
};

a.say();


/** これだとおかしい */
// const a = {
//   name: 'foo',
//   say: function() {
//     setTimeout(function() {
//       console.log(this.name); // this -> global object
//     }, 1000);
//   },
// };

// a.say();
