function effectA(skill, level) {
  return "A" + (skill.Level+level);
}

function effectB(skill, level) {
  return "B" + (skill.Level+level);
}

function cost(skill, level) {
  return "Co" + (skill.Level+level);
}

function calculateEfficiency(skill) {
  
  // get skill name
  var skillName = skill.Name;
  
  // get current and next for BonusTypeA
  var curBonusA = Number(skill[effectA(skill, 0)]);
  var nextBonusA = Number(skill[effectA(skill, 1)]);
  
  // get current and next for BonusTypeB
  var curBonusB = Number(skill[effectB(skill, 0)]);
  var nextBonusB = Number(skill[effectB(skill, 1)]);
  
  // get SP cost to next
  var costSP = Number(skill[cost(skill, 0)]);
  
  //get reduction
  /*
  1) map all BonusTypeA and BonusTypeB to a source from the Reductions table.
  2) match BonusTypeA/B to the source.
  
  see const Types
  see var TypeConversions
  
  Type = TypeConversions['BonusType'] (tap, hero, ds, etc..)
  reduction = choice(damage/gold).Type
  */
  
  var reductionDamage;
  
  
  
  return efficiency(curBonusA, nextBonusA, 
  
  
}

function efficiency(a, b, reduction, sp) {
  return ((b / a) ** (reduction / sp))
}

/*
var choice =  prompt("Level");
var num = 'A' + choice;
var num2 = 'Co' + (choice - 1);

console.log(choice);
console.log(num);
console.log(num2);

var dA = skills.TapDmg.A1;
var dB = skills.TapDmg[num];
var red = damage['Shadow Clone'].Tap;
var cost = skills.TapDmg[num2];

efficiency(dA, dB, red, cost);
*/
