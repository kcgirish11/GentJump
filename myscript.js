var box; 

void setup()
{
	size(800,800); 
	background(0, 204, 204);
	box = new Box(100, 100, -2);
	
}

void draw()
{
	background(0,204,204); 
	box.drawBox();
}


class Box 
		{
			var xPosition;
			var yPosition;
			var speedX;
				
			Box(xPos, yPos, xSpeed)
			{
				xPosition = xPos;
				yPosition = yPos;
				speedX = xSpeed;
			}
			
		void drawBox()
			{
				noStroke();
				fill(230, 186, 76);
				rect(xPosition+10,yPosition+310, 60,60); //the actual yellow box
				//arrow for box
				fill(18, 1, 1);
				rect(xPosition+35,yPosition+340,10,30); //arrow's stick
				triangle(xPosition+25,yPosition+350,xPosition+55,yPosition+350,xPosition+40,yPosition+330); //triangle of the arrow
			}
			
			
			void moveBox()
			{
				xPosition = xPosition + speedX;
				
				if(xPosition < 2)//when the house is off the screen
				{
				xPosition=480;//move it to the right of the screen
				}
					
			}
		
		
		}
		
		class Townhouse 
		{
			var xPosition;
			var yPosition;
			var speedX;
			var r;
			var g;
			var b;
				
			Townhouse(xPos, yPos, xSpeed,color)
			{
				xPosition = xPos;
				yPosition = yPos;
				speedX = xSpeed;
				r= color[0];
				g= color[1];
				b= color[2];
			}
			
		void drawTownhouse()
			{
				//line(-20, 376, 418, 376);
				noStroke(); 

				fill (r, g, b);
				triangle(xPosition+26, yPosition+161, xPosition+147, yPosition+161, xPosition+87, yPosition+137); //triangle

				fill (r, g, b);
				rect(xPosition+26, yPosition+173, 121, 201); //red building

				fill(145, 181, 181);
				rect(xPosition+28, yPosition+163, 116, 7); //top

				fill(145, 181, 181);
				rect(xPosition+36, yPosition+181, 24, 40); //top left window

				fill(145, 181, 181);
				rect(xPosition+73, yPosition+181, 24, 40); //top middle window

				fill(145, 181, 181);
				rect(xPosition+110, yPosition+181, 24, 40); //top right window

				fill(145, 181, 181);
				rect(xPosition+36, yPosition+228, 24, 40); //middle left building

				fill(145, 181, 181);
				rect(xPosition+73, yPosition+228, 24, 40); //middle middle window

				fill(145, 181, 181);
				rect(xPosition+110, yPosition+228, 24, 40); // middle right window

				fill(145, 181, 181);
				rect(xPosition+36, yPosition+275, 24, 40); //bottom left window

				fill(145, 181, 181);
				rect(xPosition+73, yPosition+275, 24, 40); //bottom middle window

				fill(145, 181, 181);
				rect(xPosition+110, yPosition+275, 24, 40); //bottom right window

				fill(145, 181, 181);
				rect(xPosition+36, yPosition+323, 24, 40); //ground left window

				fill(145, 181, 181);
				rect(xPosition+73, yPosition+323, 24, 40); //ground middle window

				fill(44, 136, 138); 
				rect(xPosition+108, yPosition+322, 29, 52); //door

				fill(0, 0, 0);
				ellipse(xPosition+113, yPosition+352, 2, 2); //door knob
			}
			
			void moveTownhouse()
			{
				xPosition = xPosition + speedX;
				
				if(xPosition < -130)//when the house is off the screen
				{
				xPosition=480;//move it to the right of the screen
				}
					
			}
		}	
		
		class Car
			{
			var r;
			var g;
			var b;
			var Xpos;
			var Ypos;
			var speedX;
			Car(color,xp,yp,sp)
			{
				r= color[0];
				g= color[1];
				b= color[2];
				Xpos= xp;
				Ypos= yp;
				speedX= sp;
			}
		
			void drawCar()
			{
			noStroke();
			fill(r,g,b);
			rect(Xpos,Ypos,100,30);
			arc(Xpos+50,Ypos-7,75,70,180,360);
			fill(0,0,0);
			ellipse(Xpos+20,Ypos+30,25,25);
			ellipse(Xpos+80,Ypos+30,25,25);
			}
		
			void moveCar()
			{
			Xpos = Xpos+ speedX;
				if(Xpos < -130)
				{
				  Xpos = 480;
				}
			}
		}
		
				class Coin 
		{
			var xPosition;
			var yPosition;
			var speedX;
			var r;
			var g;
			var b;
				
			Coin(xPos, yPos, xSpeed,color)
			{
				xPosition = xPos;
				yPosition = yPos;
				speedX = xSpeed;
				r= color[0];
				g= color[1];
				b= color[2];
			}
			
		void drawCoin()
			{
				//coins
				stroke(222, 192, 40); //orange border
				strokeWeight(2); //size of the orange border
				fill(225, 255, 0);
				ellipse(xPosition+200,yPosition+200,20,20); //yellow circle
			}
			
			
			void moveCoin()
			{
				xPosition = xPosition + speedX;
				
				if(xPosition < 2)//when the house is off the screen
				{
				xPosition=480;//move it to the right of the screen
				}
					
			}
		
		
		}
		class Condo{
			var xPos;
			var yPpos;
			var speedX;
			Condo(xp,yp,sp)
			{
				xPos= xp;
				yPos= yp;
				speedX= sp;
			}
		
			void drawCondo()
			{
				noStroke();
				fill(204, 194, 194);
				rect(xPos,yPos,175,300);//building
				//fill(141, 138, 150);
				//quad(xPos,yPos,xPos-10,yPos-20,xPos+185,yPos-20,xPos+175,yPos);//roof
				//stroke(56, 64, 94);
				//strokeWeight(2);
				fill(119, 137, 156);
				rect(xPos+20,yPos+20,50,40);//windows
				rect(xPos+100,yPos+20,50,40);//windows
				rect(xPos+20,yPos+80,50,40);//windows
				rect(xPos+100,yPos+80,50,40);//windows
				rect(xPos+20,yPos+140,50,40);//windows
				rect(xPos+100,yPos+140,50,40);//windows
				//stroke(91, 99, 117);
				//strokeWeight(2);
				rect(xPos+57.5,yPos+227,30,70);//doors
				rect(xPos+90.5,yPos+227,30,70);//doors
				//stroke(92, 173, 94);
				//strokeWeight(1.75);
				fill(32, 153, 36);
				ellipse(xPos+30,yPos+285,45,45);//bush
			}
		
			void moveCondo()
			{
			xPos = xPos+ speedX;
				if(xPos < -160)
				{
				  xPos = 650;
				}
			}
		}
		
		class Cone 
		{
			var xPosition;
			var yPosition;
			var speedX;
			var r;
			var g;
			var b;
				
			Cone(xPos, yPos, xSpeed,color)
			{
				xPosition = xPos;
				yPosition = yPos;
				speedX = xSpeed;
				r= color[0];
				g= color[1];
				b= color[2];
			}
			
		void drawCone()
			{
				fill(255, 102, 0);
				triangle(xPosition+17,yPosition+380,xPosition+58,yPosition+380,xPosition+36,yPosition+335); //cone's triangle

				stroke(232, 202, 111);//
				strokeWeight(1.6); //yellow line's width

				fill(196, 94, 4);
				ellipse(xPosition+37,yPosition+384,50,13);//bottom of the cone

				noStroke();
			}
			
			
			void moveCone()
			{
				xPosition = xPosition + speedX;
				
				if(xPosition < 2)//when the house is off the screen
				{
				xPosition=480;//move it to the right of the screen
				}
					
			}
		
		
		}
		