let sec = 0;
let minute;
let second;

function time1(
  secs //to pad 0 in secs
) {
  return secs > 9 ? secs : "0" + secs;
}

let set = setInterval(function() //function for time
{
  sec++;
  second = document.getElementById("seconds").innerHTML = time1(sec % 60);
  minute = document.getElementById("minutes").innerHTML = time1(
    parseInt(sec / 60)
  );
}, 1000);

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  console.log(array);
  return array;
}

// creating global array which contains all the icons.
const cardList = [
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-bomb"
];
console.log(cardList);
//function shuffling()
//{
//    var list=document.querySelectorAll('.card');
//    let shuff = shuffle(list);
//}

//ticktock();
shuffle(cardList);
hide();

// hiding the popup!
function hide() {
  var hidden = document.querySelector(".popup");
  hidden.style.visibility = "hidden";
}

var matched = [];
var moves = 0;
var temp;
var myvalue;
var mov = 0;
let time;
let myvar;

// creating cards!
const container = document.querySelector(".deck");
var opencards = [];
for (let i = 0; i < cardList.length; i++) {
  const createcards = document.createElement("li");
  createcards.classList.add("card");

  createcards.innerHTML = `<i class="${cardList[i]}"></i>`;
  container.appendChild(createcards);
  var reset = document.querySelector(".restart");
  reset.addEventListener("click", function() {
    opencards = [];
    createcards.classList.remove("open");
    createcards.classList.remove("show");
    createcards.classList.remove("match");
    createcards.classList.remove("disable");
    sec = -1;
    shuffle(cardList);
    basic();
  });
  createcards.addEventListener("click", function() {
    if (opencards.length === 1) {
      myvar = opencards;

      moves123();
      star123();
      opencards.push(this);
      createcards.classList.add("open");
      createcards.classList.add("show");
      createcards.classList.add("disable");
      if (this.innerHTML === opencards[0].innerHTML) {
        createcards.classList.add("match");
        opencards[0].classList.add("match");
        createcards.classList.add("animated", "shake");
        opencards[0].classList.add("animated", "shake");

        console.log("matched");
        matched.push(this);
        matched.push(opencards[0]);
        complete();
        opencards.pop();
        opencards.pop();
      } else {
        console.log("not matched");
        createcards.classList.add("animated", "swing", "mismatch");
        myvar[0].classList.add("animated", "swing", "mismatch");
        opencards.pop();

        setTimeout(function() {
          createcards.classList.remove("open", "show", "disable", "mismatch");
          myvar[0].classList.remove("open", "show", "disable", "mismatch");
          createcards.classList.remove("animated", "swing");
          opencards[0].classList.remove("animated", "swing");
          opencards.pop();
          opencards.pop();
        }, 300);
      }
    } else {
      moves123();
      star123();
      opencards.push(this);
      createcards.classList.add("open");
      createcards.classList.add("show");
      createcards.classList.add("disable");
    }
  });
}

// function for the game finish!
function complete() {
  if (matched.length === cardList.length) {
    won();
  }
}

//function to count the number of moves.
function moves123() {
  mov++;
  document.querySelector("#moves").innerHTML = `${mov}`;
  console.log(mov);
}

//function to hide the stars.

function star123() {
  const star1 = document.querySelector(".first");
  const star2 = document.querySelector(".second");
  const star3 = document.querySelector(".third");
  if (mov > 20) {
    star1.style.visibility = "hidden";
  }
  if (mov > 30) {
    star2.style.visibility = "hidden";
  }
}

//function to display the stars.
function basic() {
  mov = 0;
  document.querySelector("#moves").innerHTML = `${mov}`;
  const star = document.querySelectorAll(".fa-star");
  for (let i = 0; i < star.length; i++) {
    star[i].style.visibility = "visible";
  }
}

/*function ticktock() {
  myvalue = setInterval(function() {
    time++;
    let seconds = time % 60;
    let mins = time / 60;
    document.querySelector(".timer").innerHTML = ` ${time % 60}:${time / 60}`;
  }, 1000);
}*/

//function to display the popup.
function won() {
  document.getElementById("total").innerHTML = mov;
  document.getElementById("timings").innerHTML = minute + ":" + second;
  var disp = document.querySelector("#sCount");
  if (mov <= 20) {
    disp.textContent = "3";
  } else if (mov > 20 && mov <= 30) {
    disp.textContent = "2";
  } else if (mov > 30 && mov <= 45) {
    disp.textContent = "1";
  } else {
    disp.textContent = "0";
  }
  clearInterval(set);
  var hide = document.querySelector(".container");
  hide.style.opacity = "0.6";
  var pop = document.querySelector(".popup");
  pop.style.visibility = "visible";
  pop.classList.add("win");
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
