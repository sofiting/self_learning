let maxOfTries :number = 3;

function rollTheDice(userName:string):string {
  const MAX_DICE_NUMBER:number = 6;
  const result:number = Math.ceil(Math.random() * MAX_DICE_NUMBER);

  if (result === MAX_DICE_NUMBER) {
    return `${userName} is a WINNER, Dice's value is ${result}, you have ${maxOfTries} attempts`;
  } else {
    return `${userName} is a LOSER, Dice's value is ${result}, you have ${maxOfTries} attempts`;
  }
}

document.getElementById("check")!.addEventListener("click", function () {
  const nombre: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  const resultContainer: HTMLElement | null =
    document.getElementById("resultContainer");

  try {
    if (maxOfTries > 0) {
      const result: string = rollTheDice(nombre);
      resultContainer!.innerHTML += `<p>${result}</p>`;
      maxOfTries--;
    }

    if (maxOfTries === 0) {
      resultContainer!.innerHTML += `<p>${nombre} hasn't more attempts</p>`;
    }
  } catch (error) {
    alert(error.message);
  }
});