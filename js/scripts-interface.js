import { ThomasAgocci } from './../js/scripts.js';

$(document).ready(function(){
  $('#start').click(function(){
    let thomasAgocci = new ThomasAgocci()
    $('#food').submit(function(){
      if ($('input:text[name="food-name"]').val().toLowerCase() === "pasta" && inventory.pasta > 0) {
        inventory.pasta--;

      }
    })
  })
}
