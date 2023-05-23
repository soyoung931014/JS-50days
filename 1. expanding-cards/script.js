const panels = document.querySelectorAll(".panel");
console.log(panels);

// active 추가하기
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // 지우는 함수를 추가해주자
    removeActive();
    panel.classList.add("active");
  });
});
function removeActive() {
  return panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
