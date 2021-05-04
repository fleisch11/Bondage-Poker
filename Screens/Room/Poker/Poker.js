var PokerBackground = "white";
var PokerPlayerCard1 = 0;
var PokerPlayerCard2 = 0;
var PokerEnemyCard1 = 0;
var PokerEnemyCard2 = 0;
var PokerPlayerDouble = false;
var PokerEnemyDouble = false;
var PokerShowCards = false;
var Win = false;
var Lose = false;
var Draw = false;
var PokerPlayerMoney = 100;
var PokerEnemyMoney = 100;
var PokerRaise = 0;
var PokerSahra = "";
var Fold = false;





function PokerCardGet(CardNumber) {
	var CardType = "";

	if (CardNumber >= 0 && CardNumber < 13) {
		CardType = "Assets/cards/Clovers_"
	}
	if (CardNumber > 12 && CardNumber < 26) {
		CardType = "Assets/cards/Hearts_"
	}
	if (CardNumber > 25 && CardNumber < 39) {
		CardType = "Assets/cards/Pikes_"
	}
	if (CardNumber > 38 && CardNumber < 52) {
		CardType = "Assets/cards/Tiles_"
	}

	if (CardNumber % 13 >= 0 && CardNumber % 13 < 9) {
		return (CardType + (CardNumber % 13 + 2) + "_white.png");
	}

	if (CardNumber % 13 > 8 && CardNumber % 13 < 13) {
		if (CardNumber % 13 == 9) {
			return (CardType + "Jack_white.png");
		}
		if (CardNumber % 13 == 10) {
			return (CardType + "jQueen_white.png");
		}
		if (CardNumber % 13 == 11) {
			return (CardType + "King_white.png");
		}
		if (CardNumber % 13 == 12) {
			return (CardType + "qA_white.png");
		}
	}
}


function PokerResult() {
	if (!Fold) {
		if (!PokerPlayerDouble && !PokerEnemyDouble) {
			if (Math.max(PokerPlayerCard1 % 13, PokerPlayerCard2 % 13) > Math.max(PokerEnemyCard1 % 13, PokerEnemyCard2 % 13)) {
				Win = true;
			}
			else if (Math.max(PokerPlayerCard1 % 13, PokerPlayerCard2 % 13) == Math.max(PokerEnemyCard1 % 13, PokerEnemyCard2 % 13)) {
				if (Math.min(PokerPlayerCard1 % 13, PokerPlayerCard2 % 13) > Math.min(PokerEnemyCard1 % 13, PokerEnemyCard2 % 13)) {
					Win = true;
				}
				else if (Math.min(PokerPlayerCard1 % 13, PokerPlayerCard2 % 13) == Math.min(PokerEnemyCard1 % 13, PokerEnemyCard2 % 13)) {
					Draw = true;
				}
				else { Lose = true; }
			}
			else { Lose = true; }
		}

		if (PokerPlayerDouble && !PokerEnemyDouble) {
			Win = true;
		}

		if (!PokerPlayerDouble && PokerEnemyDouble) {
			Lose = true;
		}

		if (PokerPlayerDouble && PokerEnemyDouble) {
			if (PokerPlayerCard1 % 13 > PokerEnemyCard1 % 13) {
				Win = true
			}
			else if (PokerPlayerCard1 % 13 == PokerEnemyCard1 % 13) {
				Draw = true;
			}
			else { Lose = true; }
		}
	}
	if (Fold) {
		Lose = true;
	}
	PokerGetMoney();
}

function PokerGetMoney() {
	if (Win) {
		PokerPlayerMoney += (5 + PokerRaise);
		PokerEnemyMoney -= (5 + PokerRaise);
	}
	if (Lose) {
		PokerPlayerMoney -= (5 + PokerRaise);
		PokerEnemyMoney += (5 + PokerRaise);
	}
}


function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function PokerNewHand() {
	PokerPlayerCard1 = getRandomInt(1, 51);
	PokerPlayerCard2 = getRandomInt(1, 51);
	PokerEnemyCard1 = getRandomInt(1, 51);
	PokerEnemyCard2 = getRandomInt(1, 51);
	Win = false;
	Draw = false;
	Lose = false;
	Fold = false;
}

function PokerLoad() {
	PokerNewHand();
	PokerGetSahra();
}

