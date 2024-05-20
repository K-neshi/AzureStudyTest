const subject = document.getElementById('subject');
const timer = document.getElementById('timer');
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

createText();

//制限時間のカウント
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);

//ゲーム終了
function finish() {
  subject.textContent = 'ゲーム終了！\r\n'+'正解数は' + count + '個でした！';
  state = false;
}

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

form.btn.addEventListener('click', function(e) {
  if(!state) return;

  if(form.input.value === subject.textContent) {
    judg = '○';
    changeColor(judg);
    count++;
    init();
    console.log(count);
  } else {
    judg = '×';
    changeColor(judg);
    setTimeout(function(){ init() },1000)
  }
});

function createText() {
  //ランダムに問題を出題
  const rnd = Math.floor(Math.random() * textList.length);

  //前の文字列を削除してから次の文字列を表示する
  subject.textContent = '';

  //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
  checkTexts = textList[rnd].split('').map(function(value) {
    var span = document.createElement('span');
    span.textContent = value;
    subject.appendChild(span);

    return span;
  });

 /* subject.textContent = textList[rnd];
  form.input.value = '';
  form.input.focus();*/
}
