function storage(input) {
  let newStorage = {};

  for (const line of input) {
    let [product, quantity] = line.split(" ");

    if (!newStorage.hasOwnProperty(product)) {
      newStorage[product] = +quantity;
    } else {
      newStorage[product] += +quantity;
    }
  }
for(let product in newStorage){
    console.log(`${product} -> ${newStorage[product]}`);
}
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
