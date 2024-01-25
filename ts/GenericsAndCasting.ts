//generics <T> DENTRO PUEDE SER OTRA COSA
function identity<T>(arg: T): T {
  return arg;
}

/*
function identity<T,Z>(arg: T,arg2:Z): T {
  return arg;
}

const str = identity<string,boolean>("one",true);
*/
const str = identity<string>("one");
const str2 = identity<number>(22);

class Generic<G> {
  public items: G[] = [];
}

const inst = new Generic<string>();
inst.items.push("hi");

const inst2 = new Generic<number>();
inst2.items.push(11);

//casting
type Maquina = {
  name: string;
};

const objeto = {
  name: "lilo",
} as Maquina;

//str to number
const sofi = "sofia" as any as number;
const sofi2 = "sofia" as unknown as number;
