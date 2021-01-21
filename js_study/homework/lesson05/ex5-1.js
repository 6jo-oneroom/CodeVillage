//課題05-1. オブジェクトと配列の組み合わせ
//以下の雛形を埋めて、下部のconsole.logの出力を満たすitemsの値を記述してください。

const items = [
  { n: 100 },
  { a: { b: ["abc"] }, c:{"100":"foobar"}},
  // ここを埋める
]

console.log(items[0].n) //=> 100
console.log(items[1].a.b[0]) //=> abc
console.log(items[1].c['100']) //=> foobar
