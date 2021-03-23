const persone = {
  name: "Alex",
  tel: "+380960820805",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = "Ann";
console.log(persone);
console.log(clone);
