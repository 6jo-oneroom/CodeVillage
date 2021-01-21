//課題05-2. JSON
//以下の雛形を埋めて、下部のconsole.logの出力を満たすJSONを記述してください。
//参考にしたソース:: https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/JSON

const json = `
{
  "total": 2,
  "items" : [
    {"id": 123, "name": "Item 123"},
    {"id": 456, "name": "Item 456"}
  ],
  "next": {"id": 789}
}
`

const obj = JSON.parse(json)
console.log(obj.total) // => 2
console.log(obj.items[0].name) //=> Item 123
console.log(obj.items[0].id) //=> 123
console.log(obj.items[1].name) //=> Item 456
console.log(obj.items[1].id) //=> 456
console.log(obj.next.id) //=> 789
