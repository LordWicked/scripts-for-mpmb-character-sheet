/*

Import Script for the character sheet made by MPMB

Class: Starblade by Ariadne's Codex of Strings 

*/

var iFileName = "class_starblade.js";
RequiredSheetVersion(12.999);

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

	skills : ["\n\n" + toUni("Starblade") + ": Choose two from Athletics, Acrobatics, Arcana, Perception and Survival.", "\n\n" + toUni("Starblade") + ": TODO: Multiclass"],

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

	equipment : "Starblade starting equipment:\n \u2022 Two martial weapons;\n \u2022 Five javelins -or- any simple melee weapon;\n \u2022 An explorer's pack -or- a diplomat's pack;\n \u2022 A suit of scale mail;\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", //required; the text to display when citing the starting equipment

	subclasses : ["Astral Path", ["path of the nebula", "path of the singularity", "path of the comet"]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!

	// prestigeClassPrereq : 5, //optional; if you include this attribute, the sheet will consider the class a prestige class // You can make this attribute a number, which represents the levels the character must have before being able to gain the prestige class. Alternatively, you can make this attribute a string, which can be evaluated with eval() and returns either true (prereqs met) or false (prereqs not met).

	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//             1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
	abilitySave : 5, //Wis=5

	features : {
		"starsight" : {
			name : "Starsight",
			source : ["ACOS", 96],
			minlevel : 1,
			description : "\n   " + "As an action, I can hone my sight, gaining the effects of Detect Magic for one minute." + "\n   " + "While using starsight, I have advantage on perception checks and cannot be surprised." +"\n   " + "I can use this ability an amount of times equal to my proficiency bonus between short / long rests.",
			// usages :  
		},

        "spellblade dice" : {
            name : "Spellblade Dice",
            source : ["ACOS", 95],
            minlevel : 1,
            description: "\n   " + "I have a number of spellblade dice, which are d6s, equal to my level" + "\n   " + "A spellblade die is expended when I use it and I regain all expended dice when I finish a short " + "\n   " + "or long rest" + "\n   " + "At 11th level my spellblade dice become d8s, at 17th level the become d10s",
            //track dice
			additional : ["d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
//             			   1     2     3     4     5     6     7     8     9     10    11    12    13    14    15    16    17     18     19     20
			usages : /*[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]*/ levels.map(function(n) {return n}),
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
			// choicesNotInMenu : true, 
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
				description : "\n   " + "As a reaction when I would take fall damage, I can expend any amount of Spellblade dice " + "\n   " + "and reduce the damage I take by an amount equal to your starblade level + the number I roll " +"\n   " + "on my expended spellblade die."
			},
			"solar storm" : {
				name : "Solar Storm",
				description : "\n   " + "As an action on your turn, I can expend up to three spellblade dice to spin my weapon " + "\n   " + "above my head, creating a whirlwing of solar energy around me. " + "\n   " + "Creatures in a 10 foot-radius-sphere centered on me must make a Dexterity saving throw, " + "\n   " + "taking the result of the expended spellblade die in radiant or fire damage on a failed save, or " + "\n   " + "half as much on a successful one."
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
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above", 
			choices : ["Charging", "Astral Fighting", "Defense", "Dueling", "Great Weapon Fighting", "Mobile", "Two-Weapon Fighting"], 
            // choicesNotInMenu : true, 
			
            "charging" : { 
				name : "Charging Fighting Style",
				description : "\n   " + "When I move at least 15 feet in a straight line before making a melee attack in the same turn, " + "\n   " + "that melee attack deals an additional 1d6 damage of its type.",
			},

			"astral fighting" : {
				name : "Astral Fighting Style",
				description : "\n   " + "You gain an additional Starblade die and learn one simple Starblade maneuver of your choice."
				// +1 Tracking TODO
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
			
			// Dueling
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

			// Mobile Fighting
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
			addMod : { type : "save", field : "Dex", mod: "Dex", text : "I gain proficiency in Dex saves from Grip of Gravity"}
		},

		"continual flare" : {
			name : "Continual Flare",
			source : ["ACOS", 97],
			minlevel : 9,
			description : "\n   " + "Whenever I hit a creature with a weapon attack, it takes extra fire or radiant damage " + "\n   " + "equal to one of my spellblade dice." + "\n   " + "I do not expend any spellblade dice to deal this extra damage.",
			// Damage Calc TODO
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
}
