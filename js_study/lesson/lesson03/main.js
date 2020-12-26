//! console.log('ここに入力した文字列をコンソールに出す')
//console.log('Hello, world!');

//let 変数を定義する
//変数ってのは名札のことだよ
let number;//変数の宣言
number = 0;//値の代入
// let number = 0; 変数の宣言と値の代入をすることを変数の宣言+初期化って言います
console.log(number);//変数に入った表示

number = 1;//変数の中身はイコールで変更できるよ
console.log(number);

number = number + 1;//変数に入った数字は計算で書き換えることができるよ
console.log(number);

number = ++number;//+1は++みたいな省略記法も使えるよ
console.log(number);

const number01 = 0;//const 定数(変数)の定義、必ず初期化（値の代入）をする必要があるよ
console.log(number01);
//number01 = 1; constは再代入ができないよ！
//定数を定義した場合は計算で書き換えられないっぽいから注意
//まずconstで書いて、constでいけないところをletで書く

var number02 = 100 //varも変数を宣言できる
var number02 = 1000 //同名の変数を宣言ができてしまう
//letやconstは同名の変数の宣言ができない
console.log(number02);

const variable = 1 + 1
console.log(variable);

const result = console.log(variable);
console.log(result);//undefinedが返ってくる、これは言語作った人がそう決めたから（言語の仕様の一つ）

const myLastName = 'Nakamura'//文字列を
const myFirstName = 'Shinnosuke'
console.log(myLastName + ' ' + myFirstName)

const myFullName = (myLastName + ' ' + myFirstName)
console.log(myFullName)

console.log("I'm " + myFullName + ".")
console.log('I\'m ' + myFullName + ".")//バックスラッシュ使うとシングルクォートを文字列として認識させられる
console.log('I\'m ' + '\n'+ myFullName + ".")//改行したいときは改行文字列（\n）を差し込む必要がある


//テンプレート文字列っていう新しい書き方
console.log(`I'm ${myFullName}.`)//テンプレート文字列って言う書き方、文章内で式を差し込める

console.log(`I'm
${myFullName}.`)//テンプレート文字列って言う書き方、改行を入れれば改行される
