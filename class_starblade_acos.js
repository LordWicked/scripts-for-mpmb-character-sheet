/*

Import Script for the character sheet made by MPMB

Class: Starblade by Ariadne's Codex of Strings 

*/

var iFileName = "class_starblade.js";
RequiredSheetVersion(12.999);

SourceList.HC={
    name : "Ariadne's Codex of Strings",
    abbreviation : "ACoS",
    group : "Primary Sources",
    url : "https://codexofstrings.com/pages/the-universe-of-strings#shopify-section-template--24909636829524__image_with_text_rDFbDz",
    date : "15/06/2025"
};

ClassList["starblade"] = {
	regExpSearch : /^(?=.*star)(?=.*blade).*$/i,
	name : "Starblade",
	source : ["ACoS", 94],
	primaryAbility : "\n \u2022 Starblade: Strength and Wisdom;",
	prereqs : "\n \u2022 Starblade: Strength 13 and Wisdom 13;",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
//                  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
	saves : ["Str", "Wis"],
	skills : ["\n\n" + toUni("Starblade") + ": Choose two from Athletics, Acrobatics, Arcana, Perception and Survival.", "\n\n" + toUni("Starblade") + ": Choose two from Athletics, Acrobatics, Arcana, Perception and Survival."],
    toolProfs : { 
        primary : [["Smith's tools", 1]],
		secondary : [["Smith's tools", 1]]
	},

	armor : [
		[true, true, true, true],
		[true, true, false, true]
	],

	weapons : [
		[true, true],
		[true, true]
	],

	equipment : "Starblade starting equipment:\n \u2022 Two martial weapons;\n \u2022 Five javelins -or- any simple melee weapon;\n \u2022 An explorer's pack -or- a diplomat's pack;\n \u2022 A suit of scale mail;\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Astral Path", []],
	
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//             1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
	abilitySave : 5, //Wis=5

	features : {
		"starsight" : {
			name : "Starsight",
			source : ["ACOS", 96],
			minlevel : 1,
			description : "\n   " + "As an action, I can hone my sight, gaining the effects of Detect Magic for one minute." + "\n   " + "While using starsight, I have advantage on perception checks and cannot be surprised." +"\n   " + "I can use this ability an amount of times equal to my proficiency bonus between short rests.",
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = What('Proficiency Bonus');",
			recovery : "short rest",
			action : "action"
		},

        "spellblade dice" : {
            name : "Spellblade Dice",
            source : ["ACOS", 95],
            minlevel : 1,
            description: "\n   " + "I have a number of spellblade dice, which are d6s, equal to my level" + "\n   " + "A spellblade die is expended when I use it and I regain all expended dice when I finish a short " + "\n   " + "or long rest" + "\n   " + "At 11th level my spellblade dice become d8s, at 17th level the become d10s",
			additional : ["d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
//             			   1     2     3     4     5     6     7     8     9     10    11    12    13    14    15    16    17     18     19     20
			usages : levels.map(function(n) {return n}),
			recovery : "short rest"
        },

		"simple spellblade maneuvers" : {
			name : "Simple Spellblade Maneuvers",
			source : ["ACOS", 96],
			minlevel : 1,
			description : "\n   " + "At 1st level, I learn two Simple Spellblade Maneuvers." + "\n   " + "I can choose an additional one at 3rd, 5th and 7th level." + "\n   " + "Once I use any spellblade maneuver, I cannot use the same maneuver until " + "\n   " + "the start of my next turn, unless otherwise stated." +"\n   " + "Whenever I gain a level in this class, I can choose to replace a spellblade maneuver I know " + "\n   " + "with another of the same category.",
			extraname : "Simple Spellblade Maneuvers",
			extrachoices : ["Solar Blade", "Force-Guided Weapon", "Gravity-Assisted Landing", "Solar Storm", "Repulsion", "Igniting Strike"],
			extraTimes : [2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
			"solar blade" : {
				name : "Solar Blade",
				description : "\n   " + "When I hit a target with a weapon attack, I can expend up to three spellblade dice, " + "\n   " + "dealing the result as extra fire or radiant damage to the target."
			},
			"force-guided weapon" : {
				name : "Force-Guided Weapon",
				description : "\n   " + "When I make a weapon attack or unarmed strike, I can expend one spellblade die " + "\n   " + "and add half its result to its attack and damage rolls."
			},
			"gravity-assisted landing" : {
				name : "Gravity-Assisted Landing",
				description : "\n   " + "As a reaction when I would take fall damage, I can expend any amount of Spellblade dice " + "\n   " + "and reduce the damage I take by an amount equal to my starblade level + the number I roll " +"\n   " + "on my expended spellblade die."
			},
			"solar storm" : {
				name : "Solar Storm",
				description : "\n   " + "As an action on my turn, I can expend up to three spellblade dice to spin my weapon " + "\n   " + "above my head, creating a whirlwing of solar energy around me. " + "\n   " + "Creatures in a 10 foot-radius-sphere centered on me must make a Dexterity saving throw, " + "\n   " + "taking the result of the expended spellblade die in radiant or fire damage on a failed save, or " + "\n   " + "half as much on a successful one."
			},
			"repulsion" : {
				name : "Repulsion",
				description : "\n   " + "As a reaction to an attack I can see that would hit me, I can expend one spellblade die and " + "\n   " + "reduce the damage by an amount equal to the result + my Wisdom modifier."
			},
			"igniting strike" : {
				name : "Igniting Strike",
				description : "\n   " + "When I hit a creature with a weapon attack, I can expend a spellblade die to ignite the target " + "\n   " + "for one minute." + "\n   " + "While ignited, the target takes one spellblade die as fire damage at the start of each turn." + "\n   " + "The target can use an action to douse the flames by rolling on the ground."
			}
		},

		"fighting style" : {
			name : "Fighting Style",
			source : ["ACoS", 96],
			minlevel : 2,
			description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above", 
			choices : ["Charging", "Astral Fighting", "Defense", "Dueling", "Great Weapon Fighting", "Mobile", "Two-Weapon Fighting"], 
			
            "charging" : { 
				name : "Charging Fighting Style",
				description : "\n   " + "When I move at least 15 feet in a straight line before making a melee attack in the same turn, " + "\n   " + "that melee attack deals an additional 1d6 damage of its type.",
			},

			"astral fighting" : {
				name : "Astral Fighting Style",
				description : "\n   " + "I gain an additional Starblade die and learn one simple Starblade maneuver of my choice.",
				extraLimitedFeatures : [{
					name : "Spellblade Dice",
					usages : 1,
					recovery : "short rest",
					addToExisting : true
				}],
				bonusClassExtrachoices : [{
					"class" : "starblade",
					feature : "simple spellblade maneuvers",
					bonus : 1
				}],
			},
			

			"defense" : {
		        name : "Defense Fighting Style",
		        description : desc("+1 bonus to AC when I'm wearing armor"),
		        extraAC : {
			    name : "Defense Fighting Style",
			    mod : 1,
			    text : "I gain a +1 bonus to AC while wearing armor.",
			    stopeval : function (v) { return !v.wearingArmor; }
		        }
	        },
			
			"dueling" : {
				name : "Dueling Fighting Style",
				description : desc("+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							for (var i = 1; i <= FieldNumbers.actions; i++) {
								if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
							};
							if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(fields.Description)) output.extraDmg += 2;
						},
						"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
					]
				}
			},

            "great weapon fighting" : {
				name : "Great Weapon Fighting Style",
				description : desc("Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.isMeleeWeapon && (/(\bversatile|((^|[^+-]\b)2|\btwo).?hand(ed)?s?)\b/i).test(fields.Description)) {
								fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : '');
							}
						},
						"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
					]
				}
			},

			"mobile" : {
				name : "Mobile Fighting Style",
				description : "\n   " + "When I make a melee attack against a creature, I can move 5 feet in a direction of my choice." + "\n   " + "This movement doesn't provoke opportunity attacks."
			},

			"two-weapon fighting" : { 
				name : "Two-Weapon Fighting Style",
				description : "\n   " + "I can add my ability modifier to the damage of my off-hand attacks",

				calcChanges : { 
					hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += \"\\n + \" + classes.known.sorcerer.level + \" from Draconic Resilience (Sorcerer)\";};", 

					atkCalc : ["if (isOffHand) {output.modToDmg = true; }; ", "When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks."], 

					atkAdd : ["if (WeaponName.match(/unarmed strike/i)) {fields.Description += 'Counts as magical';}; ", "My unarmed strikes count as magical for overcoming resistances and immunities."],
				}
			}
		},

        // Subclass on level 3
        "subclassfeature3" : { 
			name : "Astral Path",
			source : ["ACOS", 97],
			minlevel : 3,
			description : "\n   " + "Choose an Astral Path and put it in the \"Class\" field" + "\n   " + "Choose either Path of the Nebula, Path of the Singularity or Path of the Comet",
		},

		"grip of gravity" : {
			name : "Grip of Gravity",
			source : ["ACOS", 97],
			minlevel : 6,
			description : "\n   " + "I can't be disarmed while I am conscious and my weapon attacks are considered magical" + "\n   " + "I gain proficiency in Dexterity saving throws",
			// addMod : { type : "save", field : "Dex", mod: "Prof", text : "Proficiency in Dex saves"}
			saves : ["Dex"]
		},

		"greater spellblade maneuvers" : {
			name : "Greater Spellblade Maneuvers",
			source : ["ACOS", 96],
			minlevel : 7,
			description : "\n   " + "I learn two Greater Spellblade Maneuvers and an additional one at 14th level.",
			extraname : "Greater Spellblade Maneuvers",
			extrachoices : ["Gravitational Downpour", "Gravity-Assisted Jump", "Area of Deflection", "Solar Flare", "Gravitational Brace", "Blinding Burst"],
			extraTimes : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
//                        1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20	
			"gravitational downpour" : {
				name : "Gravitational Downpour",
				description : desc([
					"As a bonus action on my turn I can expend two spellblade dice to momentarily create an area of unendurable gravity in a 30 ft radius around me.",
					"Creatures I choose in that area must succeed on a Strength saving throw or be knocked prone."
				])
			},

			"gravity-assisted jump" : {
				name : "Gravity-Assisted Jump",
				description : desc([
					"As a bonus action on my turn I can use a spellblade die to jump 20 ft in any direction, including up.",
					"I don't need to be touching the ground to perform this jump.",
					"I can expend more spellblade dice to further ehance the jump, leaping 10 additional feet for every extra die, up to a maximum of 60 feet (4 additional dice)"
				])
			},

			"area of deflection" : {
				name : "Area of Deflection",
				description : desc([
					"As a bonus action on my turn, I can expend one spellblade die to create a 15 ft area centered on me where rogue gravitational currents make landing ranged attacks more difficult.",
					"Attacks aimed at targets within that area have a penalty equal to the spellblade die expended to use this maneuver.",
					"The area moves with me and lasts until the start of my next turn."
				])
			}, 

			"solar flare" : {
				name : "Solar Flare",
				description : desc([
					"As a bonus action on my turn I can expend up to five spellblade dice to thrust or slash horizontally with my weapon, creating either a line or a cone of solar energy.",
					"Creatures in a 5 ft wide, 60 ft long line or a 30 ft cone in front of me must make a Dexterity saving throw, taking the result of the expended spellblade dice in radiant / fire damage on a failed save, or half as much on a successful one."
					
				])
			},

			"gravitational brace" : {
				name : "Gravitational Brace",
				description : desc([
                	"As a reaction to a creature entering my melee reach I can expend a spellblade die to make an opportunity attack against it.",
                	"If the attack hits, the creature must succed on a Strength saving throw or fall prone and have their speed become 0 until the start of their next turn.",
					"Alternatively, if the creature is Large or smaller, I can choose to push the creature up to 15 feet in a direction of my choice."
            	]),
			},

			"blinding burst" : {
				name : "Blinding Burst",
				description : desc([
					"As a bonus action on my turn, I raise my weapon high and expend two spellblade dice, creating a burst of blinding solar light in a 30 ft radius around me.",
					"Creatures of my choice within that area must succeed on a Constitution saving throw or be blinded for one minute.",
					"A creature blinded in this way can repeat the saving throw at the end of each of its turns, ending the effect on a success."
				])
			}
		},

		"continual flare" : {
			name : "Continual Flare",
			source : ["ACOS", 97],
			minlevel : 9,
			description : "\n   " + "Whenever I hit a creature with a weapon attack, it takes extra fire or radiant damage " + "\n   " + "equal to one of my spellblade dice." + "\n   " + "I do not expend any spellblade dice to deal this extra damage.",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						var die = classes.known.starblade.levels < 11 ? 6 : (classes.known.starblade.levels < 17 ? 8 : 10);
						if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+1d' + die + ' Fire/Radiant damage';
					},
					"With my melee weapon attacks I deal an extra 1d8 radiant damage."
				]
			}
		},

		"weightless warrior" : { // Weight calculation TODO
			name : "Weightless Warrior",
			source : ["ACOS", 97],
			minlevel : 13,
			description : "\n   " + "All worn or carried equipment weighs half of its normal weight." + "\n   " + "I have a flying speed (hover) equal to my walking speed." + "\n   " + "I can add my Dex modifier to my AC while wearing heavy armor (maximum of +2) and " + "\n   " + "no longer suffer from Dexterity bonus limitations when wearing medium armor.",
		},

		"peerless spellblade" : {
			name : "Peerless Spellblade",
			source : ["ACOS", 97],
			minlevel : 20,
			description : "\n   " + "I can use a bonus action to momentarily enter a state of heightened consciousness " + "\n   " + "and physicality for the next minute." + "\n   " + "I don't expend spellblade dice to use my Starblade features and maneuvers during that time." + "\n   " + "Once I use this ability, I cannot do so again until I finish a short or long rest.",
			usages : 1,
			recovery : "short rest"
		}
	}
};

