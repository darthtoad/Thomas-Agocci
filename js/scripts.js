export class ThomasAgocci {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.foodLevel = 0;
    this.favoriteFoods = 0;
    this.hatedFoods = 0;
    this.sleepLevel = 0;
    this.moodLevel = 0;
    this.poopAndPeeLevel = 0;
    this.temperature = 0;
    this.intellectualStimulation = 0;
  }

  setThomasAgocciByType(name) {
    let allFoods = ["Pasta", "Pizza", "Cannoli", "Espresso", "Gnocci", "Wine"];
    switch(this.name) {
      case "Random":
        let total = 200;
        this.foodLevel = Math.ceil((total * Math.random()) / 8);
        this.favoriteFoods = [allFoods[Math.floor(Math.random() * 6)], allFoods[Math.floor(Math.random() * 6)]];
        this.hatedFoods = [allFoods[Math.floor(Math.random() * 6)], allFoods[Math.floor(Math.random() * 6)]];
        this.sleepLevel = Math.ceil(total * Math.random() / 8);
        this.moodLevel = Math.ceil(total * Math.random() / 8);
        this.poopAndPeeLevel = Math.ceil(total * Math.random() / 8);
        this.temperature = Math.ceil(total * Math.random() / 8);
        this.intellectualStimulation = Math.ceil(total * Math.random() / 8);
        break;

      case "Big":
        this.foodLevel = 8;
        this.favoriteFoods = ["Pasta", "Pizza", "Cannoli", "Gnocci", "Wine"];
        this.hatedFoods = ["Espresso"];
        this.sleepLevel = 13;
        this.moodLevel = 27;
        this.poopAndPeeLevel = 8;
        this.temperature = 5;
        this.intellectualStimulation = 26;
        break;

      case "Grumpy":
        this.foodLevel = 25;
        this.favoriteFoods = ["Espresso", "Wine"];
        this.hatedFoods = ["Cannoli", "Pizza"];
        this.sleepLevel = 13;
        this.moodLevel = 8;
        this.poopAndPeeLevel = 28;
        this.temperature = 5;
        this.intellectualStimulation = 11;
        break;

      case "Geeky":
        this.foodLevel = 15;
        this.favoriteFoods = ["Espresso", "Pizza"];
        this.hatedFoods = ["Wine"];
        this.sleepLevel = 13;
        this.moodLevel = 18;
        this.poopAndPeeLevel = 20;
        this.temperature = 5;
        this.intellectualStimulation = 8;
        break;

      case "Sleepy":
        this.foodLevel = 25;
        this.favoriteFoods = [];
        this.hatedFoods = [];
        this.sleepLevel = 5;
        this.moodLevel = 25;
        this.poopAndPeeLevel = 15;
        this.temperature = 5;
        this.intellectualStimulation = 25;
        break;

      default:
        this.foodLevel = 15;
        this.favoriteFoods = [];
        this.hatedFoods = [];
        this.sleepLevel = 15;
        this.moodLevel = 15;
        this.temperature = 5;
        this.intellectualStimulation = 15;
    }
  }

  setHunger() {
    if (this.difficulty === "easy") {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.intellectualStimulation--;
        this.moodLevel--;
        this.poopAndPeeLevel--;
        if (Math.round(Math.random()) === 1) {
          this.temperature++;
        } else {
          this.temperature--;
        }
      }, 2000);
    } else if (this.difficulty === "medium") {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.intellectualStimulation--;
        this.moodLevel--;
        this.poopAndPeeLevel--;
        if (Math.round(Math.random()) === 1) {
          this.temperature++;
        } else {
          this.temperature--;
        }
      }, 1000);
    } else {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.intellectualStimulation--;
        this.moodLevel--;
        this.poopAndPeeLevel--;
        if (Math.round(Math.random()) === 1) {
          this.temperature++;
        } else {
          this.temperature--;
        }
      }, 500);
    }

  }

  isHeDead() {
    if (this.foodLevel > 0 && this.sleepLevel > 0 && this.moodLevel > 0 && this.intellectualStimulation > 0 && this.poopAndPeeLevel > 0 && this.temperature > 0 && this.temperature < 11) {
      return false;
    } else {
      // console.log("Kicked in balls");
      return true;
    }
  }

  feed(food) {
    if (this.favoriteFoods.includes(food)) {
      this.foodLevel += 25;
      this.poopAndPeeLevel -= 5;
    } else if (this.hatedFoods.includes(food)) {
      this.foodLevel += 5;
      this.moodLevel -= 10;
      this.poopAndPeeLevel -= 5;
    } else {
      this.foodLevel += 15;
      this.poopAndPeeLevel -= 5;
    }
  }

  takeToTheBathroom() {
    this.poopAndPeeLevel += 15;
  }

  putToBed() {
    this.sleepLevel += 15;
  }

  turnOnAC() {
    this.temperature--;
  }

  turnOnHeat() {
    this.temperature++;
  }

  takeAShotOfGrappa() {
    this.moodLevel += 15;
    if (this.moodLevel > 40) {
      this.sleepLevel -= 5;
      this.poopAndPeeLevel -= 5;
    }
  }

  playChess() {
    this.intellectualStimulation += 15;
  }

  argueAboutPolitics() {
    this.intellectualStimulation += 25;
    this.moodLevel -= 5;
  }
}
