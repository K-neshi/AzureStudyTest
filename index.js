const element = document.getElementById('element');
var btn = document.getElementById('btn');
const text = document.getElementById('text');
const element2 = document.getElementById('element2');
var text2 = document.getElementById('text2');
const timer = document.getElementById('timer');
const resultLabel = document.getElementById("result");
const scoreLabel = document.getElementById("score");
const missLabel = document.getElementById("miss");

const textList = [
  'apple',
  'window',
  'myself',
  'hellow',
  'welcome',
  'orange',
  'good'
];

let TIME;
let count;
let state = true;

let score;
let miss;

var checkText;

function btnpush() {
  //各項目の初期化
  TIME = 30;
  count = 0;
  score = 0;
  miss = 0;
  checkText;
  resultLabel.textContent = count;
  scoreLabel.textContent = score;
  missLabel.textContent = miss;
  
  //ボタン削除処理
  btn.remove();

  if (text2 !== null){
    // text2が存在する場合のみtext2要素を削除
    text2.remove();
  }
  
  createText()
  state = true;
  
//制限時間のカウント
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);

//ゲーム終了
function finish() {
  clearInterval(countdown);
  
　//正確率を算出
  const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  
　//text2要素作成
　var newElement3 = document.createElement("h2"); // h2要素作成
  newElement3.setAttribute("id","text2"); // h2要素にidを設定
  element2.append(newElement3);// element2要素の後に追加
  text2 = document.getElementById('text2');
　
  text.textContent = 'ゲーム終了！';
  text2.textContent = '正確率は' + Math.round(accuracy) + '%でした！';

  //ボタン作成
  var newElement2 = document.createElement("input"); // input要素作成
  newElement2.setAttribute("id","btn"); // input要素にidを設定
  newElement2.setAttribute("type","button"); // input要素にtypeを設定
  newElement2.setAttribute("value","ゲーム再挑戦"); // input要素にvalueを設定
  newElement2.setAttribute("onclick","btnpush()"); // input要素にonclickを設定
  element.append(newElement2);// element要素の後に追加
  btn = document.getElementById('btn');
  state = false;
}

function createText() {
  //ランダムに問題を出題
  const rnd = Math.floor(Math.random() * textList.length);
  //全問題数をカウント
  count++;
  resultLabel.textContent = count;

  //前の文字列を削除してから次の文字列を表示する
  text.textContent = '';

  //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
  checkText = textList[rnd].split('').map(function(value) {
    var span = document.createElement('span');
    span.textContent = value;
    text.appendChild(span);

    return span;
  });
}


//キーボードからの入力は「e.key」に格納されている
window.addEventListener('keydown', e => {
  if(e.key === checkText[0].textContent) { 
    if(!state)return;
    checkText[0].className = 'add-blue';

    //正解
    score++;
    scoreLabel.textContent = score;
    
    //0番目の配列要素を削除して、次の1文字を比較対象にする
    checkText.shift();
  }else{
    if(!state)return;
    
    //タイプミス
    miss++;
    missLabel.textContent = miss;
  }
  
  //配列要素が空っぽになったら次の問題を出す
  if(!checkText.length) createText();
  setInterval();
});
  
};
