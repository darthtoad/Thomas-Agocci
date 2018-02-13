import { ThomasAgocci } from './../js/scripts.js';

describe('ThomasAgocci', function(){
  let randomThomasAgocci = new ThomasAgocci("Random", "easy");
  randomThomasAgocci.setThomasAgocciByType("Random");
  let normalThomasAgocci = new ThomasAgocci("default", "easy");
  normalThomasAgocci.setThomasAgocciByType("default");
  let bigThomasAgocci = new ThomasAgocci("Big", "medium");
  bigThomasAgocci.setThomasAgocciByType("Big");
  let grumpyThomasAgocci = new ThomasAgocci("Grumpy", "hard");
  grumpyThomasAgocci.setThomasAgocciByType("Grumpy");
  let geekyThomasAgocci = new ThomasAgocci("Geeky", "easy");
  geekyThomasAgocci.setThomasAgocciByType("Geeky");
  let sleepyThomasAgocci = new ThomasAgocci("Sleepy", "easy");
  sleepyThomasAgocci.setThomasAgocciByType("Sleepy");

  beforeEach(function(){
    jasmine.clock().install();
  })

  afterEach(function(){
    jasmine.clock().uninstall();
  })

  it('should have random levels if name is "Random"', function(){
    let newRandomThomasAgocci = new ThomasAgocci("Random", "easy");
    newRandomThomasAgocci.setThomasAgocciByType("Random");
    expect(newRandomThomasAgocci.foodLevel).not.toEqual(randomThomasAgocci.foodLevel);
    expect(newRandomThomasAgocci.sleepLevel).not.toEqual(randomThomasAgocci.sleepLevel);
  })

  it('should have levels equal to 15 if name is default', function(){
    expect(normalThomasAgocci.foodLevel).toEqual(15);
    expect(normalThomasAgocci.sleepLevel).toEqual(15);
  })

  it('should have a food level of 8 if he\'s big', function(){
    expect(bigThomasAgocci.foodLevel).toEqual(8);
  })

  it('should have favorite foods if he\'s big', function(){
    expect(bigThomasAgocci.favoriteFoods.length > 0)
  })

  it('should have a mood level of 8 if he\'s grumpy', function(){
    expect(grumpyThomasAgocci.moodLevel).toEqual(8);
  })

  it('should have least favorite foods if he\'s grumpy', function(){
    expect(grumpyThomasAgocci.hatedFoods.length > 0);
  })

  it('should have an intellectual stimulation level of 8 if he\'s geeky', function(){
    expect(geekyThomasAgocci.intellectualStimulation).toEqual(8);
  })

  it('should have a sleep level of 5 if he\'s sleepy', function(){
    expect(sleepyThomasAgocci.sleepLevel).toEqual(5);
  })

  it('should decrement or change levels after 2000 milliseconds on easy mode', function(){
    normalThomasAgocci.setHunger();
    jasmine.clock().tick(2001);
    expect(normalThomasAgocci.foodLevel).toEqual(14);
    expect(normalThomasAgocci.sleepLevel).toEqual(14);
  })

  it('should decrement or change levels after 1000 milliseconds on medium mode', function(){
    bigThomasAgocci.setHunger();
    jasmine.clock().tick(1001);
    expect(bigThomasAgocci.foodLevel).toEqual(7);
    expect(bigThomasAgocci.intellectualStimulation).toEqual(25);
  })

  it('should decrement or change level after 500 milliseconds on hard mode', function(){
    grumpyThomasAgocci.setHunger();
    jasmine.clock().tick(501);
    expect(grumpyThomasAgocci.moodLevel).toEqual(7);
    expect(grumpyThomasAgocci.poopAndPeeLevel).toEqual(27);
  })

  it('should die if levels go below 0', function(){
    normalThomasAgocci.setHunger();
    jasmine.clock().tick(15001);
    expect(normalThomasAgocci.isHeDead()).toBe(true);
  })

  it('should add 25 to food level and subtract 5 from poop and pee level after eating a favorite food', function(){
    const originalFood = bigThomasAgocci.foodLevel;
    const originalPoop = bigThomasAgocci.poopAndPeeLevel;
    bigThomasAgocci.feed("Pasta");
    expect(bigThomasAgocci.foodLevel).toEqual(originalFood + 25);
    expect(bigThomasAgocci.poopAndPeeLevel).toEqual(originalPoop - 5);
  })

  it('should add 15 to food level and subtract 5 from poop and pee level after eating normal food', function(){
    const originalFood = normalThomasAgocci.foodLevel;
    const originalPoop = normalThomasAgocci.poopAndPeeLevel;
    normalThomasAgocci.feed("Pizza");
    expect(normalThomasAgocci.foodLevel).toEqual(originalFood + 15);
    expect(normalThomasAgocci.poopAndPeeLevel).toEqual(originalPoop - 5);
  })

  it('should add 5 to food level and subtract 5 from poop and pee level and 10 from mood level after eating a hated food', function(){
    const originalFood = grumpyThomasAgocci.foodLevel;
    const originalPoop = grumpyThomasAgocci.poopAndPeeLevel;
    const originalMood = grumpyThomasAgocci.moodLevel;
    grumpyThomasAgocci.feed("Pizza");
    expect(grumpyThomasAgocci.foodLevel).toEqual(originalFood + 5);
    expect(grumpyThomasAgocci.poopAndPeeLevel).toEqual(originalPoop - 5);
    expect(grumpyThomasAgocci.moodLevel).toEqual(originalMood - 10);
  })

  it('should add 15 to poop and pee level after going to the bathroom', function(){
    const originalPoop = geekyThomasAgocci.poopAndPeeLevel;
    geekyThomasAgocci.takeToTheBathroom();
    expect(geekyThomasAgocci.poopAndPeeLevel).toEqual(originalPoop + 15);
  })

  it('should add 15 to sleep level after being put to bed', function(){
    const originalSleep = sleepyThomasAgocci.sleepLevel;
    sleepyThomasAgocci.putToBed();
    expect(sleepyThomasAgocci.sleepLevel).toEqual(originalSleep + 15);
  })

  it('should increment ac when it\'s turned on', function(){
    const originalTemperature = bigThomasAgocci.temperature;
    bigThomasAgocci.turnOnAC();
    expect(bigThomasAgocci.temperature).toEqual(originalTemperature - 1);
  })

  it('should increment temperature when heat is turned on', function(){
    const originalTemperature = grumpyThomasAgocci.temperature;
    grumpyThomasAgocci.turnOnHeat();
    expect(grumpyThomasAgocci.temperature).toEqual(originalTemperature + 1);
  })

  it('should add 15 to mood after a shot of grappa and change other levels if mood is above 40', function(){
    const originalMood = geekyThomasAgocci.moodLevel;
    const originalSleep = geekyThomasAgocci.sleepLevel;
    const originalPoop = geekyThomasAgocci.poopAndPeeLevel;
    geekyThomasAgocci.takeAShotOfGrappa();
    expect(geekyThomasAgocci.moodLevel).toEqual(originalMood + 15);
    geekyThomasAgocci.takeAShotOfGrappa();
    geekyThomasAgocci.takeAShotOfGrappa();
    geekyThomasAgocci.takeAShotOfGrappa();
    geekyThomasAgocci.takeAShotOfGrappa();
    expect(geekyThomasAgocci.sleepLevel).not.toEqual(originalSleep);
    expect(geekyThomasAgocci.poopAndPeeLevel).not.toEqual(originalPoop);
  })

  it('should add 15 to intellectual stimulation after playing chess', function(){
    const originalStimulation = sleepyThomasAgocci.intellectualStimulation;
    sleepyThomasAgocci.playChess();
    expect(sleepyThomasAgocci.intellectualStimulation).toEqual(originalStimulation + 15);
  })

  it ('should add 25 to intellectual stimulation and subtract 5 from mood after arguing about politics', function(){
    const originalStimulation = normalThomasAgocci.intellectualStimulation;
    const originalMood = normalThomasAgocci.moodLevel;
    normalThomasAgocci.argueAboutPolitics();
    expect(normalThomasAgocci.intellectualStimulation).toEqual(originalStimulation + 25);
    expect(normalThomasAgocci.moodLevel).toEqual(originalMood - 5);
  })
})
