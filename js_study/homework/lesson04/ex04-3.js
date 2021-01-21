//#課題04-3. 複数人の成績判定プログラム
//課題04-2で作成したscoring関数をコピーして、以下のscores配列の各要素のscoringの結果をコンソールに表示するプログラムを作成してください。

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
   if (score === 100) {
    return "秀"
  }
  else if (score >= 60) {
    return '良'
  }
  else {
    return '不可'
  }
  // ここに課題04-2の回答をコピーする
}

scores.forEach((score) => {
  console.log(scorenig(score)
})
// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
