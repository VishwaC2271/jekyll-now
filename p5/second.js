function setup() { 
  createCanvas(400, 400);
} 

var y=0
var x=150
function draw() { 
  background(220);
	arc(x,150,50,50,PI/4,-PI/4,PIE)
	if (y>20) {}
	else {ellipse(170,150,5,5)
				
			 }
	arc(x,150,50,50,PI/4,-PI/4,PIE)
	if (y>40) {}
	else {ellipse(190,150,5,5)
			 
			 }
	arc(x,150,50,50,PI/4,-PI/4,PIE)
	if (y>60) {}
	else {ellipse(210,150,5,5)
			 
			 }
	arc(x,150,50,50,PI/4,-PI/4,PIE)
	y=y+1
	x=x+1
}
