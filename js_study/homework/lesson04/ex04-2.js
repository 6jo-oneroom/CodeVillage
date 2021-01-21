//課題04-2. 成績判定プログラム
//「else if」のセクションで紹介した「成績判定プログラム」を参考に、「引数に点数を渡すと、成績判定を返す」関数scoringを作成してください。

//以下の雛形を埋めてプログラムを作成してください。// 動作確認以下の引数やconsole.logの数は、自由に変更して構いません（一通りの条件が確認できるように変更するのをお勧めします）。
function scoring(score) {
  if (score === 100) {
    return "秀"
  }
  else if (score >= 60) {
    return '良'
  }
  else {
    return '不可'
  }
  // ここを埋める
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可
