const btn_id = document.getElementById('btn_id');
const openDiv = document.getElementById('openDiv');
const clock = document.getElementById('clock');
const btnDivOpen_id = document.getElementById('btnDivOpen_id');
const cencelDivId = document.getElementById('cencelDivId');
const bigAnswer_id = document.getElementById('bigAnswer_id');
const answerDiv = document.getElementById('answerDiv');
const answerDiv_loop = document.getElementById('answerDiv_loop');
const footer_id = document.getElementById('footer_id');
const armenia = document.getElementById('armenia');
const jsDiv_id = document.getElementById('jsDiv_id');
const mp3 = document.getElementById('mp3');
const finish = document.getElementById('finish');
const badDeveloperOpen = document.getElementById('badDeveloperOpen');
const normalDeveloperOpen = document.getElementById('normalDeveloperOpen');
const goodDeveloperOpen = document.getElementById('goodDeveloperOpen');
const rightNewAnswer = [];
const allAnswer = [];


const rightAnswer = [
  '1. տիպիզացված և դինամիկ',
  '3. LiveScript',
  '3. number, undefined',
  '2. false',
  '1. true',
  '3. rld',
  '1. 0',
  '1. false',
  '3. ReferenceError',
  '4.  false',
  '4.  hello world in 1 sec',
];

const arrayQuestion = [
  'Ինչպիսի լեզու է JavaScript - ը:',
  'Երբ ստեղծվեց JavaScript - ը, այն ինչ անուն ուներ:',
  'Որ շարքի բոլոր տիպերն են համարվում պարզ տիպեր:',
  'Ինչ կտպի մատյանում // console.log(true === ("two" > "three"))',
  'Ինչ կտպի մատյանում // let ­o ­=­ {x:1},­p ­=­ {x:1}; ** o === p',
  'Ինչ կտպի մատյանում // let text =­ "hello ­world"; ** text.slice(-3)',
  'function func () {let frutis = [" apple", " orange", " apple", "banana"]; console.log(frutis.indexOf("apple")); }; func()',
  'Ինչ կտպի մատյանում // console.log(0 == true || 1 === false)',
  'console.log(typeof undefined === NULL || typeof undefined == null)',
  'Ինչ կտպի մատյանում // let d = new Date(); let b = [1,2,3]; console.log(d instanceof Number && b instanceof Object)',
  'function func () {console.log("hello world")}; let infun = func; setInterval(infun, 1000);',
]

const arrayAnswers = [
  ['տիպիզացված և դինամիկ','չտիպիզացված բայց դինամիկ','ինտերպրիտացվող և ոչ դինամիկ','կոմպլիտացվող և ստատիկ'],
  ['EcmaScript','Java','LiveScript','TypeScript'],
  ['array, functin', 'string, null, regExp', 'number, undefined','object, string'],
  ['true', 'false', '0', 'NaN'],
  ['false', 'true', 'NaN', 'Syntax Error'],
  [' ld', 'wor', 'rld', 'hel'],
  ['0', 'apple', '1', 'a'],
  ['false', 'true', 'null', 'Type Error'],
  ['true', 'false', 'ReferenceError', 'Sytax Error'],
  ['Syntax Error', ' Booleon', ' true', ' false'],
  ['hello world',' TypeError', ' undefined', ' hello world in 1 sec'],
];


function getListContentOne () {
  const resOne = [];
  for(let i = 0; i <= arrayQuestion.length; i++) {
    const div = document.createElement('div');
    div.className = "questionDiv";
    div.id = i
    div.innerHTML = i + 1 + '. ' + arrayQuestion[i]
    div.append()
    resOne.push(div)
  }
  return resOne
}

function getListContentTwo (id) {
  const resTwo = [];
  for(let i = 0; i < arrayAnswers[id].length; i++) {
    const section = document.createElement('section');
    section.className = "answer";
    section.id = i;
    section.innerHTML = i + 1 + '. ' + arrayAnswers[id][i];
    section.append();
    resTwo.push(section);
  }      
  return resTwo
}

btn_id.addEventListener('click', (event) => {
  if(event.target.innerHTML === 'Սկսեցինք') {
    btnDivOpen_id.style.display = 'block';
    setTimeout(function(){
      clock.style.opacity = '1';
      finish.style.opacity = '1';
      setInterval(function() {
        mp3.play()
        clock.innerHTML--;
      }, 1000);
        openDiv.style.display = 'block';
        footer_id.style.backgroundColor = '#01A1B9';
        armenia.style.color = 'rgb(207, 204, 37)';
        jsDiv_id.style.color = 'rgb(207, 204, 37)';
        openDiv.append(...getListContentOne());
    }, 1000);
  }
})

openDiv.addEventListener('click', function(event) {
  if(event.target.className === "questionDiv") {
    answerDiv_loop.append(...getListContentTwo(event.target.id));
    bigAnswer_id.innerHTML = event.target.innerHTML;
    answerDiv.style.display = 'block';
    openDiv.style.display = 'none';  
    footer_id.style.backgroundColor = '#FFD29A'; 
    armenia.style.color = '#01A1B9'; 
    jsDiv_id.style.color = '#01A1B9';
  }
});

answerDiv_loop.addEventListener('click', function(event) {
  for(let i = 0 ;i < rightAnswer.length; i++) {
    if(event.target.className === 'answer') {
      answerDiv.style.display = 'none';
      openDiv.style.display = 'block';
      answerDiv_loop.innerHTML = '';
      if(event.target.innerHTML === rightAnswer[i]){
        rightNewAnswer.push(event.target.innerHTML)
      }
    }
  }
})

window.addEventListener('click', (event) => {
  if(event.target.innerHTML === 'Ավարտել') {    
    if (rightNewAnswer.length !== 0 ) {
      if(rightNewAnswer.length <= 4) {
        badDeveloperOpen.style.display = 'block';
        openDiv.style.display = 'none';
        finish.style.display = 'none';
        clock.style.display = 'none';
      }
      else if (rightNewAnswer.length <= 8) {
        normalDeveloperOpen.style.display = 'block';
        openDiv.style.display = 'none';
        finish.style.display = 'none';
        clock.style.display = 'none';
      }
      else if (rightNewAnswer.length <= 11) {
        goodDeveloperOpen.style.display = 'block';
        openDiv.style.display = 'none';
        finish.style.display = 'none';
        clock.style.display = 'none';
      } 
    }
  }
})