AddSubClass("starblade", "nebula", {
		regExpSearch : /^(?=.*path)(?=.*of)(?=.*the)(?=.*nebula).*$/i, 
		subname : "Path of the Nebula", 
		source : ["ACoS", 98], 
		features : { 

			"subclassfeature3" : { 
				name : "Nebulous Flare",
				source : ["ACoS", 98],
				minlevel : 3,
				description : desc([
					"Whenever a starblade feature allows me to deal fire or radiant damage, I can change the type ot the damage to lightning, acid, poison or cold.",
					"I learn several spellblade maneuvers related to my path.",
					"The first time I use one of my Unique Maneuvers after a long rest, I do not expend any spellblade dice."
				]),

				"solar deluge" : { 
					name : "Solar Deluge",
					description : desc([
						"As an action on my turn, I can expend up to three spellblade dice to create a downpour of astral energy from above.",
						"Choose up to 5 points within 60 feet of me.",
						"Creatures in 30-foot high, 5-feet wide vertical lines above those points must make a Dexterity saving throw, taking the result of the expended spellblade die in radiant / fire damage on a failed save, or half as much on a successful one."
					])
				},
				"nebulous blade" : { 
					name : "Nebulous Blade",
					description : desc([
						"As a bonus action on my turn, I can expend a spellblade die to replace the physical matter of a melee weapon I am wielding with pure elemental energy.",
						"For the next minute or until I stop wielding the weapon, it deals fire or radiant damage instead of its normal damage type."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "solar deluge"
                }, {
                    extrachoice : "nebulous blade"
				}]

				
			},

			"subclassfeature7" : {
				name : "Improved Flare",
				source : ["ACoS", 98],
				minlevel : 7,
				description : desc([
					"My mastery of nebulous magic improves some of my spellblade maneuvers.",
					"These maneuvers now count as Unique Maneuvers for me."
				]),

				"improved solar" : {
					name : "Improved Solar Blade, Solar Storm, Solar Deluge",
					description : desc([
						"I can now expend two additional spellblade dice (maximum of 5).",
						"Additionally, I add my Wisdom modifier to the damage of those maneuvers."
					])
				},

				"improved strike" : {
					name : "Improved Igniting Strike",
					description : desc([
						"I can now expend two spellblade dice instead of one to double the damage taken by the target at the start of each of its turns."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "improved solar",
                }, {
					extrachoice : "improved strike",
				}]
			},
		

			"subclassfeature10" : {
				name : "Elemental Resiliency",
				source : ["ACoS", 98],
				minlevel : 10,
				description : desc([
					"I can choose one of the following damage types when I finish a long rest: fire, radiant, lightning, acid, poison or cold.",
					"I gain resistance to that damage type until I choose a different one with this feature.", 
					"At 18th level, I can choose one damage resistance and one damage immunity from that list when I finish a long rest."
				])
			},

			"subclassfeature15" : {
				name : "Fast Flare",
				source : ["ACoS", 98],
				minlevel : 15,
				description : desc([
					"I can use the following spellblade maneuvers as an action or bonus action on my turn: Solar Storm, Solar Flare, Solar Deluge."
				])
			},
		}
	}
);

AddSubClass("starblade", "singularity", {
		regExpSearch : /^(?=.*path)(?=.*of)(?=.*the)(?=.*singularity).*$/i, 
		subname : "Path of the Singularity", 
		source : ["ACoS", 99], 
		features : { 
			"subclassfeature3" : { 
				name : "Far Strikes",
				source : ["ACoS", 99],
				minlevel : 3,
				description : desc([
					"I have an additional reach of 10 feet with all melee weapons that do not have the reach property.",
					"For weapons with the reach property, the additional reach is reduced to 5 feet.",

					"I learn several spellblade maneuvers related to my path.",
					"The first time I use one of my Unique Maneuvers after a long rest, I do not expend any spellblade dice."

				]),

				"force shield" : { 
					name : "Force Shield",
					description : desc([
						"I can now expend 2 spellblade dice at the beginning of my turn to gain a bonus to my AC equal to half the result of the expended dice (rounding down) until the start of my next turn."
					])
				},
				"gravitational furor" : { 
					name : "Gravitational Furor",
					extradescription : desc([
						"Immediately after I take the Attack action on my turn, I can expend two spellblade dice to make an additional attack with a melee weapon I am wielding as a bonus action."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "force shield"
                }, {
                    extrachoice : "gravitational furor"
				}]
			},
			
			"subclassfeature7" : {
				name : "Improved Force",
				source : ["ACoS", 99],
				minlevel : 7,
				description : desc([
					"My mastery of gravitational magic improves some of my spellblade maneuvers.",
					"These maneuvers now count as Unique Maneuvers for me."
				]),

				"improved jump" : {
					name : "Improved Gravity-Assisted Jump",
					description : desc([
						"No longer consumes my bonus action"
					])
				},

				"improved landing" : {
					name : "Improved Gravity-Assisted Landing",
					description : desc([
						"I can now expend a single spellblade die to fully mitigate any fall damage I would take."
					])
				},

				"improved repulsion" : {
					name : "Improved Repulsion",
					description : desc([
						"I can now expend an additional spellblade die to fuel this maneuver."
					])
				},

				"improved deflection" : {
					name : "Area of Deflection",
					description : desc([
						"I can now expend an additional spellblade die to fuel this maneuver."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "improved jump"
                }, {
                    extrachoice : "improved landing"
				},{
                    extrachoice : "improved repulsiom"
                }, {
                    extrachoice : "improved deflection"
				}]
			},

			"subclassfeature10" : {
				name : "Singularity Strikes",
				source : ["ACoS", 99],
				minlevel : 10,
				description : desc([
					"Whenever I deal bludgeoning, piercing or slashing damage, I can choose to deal force damage instead.",
					"Additionally, when I hit a Large or smaller creature with an attack, I can expend a spellblade die push them up to 10 feet in a direction of my choice."
				])
			},

			"subclassfeature15" : {
				name : "Projected Force Field",
				source : ["ACoS", 99],
				minlevel : 15,
				description : desc([
					"Whenever I am subjected to an effect that would allow me to make a Dexterity saving throw to halve its damage against me, I can use my reaction and expend two spellblade dice to create a gravitational current that wards me from harm.",
					"When I do so, I take no damage if I succeed, and only half damage if I fail."
				]),

				"projected force shield" : {
					extraname : "Projected Force Shield",
					extradescription : desc([
						"I can now expend an additional spellblade die to fuel this maneuver."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "projected force shield"
                }]
			},

			"subclassfeature18" : {
				name : "Permeating Force",
				source : ["ACoS", 9],
				minlevel : 18,
				description : desc([
					"I can affect a number of allies within 30 feet of me equal to half of my Wisdom modifier (rounded up) when I use my Force Shield spellblade maneuver or my Projected Force Field reaction."
				])
			}
		}
	}
);

AddSubClass("starblade", "comet", {
		regExpSearch : /^(?=.*path)(?=.*of)(?=.*the)(?=.*comet).*$/i, 
		subname : "Path of the Comet", 
		source : ["ACoS", 100], 
		features : { 

			"subclassfeature3" : { 
				name : "Violent Impact",
				source : ["ACoS", 100],
				minlevel : 3,
				description : desc([
					"When I shove or knock a creature prone, I can choose to deal an amount of bludgeoning damage equal to twice my proficiency bonus."
				]),

				"comet field" : { 
					name : "Comet Field",
					description : desc([
						"As an action on my turn, I can expend up to three spellblade dice to create an amount of miniature comets equal to the number of spellblade dice expended, which hover around me for the next minute.",
						"Each comet grants a +1 bonus to my AC.",
						"I can throw a comet using one attack from my Attack action, making a ranged weapon attack against a target within 60 feet.",
						"On a hit, the target takes one spellblade die in bludgeoning damage and is knocked prone if it is Large or smaller.",
						"I cannot have more than three active comets at a time."
					])
				},

				"asteroid dash" : { 
					name : "Asteroid Dash",
					description : desc([
						"As a bonus action on my turn, I can expend a spellblade die to instantly move up to 30 feet in a straight line to an unoccupied space that I can see, leaving a fiery trail in my wake.",
						"Creatures in the line I travel must succeed on a Dexterity saving throw or take one spellblade die in bludgeoning damage and be knocked prone.",
						"I can expend up to three additional spellblade dice to increase the maximum distance of my Asteroid Dash, by 10 feet per spellblade die expended on top of the first."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "comet field"
                }, {
                    extrachoice : "asteroid dash"
				}]
			},



			"subclassfeature7" : {
				name : "Improved Force",
				source : ["ACoS", 99],
				minlevel : 7,
				description : desc([
					"My mastery of orbital magic improves some of my spellblade maneuvers.",
					"These maneuvers now count as Unique Maneuvers for me."
				]),
				
				"improved downpour" : {
					name : "Impoved Gravitational Downpour",
					extradescription : desc([
						"Creatures that fail their saving throw against this maneuver now have their speed reduced to 0 in addition to being knocked prone."
					])
				},

				"improved weapon" : {
					name : "Improved Force-Guided Weapon",
					extradescription : desc([
						"I can now expend two spellblade die when I use this maneuver."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "improved downpour"
                }, {
                    extrachoice : "improved weapon"
				}]
			},

			"subclassfeature10" : {
				name : "Meteoric Strikes",
				source : ["ACoS", 100],
				minlevel : 10,
				description : desc([
					"Any time I deal bludgeoning damage, I can choose to deal force damage instead.",
					"Additionally, creatures have disadvantage on saving throws against being shoved or knocked prone by me."
				])
			},

			"subclassfeature15" : {
				name : "Aftershock",
				source : ["ACoS", 100],
				minlevel : 15,
				description : desc([
					"When I deal force damage to a creature, I can expend 2 spellblade die to create a staggering shockwave that follows my blow.",
					"When I do so, the target must succeed on a Constitution saving throw or be stunned until the end of its next turn."
				]),

				"aftershock" : {
					name : "Aftershock",
					description : desc([
					"When I deal force damage to a creature, I can expend 2 spellblade die to create a staggering shockwave that follows my blow.",
					"When I do so, the target must succeed on a Constitution saving throw or be stunned until the end of its next turn."
				])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "aftershock"
                }]
			},

			"subclassfeature18" : {
				name : "Meteoric Rift",
				source : ["ACoS", 100],
				minlevel : 18,
				description : desc([
					"My attunement to the meteoric bodies of the Astral Sea allow me to summon a destructive comet as an action by expending 5 spellblade dice.",
					"The comet makes impact at a point I can see within 300 feet.",
					"Creatures in a 40-foot radius sphere centered on that point must make a Dexterity saving throw, taking 8d6 bludgeoning damage and 8d6 fire damage on a failed save, or half as much on a successful one."
				]),

				"meteoric rift" :  {
					name : "Meteoric Rift",
					description : desc([
					"My attunement to the meteoric bodies of the Astral Sea allow me to summon a destructive comet as an action by expending 5 spellblade dice.",
					"The comet makes impact at a point I can see within 300 feet.",
					"Creatures in a 40-foot radius sphere centered on that point must make a Dexterity saving throw, taking 8d6 bludgeoning damage and 8d6 fire damage on a failed save, or half as much on a successful one."
					])
				},

				autoSelectExtrachoices : [{
                    extrachoice : "meteoric rift"
                }]
			}
		}
	}
);

