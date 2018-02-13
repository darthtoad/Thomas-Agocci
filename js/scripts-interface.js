import { ThomasAgocci } from './../js/scripts.js';

$(document).ready(function(){
  $('#start').submit(function(event){
    event.preventDefault();
    $('#levels').show();
    $('#inventory').show();
    let thomasAgocci = new ThomasAgocci($('#select option:selected').val(), $("input:radio[name=difficulty]:checked").val());
    thomasAgocci.setThomasAgocciByType(thomasAgocci.name);
    thomasAgocci.setHunger();
    $("#game").show();
    let inventory = new Inventory(1, 1, 1, 1, 1, 1);
    inventory.addRandomFood();
    let invetoryRefresh = setInterval(() => {
      if (!thomasAgocci.isHeDead()) {
        $('#inventory').text(`Pasta: ${inventory.pasta}\nPizza: ${inventory.pizza}\nCannoli: ${inventory.cannoli}\nEspresso: ${inventory.espresso}\nGnocci: ${inventory.gnocci}\nWine: ${inventory.wine}`);
      } else {
        $('#inventory').hide();
        clearRefresh();
      }
    }, 1000)
    function clearRefresh() {
      clearInterval(invetoryRefresh);
    }

    let check = setInterval(() => {
      if (!thomasAgocci.isHeDead()) {
        $('#levels').text(`Food: ${thomasAgocci.foodLevel} Sleep: ${thomasAgocci.sleepLevel} Mood: ${thomasAgocci.moodLevel} Poop and Pee: ${thomasAgocci.poopAndPeeLevel} Temperature: ${thomasAgocci.temperature} Intellectual Stimulation: ${thomasAgocci.intellectualStimulation}`);
      } else {
        alert('Your Thomas Agocci died');
        $('#game').hide();
        $('#levels').hide();
        $('#start').show();
        clearCheck();
      }
    }, 1000)
    function clearCheck() {
      clearInterval(check);
    }
    $('#food').submit(function(event){
      event.preventDefault();
      if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "pasta" && inventory.pasta > 0) {
        inventory.pasta--;
        thomasAgocci.feed("Pasta");
      } else if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "pizza" && inventory.pizza > 0) {
        inventory.pizza--;
        thomasAgocci.feed("Pizza");
      } else if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "cannoli" && inventory.cannoli > 0) {
        inventory.cannoli--;
        thomasAgocci.feed("Cannoli");
      } else if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "espresso" && inventory.espresso > 0) {
        inventory.espresso--;
        thomasAgocci.feed("Espresso");
      } else if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "gnocci" && inventory.gnocci > 0) {
        inventory.gnocci--;
        thomasAgocci.feed("Gnocci");
      } else if ($('input:text[name="food-name"]').val().toLowerCase().trim() === "wine" && inventory.wine > 0) {
        inventory.wine--;
        thomasAgocci.feed("Wine");
      } else {
        thomasAgocci.foodLevel -= 1;
      }
    })
    $("#bathroom").click(function(event) {
      event.preventDefault();
      thomasAgocci.takeToTheBathroom();
    })
    $("#bed").click(function(event){
      event.preventDefault();
      thomasAgocci.putToBed();
    })
    $("#ac").click(function(event){
      event.preventDefault();
      thomasAgocci.turnOnAC();
    })
    $("#heat").click(function(event){
      event.preventDefault();
      thomasAgocci.turnOnHeat();
    })
    $("#grappa").click(function(event){
      event.preventDefault();
      thomasAgocci.takeAShotOfGrappa();
    })
    $("#chess").click(function(event){
      event.preventDefault();
      thomasAgocci.playChess();
    })
    $("#politics").click(function(event){
      event.preventDefault();
      thomasAgocci.argueAboutPolitics();
    })
  })
});
