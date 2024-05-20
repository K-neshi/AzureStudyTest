const text = document.getElementById('text');
const timer = document.getElementById('timer');
const scoreLabel = document.getElementById("score");
const missLabel = document.getElementById("miss");
const form = document.forms.typing;
const textList = [
  'Apple',
  'Window',
  'Myself',
  'Hellow',
  'Welcome'
];

let TIME = 60;
let count = 0;
let state = true;
let judg = '';

let score = 0;
let miss = 0;

var checkText = [];

createText();

//制限時間のカウント
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);

//ゲーム終了
function finish() {
  clearInterval(countdown);
  text.textContent = 'ゲーム終了！\r\n'+'正解数は' + score + '個でした！';
  state = false;
}

function createText() {
  //ランダムに問題を出題
  const rnd = Math.floor(Math.random() * textList.length);
  //全問題数をカウント
  count++;

  //前の文字列を削除してから次の文字列を表示する
  text.textContent = '';

  //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
  checkTexts = textList[rnd].split('').map(function(value) {
    var span = document.createElement('span');
    span.textContent = value;
    text.appendChild(span);

    return span;
  });

 /* text.textContent = textList[rnd];
  form.input.value = '';
  form.input.focus();*/
}


//キーボードからの入力は「e.key」に格納されている
window.addEventListener('keydown', e => {
  if(!state)return;
  
  if(e.key === checkText[0].textContent) { 
    console.log("score");
    checkText[0].className = 'add-blue';

    //正解
    score++;
    scoreLabel.textContent = score;
    judg = '○';
    changeColor(judg);
    
    //0番目の配列要素を削除して、次の1文字を比較対象にする
    checkText.shift(); 
  }else{
    //タイプミス
    miss++;
    missLabel.textContent = miss;
    judg = '×';
    changeColor(judg);
  }
  
  //配列要素が空っぽになったら次の問題を出す
  if(!checkTexts.length) createText();
});

//文字の色を変える
function changeColor(judg){
  if(judg === '○'){
    //文字を赤色に変更する
    document.getElementById('result').style.color = 'RED';
    result.textContent = '○';
  } else {
    //文字を青色に変更する
    document.getElementById('result').style.color = 'BLUE';
    result.textContent = '×';
  }
}
