const instructions = document.getElementById(`instructions`);
const result = document.getElementById(`result`);
const countDown = document.getElementById(`countdown-number`);
const countDownBox = document.getElementById(`countdown-box`);
const rollDiceBtn = document.getElementById(`rollDice`);
const newGameBtn = document.getElementById(`newGame`);
const instructionBtn = document.getElementById(`instructionsBtn`);
const peterInfo = document.getElementById(`infoPeter`);
const loisInfo = document.getElementById(`infoLois`);
const chrisInfo = document.getElementById(`infoChris`);
const megInfo = document.getElementById(`infoMeg`);
const stewieInfo = document.getElementById(`infoStewie`);
const brianInfo = document.getElementById(`infoBrian`);
const closePopUp01 = document.getElementById(`close-pop-up01`);
const closePopUp02 = document.getElementById(`close-pop-up02`);
const output01 = document.getElementById(`output01`);
const yourScore = document.getElementById(`yourScore`);
const yourTotal = document.getElementById(`yourTotal`);
const opponentScore = document.getElementById(`opponentScore`);
const opponentTotal = document.getElementById(`opponentTotal`);
const countDownText = document.getElementById(`countDownText`);
const refreshTime = 7000;
const endingValue = 0;

// variable Total01 of player 1 final Total
let Total01 = 0;

// variable Total01 of player 2 final Total
let Total02 = 0;

// variable timehandler for animation setTimeout
let timerHandler;

// variable count for roll the dice button count
let count = 0;

// variable clickBtn for counting instructions button count
let clickBtn = 0;

// varibale currentValue for count down function
let currentValue = countDown.textContent;

// varibale timer for count down function
let timer;

// Not displaying character info popup initially
instructions.style.display = "none";

// Not displaying character info popup initially
result.style.display = "none";

// Not displaying character info popup initially
peterInfo.style.display = "none";

// Not displaying character info popup initially
loisInfo.style.display = "none";

// Not displaying character info popup initially
chrisInfo.style.display = "none";

// Not displaying character info popup initially
megInfo.style.display = "none";

// Not displaying character info popup initially
stewieInfo.style.display = "none";

// Not displaying character info popup initially
brianInfo.style.display = "none";

// setTimeout function for displaying instructions
timerHandler = setTimeout(function () {
  instructions.style.display = "block";
}, refreshTime);

// close popup click function for instructions
closePopUp01.addEventListener(`click`, function () {
  instructions.style.display = "none";
});

// close popup click function for result popup
closePopUp02.addEventListener(`click`, function () {
  result.style.display = "none";
});

// countdown function before the game starts
timer = setInterval(function () {
  currentValue--;
  countDown.textContent = currentValue;
  if (currentValue <= endingValue) {
    clearInterval(timer);
    countDownBox.style.display = "none";
  }
  if (currentValue == 2) {
    countDown.innerHTML = `Are U ready`;
  }
  if (currentValue == 1) {
    countDown.innerHTML = `Let's Play !! `;
  }
}, 1000);

//click function for game end after 3 clicks of roll the dice button
function click() {
  count = count + 1;
  if (count == 3) {
    result.style.display = "block";
    $(".rollDice").prop("disabled", true);
    $(".rollDice").css("cursor", "not-allowed");
  }
}

//rollDice button click function for dice game
rollDiceBtn.addEventListener("click", function () {
  // cleartimeout function to stop instructions display
  clearTimeout(timerHandler);
  instructions.style.display = "none";
  countDownBox.style.display = "none";
  rollTheDice();
  click();
});

// new game button reset the game
newGameBtn.addEventListener(`click`, function () {
  yourScore.innerHTML = "";
  opponentScore.innerHTML = "";
  yourTotal.innerHTML = "";
  opponentTotal.innerHTML = "";
  Total01 = 0;
  Total02 = 0;
  count = 0;
  $(".rollDice").prop("disabled", false);
  $(".rollDice").css("cursor", "pointer");
  result.style.display = "none";
});

function mouseOver1() {
  peterInfo.style.display = "block";
}
function mouseOut1() {
  peterInfo.style.display = "none";
}

function mouseOver2() {
  loisInfo.style.display = "block";
}
function mouseOut2() {
  loisInfo.style.display = "none";
}
function mouseOver3() {
  megInfo.style.display = "block";
}
function mouseOut3() {
  megInfo.style.display = "none";
}

function mouseOver4() {
  chrisInfo.style.display = "block";
}
function mouseOut4() {
  chrisInfo.style.display = "none";
}
function mouseOver5() {
  stewieInfo.style.display = "block";
}
function mouseOut5() {
  stewieInfo.style.display = "none";
}
function mouseOver6() {
  brianInfo.style.display = "block";
}
function mouseOut6() {
  brianInfo.style.display = "none";
}
peter.addEventListener(`mouseover`, mouseOver1);
peter.addEventListener(`mouseout`, mouseOut1);

