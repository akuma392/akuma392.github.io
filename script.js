let secondHand = document.querySelector(".sec");
let minuteHand = document.querySelector(".min");
let hourHand = document.querySelector(".hour");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secRatio = (sec / 60) * 360;
  secondHand.style.transform = `rotate(${secRatio}deg)`;
  const min = now.getMinutes();
  const minRatio = (min / 60) * 360;
  minuteHand.style.transform = `rotate(${minRatio}deg)`;
  const hour = now.getHours();
  const hourRatio = (hour / 12) * 360;
  hourHand.style.transform = `rotate(${hourRatio}deg)`;
}

setInterval(setDate, 1000);
