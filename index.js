const element = document.getElementById('element');
var btn = document.getElementById('btn');
const text = document.getElementById('text');
const element2 = document.getElementById('element2');
var text2 = document.getElementById('text2');
const timer = document.getElementById('timer');
const resultLabel = document.getElementById("result");
const scoreLabel = document.getElementById("score");
const missLabel = document.getElementById("miss");
const input = document.getElementById("textbox");

const textLists = [
  'apple',
  'window',
  'myself',
  'hellow',
  'welcome',
  'orange',
  'good',
  'airplane',
  'airport',
  'animal',
  'answer',
  'artist',
  'address',
  'action',
  'alcohol',
  'area',
  'arm',
  'autumn',
  'average',
  'aunt',
  'afternoon',
  'amount',
  'april',
  'august',
  'age',
  'advice',
  'art',  
  'baby',
  'bag',
  'banana',
  'baseball',
  'bicycle',
  'bird',
  'blackboard',
  'back',
  'bathroom',
  'bank',
  'basketball',
  'beach',
  'beef',
  'beer',
  'belt',
  'boat',
  'body',
  'book',
  'bridge',
  'butter',
  'cake',
  'candy',
  'cat',
  'cheese',
  'cherry',
  'chocolate',
  'clock',
  'coffee',
  'cloud',
  'color',
  'computer',
  'company',
  'camera',
  'campaign',
  'captain',
  'car',
  'card',
  'cell',
  'chair',
  'century',  
  'daughter',
  'dictionary',
  'doctor',
  'dog',
  'drink',
  'dress',
  'discount',
  'development',
  'desk',
  'department',
  'date',
  'design',
  'diary',
  'dinner',
  'direction',
  'door',
  'drawer',
  'doll',
  'dollar',
  'dream',
  'ear',
  'earth',
  'east',
  'edge',
  'education',
  'effect',
  'efficiency',
  'egg',
  'eight',
  'eleven',
  'end',
  'english',
  'entrance',
  'evening',
  'event',
  'example',
  'exercise',
  'experience',
  'eye',
  'earthquake',
  'face',
  'factory',
  'fall',
  'family',
  'farmer',
  'father',
  'field',
  'finger',
  'fire',
  'fish',
  'five',
  'flag',
  'flower',
  'food',
  'football',
  'forest',
  'friend',
  'fruit',
  'furniture',
  'four',
  'game',
  'garden',
  'gate',
  'gift',
  'girl',
  'glass',
  'glove',
  'god',
  'golf',
  'graduation',
  'grandfather',
  'grandmother',
  'grape',
  'grass',
  'ground',
  'growth',
  'guess',
  'guest',
  'guide',
  'general',
  'hair',
  'half',
  'hall',
  'hand',
  'hat',
  'head',
  'health',
  'heart',
  'heat',
  'hill',
  'hole',
  'holiday',
  'homework',
  'hospital',
  'hotel',
  'horse',
  'house',
  'human',
  'hundred',
  'husband',
  'ice',
  'idea',
  'image',
  'information',
  'idol',
  'illumination',
  'imperial',
  'important',
  'importation',
  'impression',
  'index',
  'indoor',
  'inducement',
  'infrastructure',
  'initiative',
  'ink',
  'innovation',
  'insect',
  'install',
  'intelligence',
  'jacket',
  'jam',
  'japanese',
  'january',
  'jet',
  'job',
  'judge',
  'juice',
  'july',
  'june',
  'journalist',
  'jewelry',
  'jellyfish',
  'junction',
  'jupiter',
  'jungle',
  'joint',
  'jockey',
  'jeans',
  'jazz',
  'key',
  'king',
  'kitchen',
  'knife',
  'kettle',
  'kind',
  'knight',
  'knowledge',
  'knock',
  'kilometer',
  'kilogram',
  'kaleidoscope',
  'keyword',
  'kick',
  'kid',
  'keeper',
  'kelp',
  'keyboard',
  'kidney',
  'kindergarten',
  'lady',
  'lake',
  'lamp',
  'land',
  'language',
  'leader',
  'leaf',
  'leave',
  'leg',
  'lemon',
  'lesson',
  'letter',
  'level',
  'library',
  'life',
  'light',
  'lion',
  'list',
  'locker',
  'lunch',
  'magazine',
  'man',
  'manager',
  'musician',
  'market',
  'mathematics',
  'meaning',
  'museum',
  'meeting',
  'melon',
  'member',
  'message',
  'milk',
  'million',
  'minute',
  'mistake',
  'mountain',
  'money',
  'morning',
  'mother',
  'name',
  'nature',
  'newspaper',
  'neck',
  'neighbor',
  'nephew',
  'niece',
  'night',
  'notebook',
  'number',
  'nose',
  'north',
  'noon',
  'noise',
  'navigator',
  'necktie',
  'network',
  'next',
  'noodle',
  'nourishment',
  'office',
  'operation',
  'one',
  'order',
  'oven',
  'octopus',
  'observation',
  'offense',
  'offline',
  'onion',
  'online',
  'opening',
  'optimize',
  'option',
  'orchestra',
  'organization',
  'organic',
  'origin',
  'ornament',
  'outbreak',
  'parent',
  'park',
  'party',
  'paint',
  'pattern',
  'peace',
  'peach',
  'pencil',
  'percent',
  'period',
  'person',
  'piano',
  'picture',
  'plan',
  'player',
  'position',
  'practice',
  'president',
  'program',
  'product',
  'quality',
  'quarter',
  'queen',
  'question',
  'quick',
  'quiz',
  'quiet',
  'quarrel',
  'quantum',
  'qualification',
  'quadrangle',
  'quest',
  'query',
  'quiver',
  'quotation',
  'queue',
  'quake',
  'quaint',
  'quell',
  'queer',
  'rabbit',
  'radio',
  'rain',
  'raise',
  'rate',
  'reason',
  'race',
  'rack',
  'record',
  'refrigerator',
  'research',
  'rest',
  'restaurant',
  'rice',
  'river',
  'role',
  'rugby',
  'rule',
  'ring',
  'rose',
  'sample',
  'sandwich',
  'school',
  'science',
  'season',
  'sense',
  'service',
  'seven',
  'supermarket',
  'shelf',
  'shirt',
  'shoulder',
  'shower',
  'sight',
  'sister',
  'skirt',
  'soccer',
  'speech',
  'student',
  'summer',
  'teacher',
  'telephone',
  'television',
  'tennis',
  'textbook',
  'theater',
  'thousand',
  'tomorrow',
  'training',
  'trouble',
  'twelve',
  'toast',
  'today',
  'tower',
  'taste',
  'table',
  'team',
  'three',
  'time',
  'test',
  'uncle',
  'university',
  'umbrella',
  'ultraviolet',
  'understanding',
  'uniform',
  'universal',
  'university',
  'universe',
  'unknown',
  'unravel',
  'unlimited',
  'update',
  'useful',
  'usually',
  'utopia',
  'utterance',
  'urgency',
  'upgrade',
  'unlock',
  'vacation',
  'vegetable',
  'village',
  'voice',
  'valiant',
  'vanilla',
  'variation',
  'vendor',
  'verification',
  'version',
  'victorious',
  'video',
  'violinist',
  'violation',
  'virtuoso',
  'visual',
  'vitality',
  'volcano',
  'volleyball',
  'volunteer',
  'wallet',
  'weather',
  'weight',
  'whiskey',
  'world',
  'writer',
  'woman',
  'winter',
  'while',
  'weekday',
  'weekend',
  'watch',
  'water',
  'word',
  'wood',
  'watermelon',
  'wavelength',
  'weapon',
  'wedding',
  'wellbeing',
  'yard',
  'yogurt',
  'yesterday',
  'yellow',
  'youngster',
  'yacht',
  'yourself',
  'youthfult',
  'yummy',
  'yearbook',
  'yearning',
  'zealot',
  'zebra',
  'zenith',
  'zero',
  'zinc',
  'zodiac',
  'zone',
  'zoo',
  'zoom',
  'wonderful',
  'woodpecker',
  'workshop',
  'conference',
  'counselor',
  'counterattack',
  'horizon',
  'hospitality',
  'humiliation',
  'hydrogen',
  'tournament',
  'trademark',
  'transformation'
];

