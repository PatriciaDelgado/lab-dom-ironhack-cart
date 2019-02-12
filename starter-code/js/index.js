/* Crear un evento clic para el botón Calcular precios
Este evento ejecutará una función que:
Recupera el precio unitario del producto.
Recupera la cantidad de artículos deseados.
Calcula el precio total en base a estos datos.
Actualiza el precio total en el DOM */
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var ItemPrice = document.querySelectorAll('.ItemPrice').textContent;
  var ItemsQuanty = document.getElementById("quantity").value;
  var TotalPrice = document.querySelectorAll('.ItemTotalPrice').textContent = ItemsQuanty * ItemPrice
  console.log(ItemPrice);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
