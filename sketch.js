
function setup() {
	createCanvas(windowWidth, windowHeight);
	background ("black");

		
}

function draw() {	
	//tool for mouse position
	console.log(mouseX,mouseY);

	//no stroke
	noStroke();

	//poster background (white)
	fill(250,245,232);
	rect(420, 0,600,windowHeight);


	//color yellow
	fill(235,198,79);
	rect(450,30,540,650);

	//color white(face)
	fill(250,245,232);
	rect(630,30,180,650);
	
	//color black
	fill(8,8,6);
	rect(630,30,180,180);
	quad(630,30,450,190,450,350,630,500);
	quad(810,30,990,190,990,350,810,500);

	//color purple
	fill(118,84,123);
	triangle(630,30,630,210,540,110);
	triangle(810,30,900,110,810,210);

	//color blue
	fill(87,135,220);
	rect(630,210,180,75);

	//color pink
	fill(240,177,186);
	triangle(630,285,810,285,720,365);

	//color red
	fill(212,0,30);
	rect(810,500,180,180);
	triangle(450,680,630,680,630,500);
	//her mouth
	triangle(720,430,690,465,750,465);

	//color green
	fill(42,77,80);
	triangle(630,680,810,680,810,500);



}


