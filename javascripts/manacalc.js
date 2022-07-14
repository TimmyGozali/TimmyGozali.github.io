function azure_knight(CP) {
  if ($("#AK").checked == true) {
    return 1.2 * 1.002 ** ((CP - 1) ** 0.8);
  } else {
    return 1;
  }
}

function chained_clockwork(CP) {
  if ($("#CC").checked == true) {
    return 1.5 * 1.005 ** ((CP - 1) ** 0.8);
  } else {
    return 1;
  }
}

function reckless_firepower() {
  var RF = document.getElementById("RF").checked;
  if (RF == true) {
    return 3;
  } else {
    return 0;
  }
}

function mystic_staff() {
  var staff = document.getElementById("staff").checked;
  if (staff == true) {
    return 1.1;
  } else {
    return 1;
  }
}

function calcMana() {
  
  var slash = $("#slash").value;
  var tps = $("#tps").value;
  var bFury = fury[$("#bFury").value];
  var sClone = clone[$("#sClone").value];
  var NP = puppet[$("#NP").value];
  var curRegen = $("#curRegen").value;
  var LB = $("#LB").value;
  var manaPotion = potion[$("#manaPotion").value];
  var CP = $("#craft").value;
  
  // get Azure Knight
  var AK = azure_knight(CP);
  
  // get Chained Clockwork
  var CC = chained_clockwork(CP);
  
  // get Mystic Staff
  if ($("#staff").checked == true) {
    var staff = 1.1;
  } else {
    var staff = 1;
  }
  
  // get Reckless Firepower
  if ($("#RF").checked == true) {
    var RF = 3;
  } else {
    var RF = 0;
  }
  
  // get Lucky Foot (All Prob) Art
  if ($("#lucky").checked == true) {
    var lucky = 1.1;
  } else {
    var lucky = 1;
  }
  
  
  
}
