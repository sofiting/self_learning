const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is undefined");
  }

  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

/**
 * Should define Actions[] types
 */
type Actions = {
  name: string;
  do: (a: number, b: number) => number;
};
const ACTIONS: Actions[] = [
  {
    name: "ADD",
    do: add,
  },
  {
    name: "SUBTRACT",
    do: subtract,
  },
  {
    name: "DIVIDE",
    do: divide,
  },
  {
    name: "MULTIPLY",
    do: multiply,
  },
];

// Element is type HTMLElement
function updateUserMoneyText(element: HTMLElement, actualMoney: number) {
  element.innerHTML = actualMoney.toString();
}

function randomNumber(max: number): number {
  return Math.round(Math.random() * max);
}

type playTheGame = {
  actions: Actions[];
  totalClick: number;
  userMoney: number;
  onError: (randomIndex: number, action: Actions[]) => void;
  onSuccess?: (totalClick: number) => void;
};

function playTheGame({
  actions,
  totalClick,
  onError,
  onSuccess,
  userMoney,
}: playTheGame): never | number {
  const randomIndex = randomNumber(actions.length);
  const A_MILLION = 1000000;
  const action = actions[randomIndex];

  if (!action) {
    onError(randomIndex, actions);
    return userMoney;
  }

  if (userMoney >= A_MILLION) {
    if (typeof onSuccess === "function") {
      onSuccess(totalClick);
    }

    return userMoney;
  }

  if (userMoney <= 0) {
    throw new Error("Money must be positive");
  }

  const newMoney = Math.round(
    action.do(userMoney, randomNumber(actions.length * 100))
  );

  return newMoney;
}

function disableClickButton(
  $button: HTMLButtonElement,
  handleClick?: () => void
) {
  $button.disabled = true;

  if (typeof handleClick === "function") {
    $button.removeEventListener("click", handleClick);
  }
}

const $button = document.getElementById("button") as HTMLButtonElement;
const $userMoneyText = document.getElementById("moneyText") as HTMLElement;
let userMoney = 1000;
let totalClick = 0;

updateUserMoneyText($userMoneyText, userMoney);

$button.addEventListener("click", function handleClick() {
  totalClick++;

  const params: playTheGame = {
    actions: ACTIONS,
    totalClick,
    userMoney: userMoney,
    onError: function (index: number, actions: Actions[]) {
      console.log(index, actions);
    },
    onSuccess: function (totalClick: number) {
      disableClickButton($button, handleClick);
      console.log(
        "Te has convertido en millonario al hacer un total de: ",
        totalClick,
        " clicks"
      );
    },
  };

  userMoney = playTheGame(params);

  updateUserMoneyText($userMoneyText, userMoney);
});
