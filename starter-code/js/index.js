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
  var ItemPrice = document.querySelectorAll('.ItemPrice')[0].textContent = "25.00";
  var ItemsQuanty = document.getElementById("quantity").value;
  var TotalPrice = document.querySelectorAll('.ItemTotalPrice')[0].textContent = ItemsQuanty * ItemPrice
  console.log(TotalPrice);
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






var CalcTotalPrices = document.getElementById("calc-prices-buttonn");
var total = document.createTextNode("hola");
CalcTotalPrices.appendChild(total);

/* var CalcTotalPrices = document.getElementById("calc-prices-buttonn");
CalcTotalPrices.onclick = function(){
  console.log("adding an element to the list");
} 

var prueba = document.getElementById('calc-prices-buttonn');
prueba.innerHTML = "hola"; */
