
// 6.1.1演習
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
// 変換例: "North Dakota" -> "https://example.com/north-dakota"
function urlify(string) {
  return "https://example.com/" + string.toLowerCase().split(/\s+/).join('-');
}

// URL生成: 関数型バージョン
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// 6.2.1演習   statesの定義は6.1.1の演習を利用
//let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Dakotaの名前が付く州を選びだす
function inclDacota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(inclDacota(states));

// 文字列が2つでできた州名を選びだす
function len2(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(len2(states));

// 6.3.4 演習
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1～10までの掛け算結果を求める
function multiply(elements) {
  return elements.reduce((multi, n) => { return multi *= n; });
}
console.log(multiply(numbers));

/* リスト6.9の関数バージョンを reduceを改行を入れすに1行で記述して動作確認する */
// lengths: 関数型バージョン
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));
