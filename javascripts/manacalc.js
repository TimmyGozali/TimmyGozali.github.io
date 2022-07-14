var $ = function( id ) { return document.getElementById( id ); };

function azure_knight(CP) {
  if ($("AK").checked == true) {
    return 1.2 * 1.002 ** ((CP - 1) ** 0.8);
  } else {
    return 1;
  }
}

function chained_clockwork(CP) {
  if ($("CC").checked == true) {
    return 1.5 * 1.005 ** ((CP - 1) ** 0.8);
  } else {
    return 1;
  }
}

function calcMana(lb_level, siphon_level) {
  
  var slash = $("slash").value;
  var tps = Number($("tps").value);
  var bFury = fury[$("bFury").value];
  var sClone = clone[$("sClone").value];
  var NP = puppet[$("NP").value];
  var curRegen = $("curRegen").value;
  var LB = limit[$("LB").value]["Mana boost"];
  var manaPotion = potion[$("manaPotion").value];
  var CP = $("craft").value;
  
  // get Azure Knight
  var AK = azure_knight(CP);
  
  // get Chained Clockwork
  var CC = chained_clockwork(CP);
  
  // get Mystic Staff
  if ($("staff").checked == true) {
    var staff = 1.2;
  } else {
    var staff = 1;
  }
  
  // get Reckless Firepower
  if ($("RF").checked == true) {
    var RF = 3;
  } else {
    var RF = 0;
  }
  
  // get Lucky Foot (All Prob) Art
  if ($("lucky").checked == true) {
    var lucky = 1.1;
  } else {
    var lucky = 1;
  }
  
  // calc Mana Siphon
  var prob = slash * lucky;

  var specAttempts = sClone * CC * NP;

  var siphonAttempts = specAttempts + tps + bFury + RF;

  var siphonChance = 0.005 * prob;

  var manaSiphon = staff * AK * 60 * siphon[siphon_level]["Siphon amount"] * siphonAttempts * siphonChance;

  // calc new regen
  var baseRegen = curRegen / LB;

  var regen = (manaPotion * limit[lb_level]["Mana boost"] * (baseRegen + manaSiphon)).toFixed(2);

  console.log(regen);
  return regen
}

function populate() {
  var table = $("table");

  for (var i = 0; i < 26; i++) {
    var row = table.rows[i+2];

    for (var j = 0; j < 26; j++) {
      var cell = row.insertCell();
      cell.innerHTML = calcMana(i,j);
    }
  }
}