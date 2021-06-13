// I pity the fool who puts his gaze upon thy code (Look, I'm mostly a python developer, cut me some slack)

var stage_slang_obj = {
  // NOTE: Red/100c stars have stage indicator to differentiate; removed later for beautification
  // stage: [star1, star2 . . . etc]
  BOB: ["Reds_BOB", "Bomb King", "Koopa the Quick", "Sky Jump/Island Hop", "Secrets", "Bomb Clip", "100 Coins + Reds_BOB"],
  WF: ["Reds__WF", "Whomp King", "Fortress", "Wild Blue", "Owless/Owl", "Cannonless", "100 Coins + Reds_WF"],
  JRB: ["Reds_JRB", "Ship Clip", "Eel", "Cave", "Pillar", "Jet Stream", "100 Coins + Reds_JRB"],
  // reds alone
  CCM: ["Reds_CCM", "Slide", "Lil Penguin", "Penguin Race", "Snowman's Head", "Wall Kicks will Work", "100 Coins + Race_CCM"],
  BBH: ["Reds_BBH", "Ghost Hunt", "Merry Go Round", "Secret of the Haunted Books", "Big Boo's Balcony", "Eye to Eye in the Secret Room", "100 Coins + Reds_BBH"],
  HMC: ["Reds_HMC", "Box Jump/Tjwk/Elevator Clip", "Christmas Miracle", "Toxic Maze", "Emergency Exit", "Rolling Rocks", "100 Coins + Reds_HMC"],
  LLL: ["Reds_LLL", "Bully", "Bullies", "Log", "Lava Boost", "Elevator", "100 Coins + Reds_LLL"],
  // reds alone
  SSL: ["Reds_SSL", "Talons", "Pyramid", "Pless/Shell", "Eyerok", "Secrets", "100 Coins + Secrets_SSL"],
  DDD: ["Reds_DDD", "Sub", "Chests", "Jet Stream", "Manta", "Caps", "100 Coins + Reds_DDD"],
  SL: ["Reds__SL", "Snowman's Head", "Bully", "Deep Freeze", "Freezing Pond", "Igloo", "100 Coins + Reds__SL"],
  WDW: ["Reds_WDW", "Arrow Lifts", "Top of the Town", "Secrets", "Elevator", "Downtown", "100 Coins + Reds", "100 Coins + Secrets_WDW"],
  TTM: ["Reds_TTM", "Mountain", "Monkey", "Breezeless/Breeze", "Bridge", "Mushroom", "100 Coins + Reds_TTM"],
  THI: ["Reds_THI", "Piranha", "Mountain", "Koopa the Quick", "Secrets", "Wiggler", "100 Coins + Reds_THI"],
  // reds alone
  TTC: ["Reds_TTC", "Cage", "Pendulums", "Get a Hand", "Stomp on the Thwomp", "Moving Bars", "100 Coins + Thwomp_TTC"],
  // reds alone
  RR: ["Reds__RR", "Cruiser", "Big House", "Breeze", "Tricky Triangles", "Somewhere over the Rainbow", "100 Coins + Big House__RR"],
  DW: ["Reds__DW", "No Reds__DW"],
  FS: ["Reds__FS", "No Reds__FS"],
  BitS: ["Reds_BiS", "No Reds_BiS"],
  PSS: ["Under 21 Seconds", "Box Star"],
  Misc: ["Aquarium", "ToTWC", "CotMC", "VCUtM", "WMOtR"]
};

