void setup()
{
	size(800,500); 
	background(0, 102, 153);
	income = 90; 
	costOfLiving = 90; 
	time = millis();
	sceneTime = millis();
	coinTime = millis(); 
	keyTouch = false; 
	youLost = false; 
	road = new Road(0, 450);
	chara = new Character(60, 440);
	var box = 0;
	for(var i = 0; i < 7; i++)
	{
		boxes.push(new Box(box, 100, -2));
		box += 200;
	}
	var town = 0; 
	for(var k = 0; k < 8; k++)
	{
		townhouses.push(new Townhouse(town, 75, -3, [random(0, 255), random(0,255), random(0, 100)]));
		town += 121; 
		
	}
	var cone = 0; 
	for(var l =0; l < 5; l++)
	{
		cones.push(new Cone(cone, 480, -1));
		cone += 180;
	}
	var coin = 0; 
	for(var p = 0; p < 10; p++)
	{
		coins.push(new Coin(coin, 390, -1));
		coin += random(50,100);
	}
	var condo = 0; 
	for(var m = 0; m < 3; m++)
	{
		condos.push(new Condo(condo, 165, -3));
		condo += 300;
	}
	
	
}

void draw()
{
	background(71,145,181);
	 fill(255,255,0); 
	ellipse(70,70,50,50);
	for(var h = 0; h < townhouses.length; h++)
	{
		townhouses[h].drawTownhouse(); 
		townhouses[h].moveTownhouse();
	}
	if(millis() - sceneTime >= 40000)
	{
		for(var i = 0; i < condos.length; i++)
		{
			condos[i].drawCondo(); 
			condos[i].moveCondo(); 
		}
	}
	road.drawRoad();
	
	for(var k = 0; k < boxes.length; k++)
	{
		boxes[k].drawBox();
		boxes[k].moveBox(); 
	}
	for(var p = 0; p < coins.length;p++)
	{
		coins[p].drawCoin(); 
		coins[p].moveCoin();
		if(coins[p].xPosition === (chara.x + 30) && (coins[p].yPosition-20) === chara.y)
		{
			coins.splice(p, 1);
			income+= 5; 
			
		}
	}
	
	if(millis() - sceneTime >= 10000)
	{
		for(var c = 0; c < cones.length; c++)
		{
			cones[c].drawCone();
			cones[c].moveCone(); 
			if(cones[c].xPosition === chara.x && (cones[c].yPosition-40) === chara.y)
			{
				income-= 3;
				//println("CONE");
				//println(cones.length);
				//println("CONES  " + cones[c].yPosition);
				
			}
		} 
	}
	chara.drawCharacter();
	chara.jump(); 
	//println("Character Yposition  " + chara.y);
	textFont("monospace", 25);
	text("Income: " + income, 530, 30); 
	text("Cost Of Living: " + costOfLiving, 530, 60);

		if(millis() - time >= 2000)
		{
			costOfLiving += 2; 
			time = millis(); 
		}
		
		if(millis() - coinTime >= 6000)
		{
			coins.push(new Coin(random(800,850), 390, -1));
			coinTime = millis(); 
		}
		if(income <= costOfLiving * (2/3))
		{
			///alert("YOUR INCOME DROPPED TOO MIUCH!!!! SORRY you have been DISPLACED!!!!");
			background(0,0,0); 
			textSize(70);
			text("YOU LOST", 200, 300); 
			noLoop(); 
		}
		if(income > costOfLiving)
		{
			background(255,255,255);
			fill(0,0,0);
			textSize(70);
			text("YOU WON!", 200, 300);
			noLoop(); 
		}

}
