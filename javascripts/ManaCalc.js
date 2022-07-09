function azure_knight(CP) {
  var AK = document.getElementById("AK").checked;
  if (AK == true) {
    return 1.2 * 1.002 ** ((CP - 1) ** 0.8);
  } else {
    return 1;
  }
}

function chained_clockwork(CP) {
  var CC = document.getElementById("CC").checked;
  if (CC == true) {
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

