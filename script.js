const openStockContainer = (stock) => {
  let stockCheckboxInput = stock.children[2].children[0];
  let stockCheckboxDetailsContainer = stock.children[2].children[2];

  if (stockCheckboxInput.checked) {
    stock.style.marginBottom = `${
      stockCheckboxDetailsContainer.offsetHeight + 17
    }px`;
  } else {
    stock.style.marginBottom = "0px";
  }
};
