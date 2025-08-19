// Example animation effect (optional)
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.boxShadow = "0px 0px 15px red";
  });
  icon.addEventListener('mouseout', () => {
    icon.style.boxShadow = "none";
  });
});
