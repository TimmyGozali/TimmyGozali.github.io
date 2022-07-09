const limit =  {
   "0": {
      "SP cost": 0,
      "Cumulative cost": 0,
      "Mana cap": "0",
      "Mana boost": 1
   },
   "1": {
      "SP cost": 1,
      "Cumulative cost": 1,
      "Mana cap": "5",
      "Mana boost": 1.1
   },
   "2": {
      "SP cost": 1,
      "Cumulative cost": 2,
      "Mana cap": "8",
      "Mana boost": 1.15
   },
   "3": {
      "SP cost": 1,
      "Cumulative cost": 3,
      "Mana cap": "12",
      "Mana boost": 1.24
   },
   "4": {
      "SP cost": 2,
      "Cumulative cost": 5,
      "Mana cap": "19",
      "Mana boost": 1.31
   },
   "5": {
      "SP cost": 2,
      "Cumulative cost": 7,
      "Mana cap": "26",
      "Mana boost": 1.38
   },
   "6": {
      "SP cost": 2,
      "Cumulative cost": 9,
      "Mana cap": "35",
      "Mana boost": 1.45
   },
   "7": {
      "SP cost": 2,
      "Cumulative cost": 11,
      "Mana cap": "46",
      "Mana boost": 1.52
   },
   "8": {
      "SP cost": 3,
      "Cumulative cost": 14,
      "Mana cap": "62",
      "Mana boost": 1.59
   },
   "9": {
      "SP cost": 3,
      "Cumulative cost": 17,
      "Mana cap": "80",
      "Mana boost": 1.66
   },
   "10": {
      "SP cost": 3,
      "Cumulative cost": 20,
      "Mana cap": "103",
      "Mana boost": 1.73
   },
   "11": {
      "SP cost": 4,
      "Cumulative cost": 24,
      "Mana cap": "132",
      "Mana boost": 1.8
   },
   "12": {
      "SP cost": 4,
      "Cumulative cost": 28,
      "Mana cap": "168",
      "Mana boost": 1.87
   },
   "13": {
      "SP cost": 5,
      "Cumulative cost": 33,
      "Mana cap": "213",
      "Mana boost": 1.94
   },
   "14": {
      "SP cost": 6,
      "Cumulative cost": 39,
      "Mana cap": "269",
      "Mana boost": 2.01
   },
   "15": {
      "SP cost": 7,
      "Cumulative cost": 46,
      "Mana cap": "337",
      "Mana boost": 2.08
   },
   "16": {
      "SP cost": 8,
      "Cumulative cost": 54,
      "Mana cap": "421",
      "Mana boost": 2.15
   },
   "17": {
      "SP cost": 9,
      "Cumulative cost": 63,
      "Mana cap": "524",
      "Mana boost": 2.22
   },
   "18": {
      "SP cost": 11,
      "Cumulative cost": 74,
      "Mana cap": "652",
      "Mana boost": 2.29
   },
   "19": {
      "SP cost": 12,
      "Cumulative cost": 86,
      "Mana cap": "809",
      "Mana boost": 2.36
   },
   "20": {
      "SP cost": 14,
      "Cumulative cost": 100,
      "Mana cap": "1,000",
      "Mana boost": 2.43
   },
   "21": {
      "SP cost": 16,
      "Cumulative cost": 116,
      "Mana cap": "1,234",
      "Mana boost": 2.5
   },
   "22": {
      "SP cost": 18,
      "Cumulative cost": 134,
      "Mana cap": "1,520",
      "Mana boost": 2.57
   },
   "23": {
      "SP cost": 21,
      "Cumulative cost": 155,
      "Mana cap": "1,870",
      "Mana boost": 2.64
   },
   "24": {
      "SP cost": 24,
      "Cumulative cost": 179,
      "Mana cap": "2,295",
      "Mana boost": 2.71
   },
   "25": {
      "SP cost": 28,
      "Cumulative cost": 207,
      "Mana cap": "2,815",
      "Mana boost": 2.78
   }
}

