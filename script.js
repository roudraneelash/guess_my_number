//if guess==secret num , background col, .number width chnages, and display secretNum
//if guess is empty , warning msg of not a number
//if guess is !=secretnum and while score >1
//if guess  is too low, warning msg too low,deduct score
//if guess is too high,warning msg too hight,deduct score

let secretNum = Math.trunc(Math.random() * 20 + 1);
let count = 20;
let max = 0;

const guess = document.querySelector('.guess');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const num = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

score.innerText = count;
highscore.innerText = max;

check.addEventListener('click', function () {
  const input = Number(guess.value);
  //if input is blank
  if (!input) {
    message.innerText = '⛔ Not a number';
  } else if (input != secretNum) {
    if (count > 1) {
      message.innerText = input > secretNum ? '📈 Tow High' : '📉 Too Low';
      count--;
      score.innerText = count;
    } else {
      score.innerText = count;
      message.innerText = '💥 G Game Lost!';
    }
  } else {
    document.querySelector('body').style.backgroundColor = '#60b347';
    num.style.width = '30rem';
    message.innerText = '🎉 Correct Number!';
    num.innerText = secretNum;
    max = Math.max(max, count);
    highscore.innerText = max;
  }
});

again.addEventListener('click', function () {
  count = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  score.innerText = count;
  num.innerText = '?';
  guess.value = null;
  message.innerText = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