let TIME;
let count;
let state = false;
let rnd;

let score;
let miss;

var checkTexts = [];

//プレーヤーネームを入力するテキストボックス関連の制御
//イベント関数を無効にする
const disableEvent = e => {
  e.preventDefault();
  e.stopPropagation();
};
//ペーストを無効にする
input.addEventListener("paste", disableEvent);
//ドラッグ&ドロップを無効にする
input.addEventListener("drop", disableEvent);
//文字列を削除する
input.addEventListener("keyup", function(e) {
  let tmp = [];
  this.value.split("").forEach(function(item, i) {    
    if (item.match(/^[\u3040-\u309f]+$/)) {
      tmp.push(item);
    }
  });
  if (tmp.length > 0) {
    this.value = tmp.join("");
  } else {
    this.value = "";
  }
});

//プレーヤーネームを入力するテキストボックスに値が入力されているかどうか判定
function check() {
      if (input.value === "") {
        alert("名前が未入力です。");
        return false;
      }
      return true;
  }
}

function btnpush() {
  //各項目の初期化
  TIME = 30;
  count = 0;
  score = 0;
  miss = 0;
  resultLabel.textContent = count;
  scoreLabel.textContent = score;
  missLabel.textContent = miss;
  checkTexts = [];

  //プレーヤーネームを入力するテキストボックスの削除処理
  input.remove();
  //ボタン削除処理
  btn.remove();

  if (text2 !== null){
    // text2が存在する場合のみtext2要素を削除
    text2.remove();
  }
  
  createText();

//制限時間のカウント
const countdown = setInterval(function() {
  timer.textContent = '制限時間：' + --TIME + '秒';
  if(TIME <= 0) finish();
}, 1000);

  state = true;

//ゲーム終了
function finish() {
  clearInterval(countdown);
  
　//正確率を算出
  const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  //得点を算出（正しく打ったキーの数 - ミスタイプ数 = 得点）
　const point = score - miss
  
　//text2要素作成
　var newElement3 = document.createElement("h2"); // h2要素作成
  newElement3.setAttribute("id","text2"); // h2要素にidを設定
  element2.append(newElement3);// element2要素の後に追加
  text2 = document.getElementById('text2');
　
  text.textContent = 'ゲーム終了！';
  text2.textContent = input.value + 'の得点は' + Math.max(point, 0) + '点でした！正確率は' + Math.round(accuracy) + '%でした！';

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
  rnd = Math.floor(Math.random() * textLists.length);
  //全問題数をカウント
  count++;
  resultLabel.textContent = count;

  //前の文字列を削除してから次の文字列を表示する
  text.textContent = '';

  //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
  checkTexts = textLists[rnd].split('').map(function(value) {
    var span = document.createElement('span');
    span.textContent = value;
    text.appendChild(span);

    return span;
  });
}

//キーボードからの入力は「e.key」に格納されている
window.addEventListener('keydown', e => {
  if(state !== true){
    return;
  }

  if(e.key === checkTexts[0].textContent) {
    if(!state)return;
    checkTexts[0].className = 'add-blue';

    //正解
    score++;
    scoreLabel.textContent = score;
    
    //0番目の配列要素を削除して、次の1文字を比較対象にする
    checkTexts.shift();
    //配列要素が空っぽになったら次の問題を出す
    if(!checkTexts.length)createText();
    e.stopImmediatePropagation();
  }else{
    if(!state)return;
    
    //タイプミス
    miss++;
    missLabel.textContent = miss;
    e.stopImmediatePropagation();
  }
});
};
