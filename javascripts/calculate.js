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
  const bonusTypeA = skill["BonusTypeA"];
  const bonusTypeB = skill["BonusTypeB"];  
  
  var reductionA;
  if (typeGold.hasOwnProperty(bonusTypeA)) {
    reduction = /*"goldEff" * */ Number(gold[ChoiceGold]["bonusTypeA"]);
  } else {
      reduction = Number(damage[ChoiceDamage]["bonusTypeA"]);
  }  
  
  var reductionB;
  if (typeGold.hasOwnProperty(bonusTypeB)) {
    reduction = /*"goldEff" * */ Number(gold[ChoiceGold]["bonusTypeB"]);
  } else {
      reduction = Number(damage[ChoiceDamage]["bonusTypeB"]);
  }
  
  
  
  return efficiency(curBonusA, nextBonusA, reductionA, costSP)
  
  /*
    see SPJsonArray
    see tarr
    see .push
    
    add .level to keep track of current level and properly use this function
  */
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
