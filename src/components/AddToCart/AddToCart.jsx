import React from 'react';

const realyChange = (itemsOnCrlQuant, indexChange, plusQuant, quantity) => {
  const atualItens = itemsOnCrlQuant;
  if (atualItens[indexChange] && !plusQuant) {
    atualItens[indexChange] += 1;
  } else if (atualItens[indexChange] && plusQuant) {
    atualItens[indexChange] += quantity;
  } else {
    atualItens[indexChange] = quantity;
  }
  return atualItens;
};

const updateCrtQuant = (idWanted, quantity, plusQuant) => {
  console.log(quantity);
  const itemsOnCrlId = JSON.parse(localStorage.crlId);
  let itemsOnCrlQuant = JSON.parse(localStorage.crlQuant);
  const indexChange = itemsOnCrlId.indexOf(idWanted);
  let quant = quantity;
  if (!quant) quant = 1;
  itemsOnCrlQuant = realyChange(itemsOnCrlQuant, indexChange, plusQuant, quant);
  localStorage.crlQuant = JSON.stringify(itemsOnCrlQuant);
};

const updateCrtId = (newId) => {
  const itemsOnCrl = JSON.parse(localStorage.crlId);
  const updateItemsOnCrl = [...itemsOnCrl, newId];
  localStorage.crlId = JSON.stringify(updateItemsOnCrl);
};

const checkEquals = (item2Put, itensSaved) => {
  const comparacaoItem = Object.values(item2Put)[0];
  let respOfCall = false;

  itensSaved.forEach((element) => {
    if (Object.values(element)[0] === comparacaoItem) {
      respOfCall = true;
    }
  });
  return respOfCall;
};

const initStorage = (itemParam, quantity, plusQuant) => {
  localStorage.itemsOnCart = JSON.stringify([]);
  // crlId === Controlador do Id;
  localStorage.crlId = JSON.stringify([]);
  updateCrtId(Object.values(itemParam)[0]);

  // crlQuant === Controlador da quantidade dos produtos;
  localStorage.crlQuant = JSON.stringify([]);
  updateCrtQuant(Object.values(itemParam)[0], quantity, plusQuant);
};

const auxAddToCart = (itemParam, itemsOnCart, updateItemsOnCart, quantity, plusQuant) => {
  if (checkEquals(itemParam, itemsOnCart)) {
    updateItemsOnCart.pop();
  } else {
    updateCrtId(Object.values(itemParam)[0]);
  }
  updateCrtQuant(Object.values(itemParam)[0], quantity, plusQuant);
  return updateItemsOnCart;
};

const AddToCart = (props) => {
  const { item, dataTestid, quantity, plusQuant } = props;

  const addToCart = (itemParam) => {
    if (!localStorage.itemsOnCart) {
      initStorage(itemParam, quantity, plusQuant);
    }
    const itemsOnCart = JSON.parse(localStorage.itemsOnCart);
    let upItemsOnCart = [...itemsOnCart, itemParam];
    if (itemsOnCart.length !== 0) {
      upItemsOnCart = auxAddToCart(itemParam, itemsOnCart, upItemsOnCart, quantity, plusQuant);
    }
    localStorage.itemsOnCart = JSON.stringify(upItemsOnCart);
  };
  return (
    <button data-testid={dataTestid} type="button" onClick={() => addToCart(item)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
