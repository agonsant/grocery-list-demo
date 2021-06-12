let groceryItems = [];

function addItem() {
  const input = document.getElementById("add_input");
  if (input.value) {
    groceryItems.push(input.value);
    const itemDOM = document.createElement("li");
    itemDOM.classList.add("grocery-list-item");
    const itemNameDOM = document.createElement("p");
    itemNameDOM.innerText = input.value;
    itemNameDOM.classList.add("grocery-list-item-text");
    const itemRemoveDOM = document.createElement("button");
    itemRemoveDOM.classList.add("grocery-list-item-remove");
    itemRemoveDOM.textContent = "-";
    itemRemoveDOM.onclick = function() {removeItem(this)};
    itemDOM.appendChild(itemNameDOM);
    itemDOM.appendChild(itemRemoveDOM);
    document.getElementById("grocery_list").appendChild(itemDOM);
  }
}

function removeItem(button) {
    const name = button.previousElementSibling.textContent;
    groceryItems.splice(groceryItems.indexOf(name), 1);
    button.parentNode.remove();
}

function shareWhatsApp() {
    if(groceryItems.length>0){
        let listMsg = 'Hola, te comparto la lista de la compra:';
        groceryItems.forEach(item => {
            listMsg += '\n- ' + item;
        });
        listMsg += '\nHay que comprarlo TODO!!';
        window.open(`whatsapp://send?text=${encodeURIComponent(listMsg)}`);
    }
}