lois.addEventListener(`mouseover`, mouseOver2);
lois.addEventListener(`mouseout`, mouseOut2);

meg.addEventListener(`mouseover`, mouseOver3);
meg.addEventListener(`mouseout`, mouseOut3);

chris.addEventListener(`mouseover`, mouseOver4);
chris.addEventListener(`mouseout`, mouseOut4);

stewie.addEventListener(`mouseover`, mouseOver5);
stewie.addEventListener(`mouseout`, mouseOut5);

brian.addEventListener(`mouseover`, mouseOver6);
brian.addEventListener(`mouseout`, mouseOut6);

// function instructionsPopUp for displaying instructions
// and double click to diplay "none"
function clickPopUp() {
  clickBtn = clickBtn + 1;
  if (clickBtn % 2 == 0) {
    instructions.style.display = "none";
  } else {
    instructions.style.display = "block";
  }
}

// instructions button click function
instructionBtn.addEventListener(`click`, function () {
  clickPopUp();
});

// images of the dice 1 to 6 in jpg format
let images = [
  "dice-1.jpg",
  "dice-2.jpg",
  "dice-3.jpg",
  "dice-4.jpg",
  "dice-5.jpg",
  "dice-6.jpg",
];

// variable dice for querySelector for all images
let dice = document.querySelectorAll("img");

// main game function rollTheDice includes
// animation of dice's images when click
// roll the dice button
function rollTheDice() {
  let yourCurrentScore = 0;
  let opponentCurrentScore = 0;
  dice.forEach(function (move) {
    move.classList.add("roll");
  });

  setTimeout(function () {
    dice.forEach(function (move) {
      move.classList.remove("roll");
    }, 2000);
  });

  // Player 1 dice 1 math function
  // calculating dice value with
  // respect to image of the dice
  let yourDice01 = Math.floor(Math.random() * 6 + 1);
  let diceLocation01 = "images/" + "dice-" + yourDice01 + ".jpg";
  document.querySelector("#dice-img01").setAttribute("src", diceLocation01);

  // Player 1 dice 2 math function
  // calculating dice value with
  // respect to image of the dice
  let yourDice02 = Math.floor(Math.random() * 6 + 1);
  let diceLocation02 = "images/" + "dice-" + yourDice02 + ".jpg";
  document.querySelector("#dice-img02").setAttribute("src", diceLocation02);

  // Player 2 dice 1 math function
  // calculating dice value with
  // respect to image of the dice
  let opponentDice01 = Math.floor(Math.random() * 6 + 1);
  let diceLocation03 = "images/" + "dice-" + opponentDice01 + ".jpg";
  document.querySelector(`#dice-img03`).setAttribute("src", diceLocation03);

  // Player 2 dice 2 math function
  // calculating dice value with
  // respect to image of the dice
  let opponentDice02 = Math.floor(Math.random() * 6 + 1);
  let diceLocation04 = "images/" + "dice-" + opponentDice02 + ".jpg";
  document.querySelector(`#dice-img04`).setAttribute("src", diceLocation04);

  //if statement for Player 1 dice value
  if (yourDice01 == 1 || yourDice02 == 1) {
    yourCurrentScore = 0;
  } else if (yourDice01 === yourDice02) {
    yourCurrentScore = yourDice01 * 4;
  } else {
    yourCurrentScore = yourDice01 + yourDice02;
  }
  Total01 += yourCurrentScore;
  // if statement for player 2 dice value
  if (opponentDice01 == 1 || opponentDice02 == 1) {
    opponentCurrentScore = 0;
  } else if (opponentDice01 === opponentDice02) {
    opponentCurrentScore = opponentDice01 * 4;
  } else {
    opponentCurrentScore = opponentDice01 + opponentDice02;
  }

  Total02 += opponentCurrentScore;
  let result = "result";

  // const varibale for display image at
  // the end of game in result popup
  const winner = document.getElementById(`gif01`);

  // if statement for result popup
  // calculating highest score after 3 dice roll
  // displaying if Player 1(You) winner, Not winner
  // or if its draw with gif image
  if (Total01 > Total02) {
    output01.innerHTML = `Congralutions !! You are a WINNER !!`;
    winner.src = `images/${result}-1.gif`;
    winner.style.visibility = "visible";
  } else if (Total01 < Total02) {
    output01.innerText = `OH NO !! You are not a Winner !! Please play again.`;
    winner.src = `images/${result}-2.gif`;
    winner.style.visibility = "visible";
  } else if (Total01 == Total02) {
    output01.innerHTML = `Wow !! It's a Draw !! Please Play again.`;
    winner.src = `images/${result}-3.gif`;
    winner.style.visibility = "visible";
  }
  yourScore.innerHTML = yourCurrentScore;
  opponentScore.innerHTML = opponentCurrentScore;
  yourTotal.innerHTML = Total01;
  opponentTotal.innerHTML = Total02;
}
