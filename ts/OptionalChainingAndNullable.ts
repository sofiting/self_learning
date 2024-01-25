class Citizen {
  public address?: { street?: { name?: string } };

  constructor(address?: { street?: { name?: string } }) {
    this.address = address;
  }
}

const citizen = new Citizen(); // Create an instance of Citizen

//si no uso chaining
// if(citizen.address && citizen.address.street $$ citizen.address.street.name)
if (citizen?.address?.street?.name === "Plaza Españna") {
  // Do something
  console.log("Street name is Plaza Españna");
} else {
  console.log("Street name is not Plaza Españna or is not defined");
}

//nullable ??
function f(stringOrNull: string | null): string {
  return stringOrNull ?? "default";
}

/*
function f(stringOrNull: string | null): string {
  if (stringOrNull == null) {
    return "default";
  }
  return stringOrNull;
}
*/

const result = f(null);
const result2 = f("hi");
console.log(result, result2);
