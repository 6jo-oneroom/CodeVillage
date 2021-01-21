// 課題07-1. 文字列オブジェクトのメソッド
// 「メソッドの調べ方」のセクションに書いてある方法で、文字列のオブジェクトに対して用意されているメソッドを調べてください。
// 気になったメソッドを3つほどピックアップして、実際にプログラムを書いて動作を確認してください。


//String.prototype.trim()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const say = '    こんにちは　　　　　　'
console.log(say)
console.log(say.trim())

// String.prototype.search()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search

const meigen = 'Nothing in life is to be feared. It is only to be understood'

const regex = /[A-Z]/g
//正規表現の後の g はグローバルサーチを行うオプション/フラグで、全体の文字列を見てすべてのマッチを返します。
//正規表現について　https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions

console.log(meigen.search(regex))
//※sarch()メソッドは条件に引っかかった最初の文字の位置を返す

console.log(meigen.match(regex))
//※match()メソッドは条件に引っかかったの文字を配列形式で返す

console.log(meigen.toUpperCase().match(regex))
console.log(meigen.toLowerCase().match(regex))
//おまけ

//String.prototype.valueOf()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
const Obj = new String(50)
const Obj2 = 50
const Obj3 = '50'
const Obj4 = new Number(100)

console.log(Obj.valueOf())
console.log(Obj.toString())
//valueOf()とtoString()の結果は基本同じっぽい

console.log(Obj.valueOf() === Obj2)
console.log(Obj.valueOf() === Obj2.toString())
console.log(Obj.valueOf() === Obj2.valueOf())
//valueOfだと数値を文字列に変換してない？
console.log(Obj2.valueOf() === Obj2.toString())
//厳密な比較だと同じ型じゃないよっていわれてるっぽい
console.log(Obj2.valueOf() == Obj2.toString())
//この比較はとくにいみはないかも
console.log(Obj2.toString() + Obj2.toString())
console.log(Obj2.valueOf() + Obj2.valueOf())
console.log(Obj2.valueOf() + Obj2.toString())
console.log(Obj3.valueOf() + Obj3.valueOf())
console.log(Obj4.toString() + Obj4.toString())
console.log(Obj4.valueOf() + Obj4.valueOf())
console.log(Obj4.valueOf() + Obj4.toString())
//vlaueOf()を数値(Number)に適用した場合、数値の形で返ってくるっぽい

console.log(Obj.valueOf() === Obj3)
console.log(Obj === Obj3)
//参照　https://www.it-swarm-ja.tech/ja/javascript/string%EF%BC%88value%EF%BC%89%E3%81%A8valuetostring%EF%BC%88%EF%BC%89%E3%81%AE%E9%81%95%E3%81%84%E3%81%AF%E4%BD%95%E3%81%A7%E3%81%99%E3%81%8B/970627706/
//手順1 可能な場合は、toStringメソッドを実行します。
//resultがprimitiveの場合、resultを返します。それ以外の場合は手順2に進みます。
//手順2 可能な場合は、valueOfメソッドを実行します。
// resultがprimitiveの場合、resultを返します。それ以外の場合は手順3に進みます。
//手順3 TypeErrorをスローします。
