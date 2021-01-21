//課題06-1. map
//以下のitemsは、週✕日ごとに、なんらかの成績が記録されている配列だとします（配列の配列）。

//itemsのmapを呼び出して、「各週ごとの成績の合計値」の配列sumsに変換するプログラムを作成してください。
//参考:: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const items = [
// 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60,  3, 28, 49,  5, 91],
  [19, 56, 92, 66, 53, 80, 13]
]

const sums = items.map((item) => {
  return item.reduce((acc, value) => acc + value)
  // ここを埋める
  // 疑問点::アロー関数でリターンが必要な場合とそうでない場合があるのはなんでだろう
  //→アロー関数のステートメントがreturnのみの場合はreturnを省略できる
  //参考 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  //アロー関数のステートメントってなに
  //文（処理）のこと、要はアロー関数の中に突っ込んだ処理が複数の場合はステートメントは複数になるし、一行の処理で終わるなら1つになるしってことみたい
  //アロー関数でステートメントがreturnのみっていうのは、ステートメントが1行だけのときってことっぽい

})

console.log(sums) //=> [424, 313, 291, 379]


const sums2 = items.map((item) => item.reduce((acc, value) => acc + value))
// return無しで書きたい場合、波括弧をはずしてあげないと上手くうごいてくれないっぽい
console.log(sums2) //=> [424, 313, 291, 379]