function PokerRun() {


	DrawImageResize(PokerSahra, 500, 0, 700, 1024);

	DrawText(PokerPlayerMoney.toString(), 100, 800, "black", "white");
	DrawText(PokerEnemyMoney.toString(), 1900, 200, "black", "white");
	DrawImageResize(PokerCardGet(PokerPlayerCard1), 450, 800, 100, 150);
	DrawEmptyRect(450, 800, 100, 150, "black");
	DrawImageResize(PokerCardGet(PokerPlayerCard2), 550, 800, 100, 150);
	DrawEmptyRect(550, 800, 100, 150, "black");
	if (PokerPlayerCard1 == PokerPlayerCard2) {
		PokerPlayerDouble = true;
	}

	if (PokerShowCards == true) {
		DrawImageResize(PokerCardGet(PokerEnemyCard1), 2000 - 450, 200, 100, 150);
		DrawImageResize(PokerCardGet(PokerEnemyCard2), 2000 - 550, 200, 100, 150);
		if (Win) {
			DrawRect(100, 100, 100, 100, "green");
		}
		if (Lose) {
			DrawRect(100, 100, 100, 100, "red");
		}
		if (Draw) {
			DrawRect(100, 100, 100, 100, "yellow");
		}
		if (PokerPlayerMoney >= 200 || PokerPlayerMoney <= 0) {
			DrawButton(200, 400, 100, 100, "New Game", "white");
		}
		else { DrawButton(200, 400, 100, 100, "Deal", "white"); }
	}
	DrawEmptyRect(2000 - 450, 200, 100, 150, "black");
	DrawEmptyRect(2000 - 550, 200, 100, 150, "black");

	if (PokerShowCards == false) {
		DrawButton(300, 400, 100, 100, "Raise", "white");
	}
	if (PokerShowCards == false) {
		DrawButton(400, 400, 100, 100, "Call", "white");
	}
	if (PokerShowCards == false) {
		DrawButton(500, 400, 100, 100, "Fold", "white");
	}


}

function PokerClick() {
	if (!PokerShowCards) {
		if (MouseIn(300, 400, 100, 100)) {
			PokerShowCards = true;
			PokerRaise = 10;
			PokerResult();
			PokerGetSahra();
		}
		if (MouseIn(400, 400, 100, 100)) {
			PokerShowCards = true;
			PokerRaise = 0;
			PokerResult();
			PokerGetSahra();
		}
		if (MouseIn(500, 400, 100, 100)) {
			PokerShowCards = true;
			Fold = true;
			PokerRaise = 0;
			PokerResult();
			PokerGetSahra();
		}
	}
	if (PokerShowCards) {
		if (MouseIn(200, 400, 100, 100)) {
			if (PokerPlayerMoney >= 200 || PokerPlayerMoney <= 0) {
				PokerPlayerMoney = 100;
				PokerEnemyMoney = 100;
			}
			PokerShowCards = false;
			PokerNewHand();
			PokerGetSahra();
		}
	}
}


function PokerGetSahra() {
	if (PokerPlayerMoney >= 200) {
		PokerSahra = "Assets/SahraPoses/Win.png";
	}
	if (PokerPlayerMoney <= 0) {
		PokerSahra = "Assets/SahraPoses/Lose.png";
	}
	else {
		if (PokerPlayerMoney >= 100 && PokerPlayerMoney < 115) {
			PokerSahra = "Assets/SahraPoses/1 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney >= 115 && PokerPlayerMoney < 140) {
			PokerSahra = "Assets/SahraPoses/4 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney >= 140 && PokerPlayerMoney < 175) {
			PokerSahra = "Assets/SahraPoses/5 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney >= 175 && PokerPlayerMoney < 200) {
			PokerSahra = "Assets/SahraPoses/6 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney >= 60 && PokerPlayerMoney < 100) {
			PokerSahra = "Assets/SahraPoses/2 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney >= 20 && PokerPlayerMoney < 60) {
			PokerSahra = "Assets/SahraPoses/3 (" + (getRandomInt(1, 2)) + ").png"
		}
		if (PokerPlayerMoney > 0 && PokerPlayerMoney < 20) {
			PokerSahra = "Assets/SahraPoses/7 (" + (getRandomInt(1, 2)) + ").png"
		}
	}
}