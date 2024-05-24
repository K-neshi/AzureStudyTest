const element = document.getElementById('element');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const timer = document.getElementById('timer');
const resultLabel = document.getElementById("result");
const scoreLabel = document.getElementById("score");
const missLabel = document.getElementById("miss");
const form = document.forms.typing;
const textList = [
  'apple',
  'window',
  'myself',
  'hellow',
  'welcome',
  'orange',
  'good'
];

let TIME = 30;
let count = 0;
let state = true;
//let judg = '';

let score = 0;
let miss = 0;

var checkText = [];

btn.addEventListener('click', function(e) {
  //ボタン削除処理
  btn.remove();
  
  createText()
  
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
  text.textContent = 'ゲーム終了！';
  text2.textContent = '正確率は' + Math.round(accuracy) + '%でした！';
  //ボタン作成
  /*var newElement = document.createElement("div"); // div要素作成
　newElement.setAttribute("id","element"); // div要素にidを設定
  newElement.setAttribute("class","element");// div要素にclassを設定
  text2.before(newElement);// text2要素の後に追加*/
  var newElement2 = document.createElement("input"); // input要素作成
  newElement2.setAttribute("id","btn"); // input要素にidを設定
  newElement2.setAttribute("type","button"); // input要素にtypeを設定
  newElement2.setAttribute("value","ゲーム再挑戦"); // input要素にvalueを設定
  element.append(newElement2);// element要素の後に追加
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
  if(!state)return;
  
  if(e.key === checkText[0].textContent) { 
    console.log("count");
    checkText[0].className = 'add-blue';

    //正解
    score++;
    scoreLabel.textContent = score;
    /*judg = '○';
    changeColor(judg);*/
    
    //0番目の配列要素を削除して、次の1文字を比較対象にする
    checkText.shift(); 
  }else{
    //タイプミス
    miss++;
    missLabel.textContent = miss;
    /*judg = '×';
    changeColor(judg);*/
  }
  
  //配列要素が空っぽになったら次の問題を出す
  if(!checkText.length) createText();
});
});

//文字の色を変える
/*function changeColor(judg){
  if(judg === '○'){
    //文字を赤色に変更する
    document.getElementById('judg').style.color = 'RED';
    judg.textContent = '○';
  } else {
    //文字を青色に変更する
    document.getElementById('judg').style.color = 'BLUE';
    judg.textContent = '×';
  }
}*/