const siphon = {
   "0": {
      "SP cost": 0,
      "Cumulative cost": 0,
      "Siphon amount": 0
   },
   "1": {
      "SP cost": 1,
      "Cumulative cost": 1,
      "Siphon amount": 1.4
   },
   "2": {
      "SP cost": 1,
      "Cumulative cost": 2,
      "Siphon amount": 1.596
   },
   "3": {
      "SP cost": 2,
      "Cumulative cost": 4,
      "Siphon amount": 1.827
   },
   "4": {
      "SP cost": 2,
      "Cumulative cost": 6,
      "Siphon amount": 2.086
   },
   "5": {
      "SP cost": 2,
      "Cumulative cost": 8,
      "Siphon amount": 2.378
   },
   "6": {
      "SP cost": 2,
      "Cumulative cost": 10,
      "Siphon amount": 2.717
   },
   "7": {
      "SP cost": 3,
      "Cumulative cost": 13,
      "Siphon amount": 3.109
   },
   "8": {
      "SP cost": 3,
      "Cumulative cost": 16,
      "Siphon amount": 3.55
   },
   "9": {
      "SP cost": 3,
      "Cumulative cost": 19,
      "Siphon amount": 4.056
   },
   "10": {
      "SP cost": 4,
      "Cumulative cost": 23,
      "Siphon amount": 4.636
   },
   "11": {
      "SP cost": 4,
      "Cumulative cost": 27,
      "Siphon amount": 5.298
   },
   "12": {
      "SP cost": 5,
      "Cumulative cost": 32,
      "Siphon amount": 6.054
   },
   "13": {
      "SP cost": 6,
      "Cumulative cost": 38,
      "Siphon amount": 6.926
   },
   "14": {
      "SP cost": 7,
      "Cumulative cost": 45,
      "Siphon amount": 7.917
   },
   "15": {
      "SP cost": 8,
      "Cumulative cost": 53,
      "Siphon amount": 9.052
   },
   "16": {
      "SP cost": 9,
      "Cumulative cost": 62,
      "Siphon amount": 10.35
   },
   "17": {
      "SP cost": 11,
      "Cumulative cost": 73,
      "Siphon amount": 11.842
   },
   "18": {
      "SP cost": 12,
      "Cumulative cost": 85,
      "Siphon amount": 13.551
   },
   "19": {
      "SP cost": 14,
      "Cumulative cost": 99,
      "Siphon amount": 15.505
   },
   "20": {
      "SP cost": 16,
      "Cumulative cost": 115,
      "Siphon amount": 17.735
   },
   "21": {
      "SP cost": 18,
      "Cumulative cost": 133,
      "Siphon amount": 20.296
   },
   "22": {
      "SP cost": 21,
      "Cumulative cost": 154,
      "Siphon amount": 23.229
   },
   "23": {
      "SP cost": 24,
      "Cumulative cost": 178,
      "Siphon amount": 26.58
   },
   "24": {
      "SP cost": 28,
      "Cumulative cost": 206,
      "Siphon amount": 30.424
   },
   "25": {
      "SP cost": 32,
      "Cumulative cost": 238,
      "Siphon amount": 34.82
   }
}

const puppet = {
   "0": {
      "xAttempts": 1
   },
   "1": {
      "xAttempts": 1.01
   },
   "2": {
      "xAttempts": 1.02
   },
   "3": {
      "xAttempts": 1.03
   },
   "4": {
      "xAttempts": 1.04
   },
   "5": {
      "xAttempts": 1.05
   },
   "6": {
      "xAttempts": 1.06
   },
   "7": {
      "xAttempts": 1.07
   },
   "8": {
      "xAttempts": 1.08
   },
   "9": {
      "xAttempts": 1.09
   },
   "10": {
      "xAttempts": 1.1
   },
   "11": {
      "xAttempts": 1.11
   },
   "12": {
      "xAttempts": 1.12
   },
   "13": {
      "xAttempts": 1.13
   },
   "14": {
      "xAttempts": 1.14
   },
   "15": {
      "xAttempts": 1.15
   },
   "16": {
      "xAttempts": 1.16
   },
   "17": {
      "xAttempts": 1.17
   },
   "18": {
      "xAttempts": 1.18
   }
}

const fury = {
   "0": {
      "bonus taps": 0
   },
   "1": {
      "bonus taps": 1
   },
   "2": {
      "bonus taps": 2
   },
   "3": {
      "bonus taps": 3
   },
   "4": {
      "bonus taps": 4
   },
   "5": {
      "bonus taps": 5
   },
   "6": {
      "bonus taps": 6
   },
   "7": {
      "bonus taps": 8
   },
   "8": {
      "bonus taps": 10
   },
   "9": {
      "bonus taps": 12
   },
   "10": {
      "bonus taps": 15
   },
   "11": {
      "bonus taps": 18
   },
   "12": {
      "bonus taps": 21
   },
   "13": {
      "bonus taps": 24
   },
   "14": {
      "bonus taps": 27
   },
   "15": {
      "bonus taps": 30
   },
   "16": {
      "bonus taps": 30
   }
}

const potion = {
   "0": {
      "effect": 1
   },
   "1": {
      "effect": 1.5
   },
   "2": {
      "effect": 1.75
   },
   "3": {
      "effect": 2
   }
}

const clone = {
   "1": {
      "attempts": 1
   },
   "2": {
      "attempts": 1.9
   },
   "3": {
      "attempts": 3.3
   },
   "4": {
      "attempts": 5.2
   },
   "5": {
      "attempts": 7.3
   },
   "6": {
      "attempts": 9.7
   },
   "7": {
      "attempts": 12.3
   },
   "8": {
      "attempts": 15.1
   },
   "9": {
      "attempts": 18.1
   },
   "10": {
      "attempts": 21.2
   },
   "11": {
      "attempts": 24.6
   },
   "12": {
      "attempts": 28
   },
   "13": {
      "attempts": 31.6
   },
   "14": {
      "attempts": 35.4
   },
   "15": {
      "attempts": 39.2
   },
   "16": {
      "attempts": 43.2
   },
   "17": {
      "attempts": 47.3
   },
   "18": {
      "attempts": 51.5
   },
   "19": {
      "attempts": 55.9
   },
   "20": {
      "attempts": 60.3
   },
   "21": {
      "attempts": 64.8
   },
   "22": {
      "attempts": 69.5
   },
   "23": {
      "attempts": 74.2
   },
   "24": {
      "attempts": 79
   },
   "25": {
      "attempts": 84
   },
   "26": {
      "attempts": 89
   },
   "27": {
      "attempts": 94.1
   },
   "28": {
      "attempts": 99.3
   },
   "29": {
      "attempts": 104.6
   },
   "30": {
      "attempts": 109.9
   },
   "31": {
      "attempts": 115
   },
   "32": {
      "attempts": 120
   },
   "33": {
      "attempts": 125
   },
   "34": {
      "attempts": 130
   },
   "35": {
      "attempts": 135
   }
}
