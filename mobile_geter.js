function isMobileDevice() {
  return window.innerWidth <= 1050;
}

// Example usage
if (isMobileDevice()) {
  window.location.href = mobillog.html;
}