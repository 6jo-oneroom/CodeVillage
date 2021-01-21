// 課題07-2. 配列オブジェクトのメソッド
// 課題07-1と同様に、配列のオブジェクトに対して用意されているメソッドをリファレンスから調べて、気になったメソッドを3つほど試してください。

// また、文字列オブジェクトで使えるメソッドとの共通点、相違点を簡単にまとめましょう。

// Array.prototype.keys()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
const array1 = [2, 5, 6]
const array2 = ['2', '5', '6']
const array3 = { 'あ': 1, 'い': 2, 'う': 3}

console.log(array1.keys())
//対象の配列のキー（インデックス）を取り出すことができるイテレーターってのを設置できる


for (const key1 of array1.keys()) {
  console.log(key1)
}

for (const key2 of array2.keys()) {
  console.log(key2)
}

for (const [key3] of Object.keys(array3)) {
  console.log(key3)
}
//for(定数 of 対象の配列.keys())でキーを取り出せる

for (const ent1 of array1.entries()) {
  console.log(ent1)
}

for (const ent2 of array2.entries()) {
  console.log(ent2)
}

for (const [ent3, value3] of Object.entries(array3)) {
  console.log(ent3,value3)
}
//keys()ではなくてentries()を使うと、インデックスと配列要素をセットで出してくれるイテレーターを設置できる
//array3は連想配列となっているため、表記方法が少し違う
// 参考　https://qiita.com/kura07/items/cf168a7ea20e8c2554c6
// 一応見ときたい　https://zenn.dev/uhyo/articles/array-n-keys-yamero

// Array.prototype.sort()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const months = ['March', 'Jan', 'Feb', 'Dec', 'May']
console.log(months)//並べ替え前
months.sort()
console.log(months)//並べ替え後


for (const [entM,valueM] of Object.entries(months)){
  const henkanM = valueM.toString() //monthsの配列要素を文字列に変換
  const codePointM = henkanM.codePointAt(0)//変換した文字列の頭文字をコードポイント値で返す
  const hexOfM = codePointM.toString(16)//コードポイントを16進数コードに変換する
  console.log(`${henkanM}:${hexOfM}`)//配列要素に対応した16進数コード表示（あくまで頭文字）
}
//1文字目が同一だったら2文字目、3文字目とちゃんと比較して並べ替えてくれるっぽい

// Unicodeの歴史を含めた文字コード自体について詳しく知りたい方は「プログラマのための文字コード技術入門」や「文字コード「超」研究」等を参照
// https://jsprimer.net/basic/string-unicode/
// コードポイント参照　http://equj65.net/tech/charcode/

// Array.prototype.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 5)
console.log(result)


//文字列オブジェクトのメソッドとの共通点・相違点
//どちらもオブジェクトなので操作の文法は変わらない(共通するメソッドもあるので、用途に応じてstr.から呼び出すかarray.から呼び出すか使い分ける必要はある)
//連想配列のようにオブジェクトのキーを文字列にすることができる（メソッド関係なさそう）
// 配列操作のメソッドのほうが複雑（特殊な形のデータを操作するもの）なので文字列等に互換性がない
//配列には比較演算子がなかったり、配列同士を比較するメソッドがなかったりする


//一応みときたい配列関連の記事　https://genzouw.com/entry/2019/07/04/120033/1648/
