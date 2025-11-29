type Mage = { hp: number; mana: number; armor: number };
type Boss = { hp: number; dmg: number; armor: number };
type Player = Mage | Boss;

type Effect = {
	lifetime: number; // in turns
	dmg?: number;
	heal?: number;
	armor?: number;
};

type Spell = {
	cost: number;

	dmg?: number;
	heal?: number;
	armor?: number;

	effect?: Effect;
};

const SPELLS: Record<string, Spell> = {
	MAGIC_MISSILE: { cost: 53, dmg: 4 },
	DRAIN: { cost: 73, dmg: 2, heal: 2 },
	SHIELD: { cost: 113, effect: { lifetime: 6, armor: 7 } },
	POISON: { cost: 173, effect: { lifetime: 6, dmg: 3 } },
	RECHARGE: { cost: 229, effect: { lifetime: 5, heal: 101 } },
};

// For part 1, we have to play optimally
// Might need a priority queue for this

function solve(part: 1 | 2) {
	switch (part) {
		case 1:
			break;
		case 2:
			break;
	}
}

solve(1);
solve(2);