var stage_obj = {
  // NOTE: Red/100c stars have stage indicator to differentiate; removed later for beautification
  // stage: [star1, star2 . . . etc]
  "Bob-omb Battlefield": ["Find the 8 Red Coins_BOB", "Big Bob-omb on the Summit", "Footrace with Koopa the Quick", "Shoot to the Island in the Sky", "Mario Wings to the Sky", "Behind Chain Chomp's Gate", "100 Coins + Reds_BOB"],
  "Whomp's Fortress": ["Red Coins on the Floating Isle__WF", "Chip off Whomp’s Block", "To the Top of the Fortress", "Shoot into the Wild Blue", "Fall onto the Caged Island", "Blast Away the Wall", "100 Coins + Reds__WF"],
  "Jolly Roger Bay": ["Red Coins on the Ship Afloat_JRB", "Plunder in the Sunken Ship", "Can the Eel Come out and Play?", "Treasure of the Ocean Cave", "Blast to the Stone Pillar", "Through the Jet Stream", "100 Coins + Reds_JRB"],
  // reds alone
  "Cool, Cool Mountain": ["Frosty Slide for 8 Red Coins_CCM", "Slip Slidin’ Away", "Li’l Penguin Lost", "Big Penguin Race", "Snowman’s Lost his Head", "Wall Kicks will Work", "100 Coins + Race_CCM"],
  "Big Boo's Haunt": ["Seek the 8 Red Coins_BBH", "Go on a Ghost Hunt", "Ride Big Boo’s Merry-Go-Round", "Secret of the Haunted Books", "Big Boo's Balcony", "Eye to Eye in the Secret Room", "100 Coins + Reds_BBH"],
  "Hazy Maze Cave": ["Elevate for 8 Red Coins_HMC", "Swimming Beast in the Cavern", "Metal-Head Mario Can Move!", "Navigating the Toxic Maze", "A-Maze-ing Emergency Exit", "Watch for the Rolling Rocks", "100 Coins + Reds_HMC"],
  "Lethal Lava Land": ["8-Coin Puzzle with 15 Pieces_LLL", "Boil the Big Bully", "Bully the Bullies", "Red-Hot Log Rolling", "Hot-Foot-It into the Volcano", "Elevator Tour in the Volcano", "100 Coins + Reds_LLL"],
  // reds alone
  "Shifting Sand Land": ["Free Flying for 8 Red Coins_SSL", "In the Talons of the Big Bird", "Shining Atop the Pyramid", "Inside the Ancient Pyramid", "Stand Tall on the Four Pillars", "Pyramid Puzzle", "100 Coins + Reds_SSL"],
  "Dire, Dire Docks": ["Pole-Jumping for Red Coins_DDD", "Board Bowser’s Sub", "Chests in the Current", "Through the Jet Stream", "The Manta Ray’s Reward", "Collect the Caps", "100 Coins + Reds_DDD"],
  "Snowman's Land": ["Shell Shreddin’ for 8 Red Coins__SL", "Snowman’s Big Head", "Chill with the Bully", "In the Deep Freeze", "Whirl from the Freezing Pond", "Into the Igloo", "100 Coins + Reds__SL"],
  "Wet-Dry World": ["Go to Town for Red Coins_WDW", "Shocking Arrow Lifts!", "Top O’ The Town", "Secrets in the Shallows & Sky", "Express Elevators–Hurry Up!", "Quick Race through Downtown", "100 Coins + Reds_WDW"],
  "Tall, Tall Mountain": ["Scary ‘Shrooms, Red Coins_TTM", "Scale the Mountain", "Mystery of the Monkey Cage", "Mysterious Mountainside", "Breathtaking View from Bridge", "Blast to the Lonely Mushroom", "100 Coins + Reds_TTM"],
  "Tiny, Huge Island": ["Wiggler’s Red Coins_THI", "Pluck the Piranha Flower", "The Tip Top of the Huge Island", "Rematch with Koopa the Quick", "Five Itty Bitty Secrets", "Make Wiggler Squirm", "100 Coins + Reds_THI"],
  // reds alone
  "Tick Tock Clock": ["Stop Time for Red Coins_TTC", "Roll into the Cage", "The Pit and the Pendulums", "Get a Hand", "Stomp on the Thwomp", "Timed Jumps on Moving Bars", "100 Coins + Thwomp_TTC"],
  // reds alone
  "Rainbow Ride": ["Coins Amassed in a Maze__RR", "Cruiser Crossing the Rainbow", "The Big House in the Sky", "Swingin’ in the Breeze", "Tricky Triangles!", "Somewhere over the Rainbow", "100 Coins + Big House__RR"],
  "Bowser in the Dark World": ["Reds__DW", "No Reds__DW"],
  "Bowser in the Fire Sea": ["Reds__FS", "No Reds__FS"],
  "Bowser in the Sky": ["Reds_BiS", "No Reds_BiS"],
  "Princess Secret Slide": ["Under 21 Seconds", "Box Star"],
  "Misc": ["Aquarium", "Wing Cap", "Metal Cap", "Vanish Cap", "Wing Mario Over the Rainbow"]
};

var stage_slang_to_full = {
  BOB: "Bob-omb Battlefield",
  WF: "Whomp's Fortress",
  JRB: "Jolly Roger Bay",
  CCM: "Cool, Cool Mountain",
  BBH: "Big Boo's Haunt",
  HMC: "Hazy Maze Cave",
  LLL: "Lethal Lava Land",
  SSL: "Shifting Sand Land",
  DDD: "Dire, Dire Docks",
  SL: "Snowman's Land",
  WDW: "Wet-Dry World",
  TTM: "Tall, Tall Mountain",
  THI: "Tiny, Huge Island",
  TTC: "Tick Tock Clock",
  RR: "Rainbow Ride",
  DW: "Bowser in the Dark World",
  FS: "Bowser in the Fire Sea",
  BitS: "Princess Secret Slide",
  PSS: "Princess Secret Slide",
};

// Might impliment later (along with slangStageToFull and slangStarToFull)
// var star_slang_to_full = {
//
// }

function randomChoiceArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomChoiceDictKey(obj) {
  var keys = Object.keys(obj);
  return keys[keys.length * Math.random() << 0];
}

// Probably won't be needed
// Keeping if ever needed in the future
function randomChoiceDictValue(obj) {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}

// removes stage indication markers when displaying red/100c stars
function removeReds(star) {
  // check if star has 'reds' or 'coin' in it
  if (star.toLowerCase().includes("reds") || star.toLowerCase().includes("coin")) {
    return star.slice(0, -4);
  } else {
    return star;
  }
}

var Slang = false;
function randomStage() {
  if (Slang) {
    return randomChoiceDictKey(stage_slang_obj);
  } else {
    return randomChoiceDictKey(stage_obj);
  }
}

function randomStar(stage) {
  if (Slang) {
    var star_slang = randomChoiceArray(stage_slang_obj[stage]);
    return removeReds(star_slang);
  } else {
    var star = randomChoiceArray(stage_obj[stage]);
    return removeReds(star);
  }
}

// unused as of right now; will be implimented along with slangstartonormal
// function slangStageToFull(slang_stage) {
//   return stage_slang_to_full[slang_stage];
// }

// impliment later
// function slangStarToNormal(slang_star) {
//   var slang_stage = star[slang_star];
//   var normal_stage = slangStageToNormal(slang_stage);
//
// }

function displayStar() {
  var stage = randomStage();
  var star = randomStar(stage);
  document.getElementById("stage").innerHTML = stage;
	document.getElementById("star").innerHTML = star;
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // if checked goes here -- full star name
      Slang = true;
    } else {
      // starts at this -- shorthand
      Slang = false;
    }
  });
});
