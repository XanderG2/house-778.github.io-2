const correctCom = ['0', '0', '7', '6', '4'];
let userin = [];
var count = 0;
document.addEventListener("keydown", function(event) {
  const keyp = event.key;
  if (keyp === "Backspace") {
    userin.pop();
  } else if (keyp === "ArrowRight" || /^[a-zA-Z0-9]$/.test(keyp)) {
    userin.push(keyp);
  }
  if (JSON.stringify(userin) === JSON.stringify(correctCom)) {
    userin = [];
    window.sessionStorage.logedin = "yes";
    window.location.href = "index.html";
  } else {
    count = userin.length;
    let dots = '';
    for (let i = 0; i < count; i++) {
      dots += '.';
    }
    document.getElementById('pass').innerText = dots;
  }
});
