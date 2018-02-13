import { ThomasAgocci } from './../js/scripts.js';

$(document).ready(function(){
  $('#start').submit(function(event){
    event.preventDefault();
    let thomasAgocci = new ThomasAgocci($('#select option:selected').val());
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
