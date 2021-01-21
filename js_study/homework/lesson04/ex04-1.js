//#課題04-1. コインを投げるプログラム
//以下の雛形の①、②を埋めて、「呼び出すと表か裏が50%ずつの確率でコンソールに表示される」関数cointossを作成してください。また、動作確認のために、cointossを10回連続で実行するループも作成してください。


function cointoss() {
  const num = Math.random() // numは0.0〜1.0のランダムな数値
  if (num >= 0.5) {
    console.log('表')
  }
  else {
    console.log('裏')
  }
  // ①ここを埋める
}

for (let i = 0; i < 10; i++/* ②ここを埋める */) {
  cointoss()
}
