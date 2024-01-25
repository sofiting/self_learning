let maxOfTries = 3;

function rollTheDice(userName) {
  const MAX_DICE_NUMBER = 6;
  const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

  if (result === MAX_DICE_NUMBER) {
    return `${userName} is a WINNER, Dice's value is ${result}, you have ${maxOfTries} attempts`;
  } else {
    return `${userName} is a LOSER, Dice's value is ${result}, you have ${maxOfTries} attempts`;
  }
}

document.getElementById("check").addEventListener("click", function () {
  const nombre = document.getElementById("name").value;
  const resultContainer = document.getElementById("resultContainer");

  try {
    if (maxOfTries > 0) {
      maxOfTries--;
      const result = rollTheDice(nombre);
      resultContainer.innerHTML += `<p>${result}</p>`;
    }

    if (maxOfTries === 0) {
      resultContainer.innerHTML += `<p>${nombre} hasn't more attempts</p>`;
    }
  } catch (error) {
    alert(error.message);
  }
});
