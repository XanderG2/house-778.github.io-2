
function Moile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


if (Moile()) {
  window.location.href = "mobillog.html"
}