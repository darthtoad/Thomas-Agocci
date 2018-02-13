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
        $("#inventory").empty();
        $('#inventory').append('<div class="row">' + `Pasta: ${inventory.pasta} Pizza: ${inventory.pizza}       Cannoli: ${inventory.cannoli}` + '</div><div class="row">' + `Espresso: ${inventory.espresso}        Gnocci: ${inventory.gnocci}` + ` Wine: ${inventory.wine}` + '</div>');
      } else {
        $('#inventory').hide();
        clearRefresh();
      }
    }, 1000)
    function clearRefresh() {
      clearInterval(invetoryRefresh);
    }

    let pic = setInterval(() => {
      if (thomasAgocci.isHeDead()) {
        clearPic();
      } else if (thomasAgocci.foodLevel < 5) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-hungry`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`);
          console.log(response.data.url);
        }
      } else if (thomasAgocci.sleepLevel < 5) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-tired`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`);
          console.log(response.data.url);
        }
      } else if (thomasAgocci.poopAndPeeLevel < 5) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-poop`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      } else if (thomasAgocci.moodLevel < 5) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-sad`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      } else if (thomasAgocci.intellectualStimulation < 5) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-bored`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      } else if (thomasAgocci.temperature < 3) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-cold`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      } else if (thomasAgocci.temperature > 7) {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi-hot`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      } else {
        let request = new XMLHttpRequest();
        let url = `http://api.giphy.com/v1/gifs/random?api_key=e9IFSFXsO1Rw8E0kOle8uW9i3uuP6GAn&tag=tamagotchi`;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            getElements(response);
          }
        }
        request.open("GET", url, true);
        request.send();
        let getElements = function(response) {
          $("#pic").empty();
          $("#pic").append(`<img src="${response.data.images.fixed_height.url}" alt="Thomas Agocci's mood" />`); console.log(response.data.url);
        }
      }
    }, 5000)

    function clearPic() {
      clearInterval(pic);
    }

    let check = setInterval(() => {
      if (!thomasAgocci.isHeDead()) {
        $('#levels').empty();
        $('#levels').append(`Food: ${thomasAgocci.foodLevel}` + '<br>' + ` Sleep: ${thomasAgocci.sleepLevel}` + '<br>' + ` Mood: ${thomasAgocci.moodLevel}` + '<br>' + ` Poop and Pee: ${thomasAgocci.poopAndPeeLevel}` + '<br>' + ` Temperature: ${thomasAgocci.temperature}` + '<br>' + ` Intellectual Stimulation: ${thomasAgocci.intellectualStimulation}`);
      } else {
        alert('Your Thomas Agocci died');
        $('#game').hide();
        $('#levels').empty();
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
      if ($('#food-select option:selected').val().toLowerCase().trim() === "pasta" && inventory.pasta > 0) {
        inventory.pasta--;
        thomasAgocci.feed("Pasta");
      } else if ($('#food-select option:selected').val().toLowerCase().trim() === "pizza" && inventory.pizza > 0) {
        inventory.pizza--;
        thomasAgocci.feed("Pizza");
      } else if ($('#food-select option:selected').val().toLowerCase().trim() === "cannoli" && inventory.cannoli > 0) {
        inventory.cannoli--;
        thomasAgocci.feed("Cannoli");
      } else if ($('#food-select option:selected').val().toLowerCase().trim() === "espresso" && inventory.espresso > 0) {
        inventory.espresso--;
        thomasAgocci.feed("Espresso");
      } else if ($('#food-select option:selected').val().toLowerCase().trim() === "gnocci" && inventory.gnocci > 0) {
        inventory.gnocci--;
        thomasAgocci.feed("Gnocci");
      } else if ($('#food-select option:selected').val().toLowerCase().trim() === "wine" && inventory.wine > 0) {
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
