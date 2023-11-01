let counter = 1;

$("#flipbook").turn({
  width: 600,
  height: 450,
  autoCenter: true,
});

function updateProgressBar() {
  const completedWidth = (counter / 36) * 100;
  const remainingWidth = 100 - completedWidth;

  document.getElementById("completed-bar").style.width = `${completedWidth}%`;
  document.getElementById("remaining-bar").style.width = `${remainingWidth}%`;
}

function increase() {
  if (counter < 35) counter += 2;
  else if (counter >= 35) {
    counter = 36;
    window.alert("You're already in last page");
  }

  $("#flipbook").turn("page", counter);

  updateProgressBar();
}
function decrease() {
  if (counter == 2) counter = 1;
  else if (counter > 1) counter -= 2;
  else if (counter <= 1) {
    counter = 1;
    window.alert("You're already in first page");
  }

  $("#flipbook").turn("page", counter);

  updateProgressBar();
}
