const addToDb = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("apply-jobs");
  console.log(storedCart);
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  console.log(shoppingCart);

  const quantity = shoppingCart[id];
  console.log(quantity);

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("apply-jobs", JSON.stringify(shoppingCart));
};

export { addToDb };
