
// 7.3.1 演習1　Stringにブランクかホワイトスペースのみであれば、trueを返すメソッド追加
String.prototype.blank = function() {
  return !!this.match(/^[""|\s]*$/g);
}

// 7.3.1演習2 Arrayオブジェクトにlast()メソッドを追加
// 配列の末尾の要素を返す
Array.prototype.last = function() {
  return this.slice(-1)[0];
}
