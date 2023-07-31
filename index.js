const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("meridian");

function digitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? `0 ${h}` : h;
  hourEl.innerText = h;
  m = m < 10 ? `0 ${m}` : m;
  minuteEl.innerText = m;
  s = s < 10 ? `0 ${s}` : s;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    digitalClock();
  }, 1000);
}
digitalClock();
