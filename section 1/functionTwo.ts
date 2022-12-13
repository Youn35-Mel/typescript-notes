const getHello = (s: string): string => {
  return "";
};

// const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3];

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
