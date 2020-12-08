let input = document.querySelector(".icon");
let inputResult = document.querySelector(".input-result");
let outputResult = document.querySelector(".output-result");
let h2 = document.querySelector("h2");

let intialCount = 0;

let userCount = document.querySelector(".user-count");
userCount.innerText = intialCount;

let computerCount = document.querySelector(".computer-count");
computerCount.innerText = intialCount;

let arr = ["Rock", "Paper", "Scissor"];
input.addEventListener("click", handleEvent);

function handleEvent(event) {
  console.log(event.target.dataset.set);
  let user = event.target.dataset.set;
  inputResult.innerText = `--` + user;

  let computer = arr[Math.floor(Math.random() * 3)];
  outputResult.innerText = `--` + computer;

  if (user == computer) {
    h2.innerText = "Tie";
  } else if (user == "Rock") {
    if (computer == "Scissor") {
      h2.innerText = "You won!!";
      userCount = Number(userCount) + 1;
      userCount.innerText = userCount;
      count();
    } else {
      h2.innerText = "Computer Won!!";
      computerCount = computerCount + 1;
    }
  } else if (user == "Paper") {
    if (computer == "Scissor") {
      h2.innerText = "Computer Won!!";
      count1();
    } else {
      h2.innerText = "You won!!";
      count();
    }
  } else if (user == "Scissor") {
    if (computer == "Paper") {
      h2.innerText = "You won!!";
      count();
    } else {
      h2.innerText = "Computer won!!";
      count1();
    }
  }

  function count() {
    userCount = Number(userCount) + 1;
    userCount.innerText = userCount;
    console.log(userCount);
  }
  function count1() {
    computerCount = Number(computerCount) + 1;
    computerCount.innerText = computerCount;
  }
}
// let allInp = document.querySelectorAll(".user-icon .far");

// allInp.forEach((elm) => {
//   elm.style.color = "green";
//   elm.addEventListener("click", () => {
//     elm.style.color = "black";
//   });
// });
