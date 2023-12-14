// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let player = "X";
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  fillButton(index, player);
  if (player == "X") {
    document.getElementById(index).style.color = "green";
    player = "O";
  } else {
    document.getElementById(index).style.color = "red";

    player = "X";
  }
  checkWinner();
}

function checkWinner() {
  let b1 = document.getElementById(1).innerHTML;
  let b2 = document.getElementById(2).innerHTML;
  let b3 = document.getElementById(3).innerHTML;
  let b4 = document.getElementById(4).innerHTML;
  let b5 = document.getElementById(5).innerHTML;
  let b6 = document.getElementById(6).innerHTML;
  let b7 = document.getElementById(7).innerHTML;
  let b8 = document.getElementById(8).innerHTML;
  let b9 = document.getElementById(9).innerHTML;
  if (b1 == b2 && b1 == b3 && b1 != "") {
    winningAlert(b1);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b1 == b4 && b1 == b7 && b1 != "") {
    winningAlert(b1);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b2 == b8 && b2 == b5 && b2 != "") {
    winningAlert(b2);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b4 == b5 && b5 == b6 && b4 != "") {
    winningAlert(b4);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b7 == b8 && b8 == b9 && b7 != "") {
    winningAlert(b7);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b3 == b5 && b5 == b7 && b3 != "") {
    winningAlert(b3);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b1 == b5 && b5 == b9 && b1 != "") {
    winningAlert(b2);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b3 == b6 && b6 == b9 && b3 != "") {
    winningAlert(b2);
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  } else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 != "") {
    alert("Draw");
    fillButton(1, "");
    fillButton(2, "");
    fillButton(3, "");
    fillButton(4, "");
    fillButton(5, "");
    fillButton(6, "");
    fillButton(7, "");
    fillButton(8, "");
    fillButton(9, "");
  }
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
