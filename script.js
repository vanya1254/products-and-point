const openStockContainer = (stock, marginBottom = 17) => {
  const stockCheckboxInput = stock.children[2].children[0];
  const stockCheckboxDetailsContainer = stock.children[2].children[2];

  if (stockCheckboxInput.checked) {
    stock.style.marginBottom = `${
      stockCheckboxDetailsContainer.offsetHeight + marginBottom
    }px`;
  } else {
    stock.style.marginBottom = "0px";
  }
};
