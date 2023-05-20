let mainText = document.querySelector("h1");

// 스크롤의 높이에 따라 애니메이션이 들어왔다 나갔다를 해볼건데..
// 그러면 스크롤의 높이를 일단 가져와야한다.
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);
  if (value > 300) {
    mainText.style.animation = "disappear 2s ease-out forwards"; // forwards : 영영사라지게..
  } else {
    mainText.style.animation = "slide 2s ease-out";
  }
});
//hihi
