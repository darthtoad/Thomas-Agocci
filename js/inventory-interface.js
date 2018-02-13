import { Inventory } from './../js/inventory.js';

$(document).ready(function(){
  $("#start").click(function(){
    $("#game").show();
    let inventory = new Inventory(1, 1, 1, 1, 1, 1);
    inventory.addRandomFood();
    setInterval(() => {
      $('#inventory').text(`Pasta: ${inventory.pasta}\nPizza: ${inventory.pizza}\nCannoli: ${inventory.cannoli}\nEspresso: ${inventory.espresso}\nGnocci: ${inventory.gnocci}\nWine: ${inventory.wine}`);
    }, 1001)
  })
})
