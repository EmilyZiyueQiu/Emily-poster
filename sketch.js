
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
	



}


