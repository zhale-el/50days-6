const boxes = document.querySelectorAll(".box");
checkBoxes();
function checkBoxes() {
  const tiggerBottom = (window.innerHeight * 3) / 5;

  console.log(tiggerBottom, window.innerHeight);
  boxes.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < tiggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", checkBoxes);
