
const para = document.querySelector("#para");

setInterval(function () {
  let date = new Date().toLocaleTimeString();
  para.innerHTML = `${date}`;
}, 1000);
