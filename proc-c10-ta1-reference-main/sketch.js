var marks = [40,35,45,38,40]; // Matriz posições começa 0 e acaba na 4 (matriz e uma varial que contem varios "valores")

function score_average() 
{
  var sum = marks[0] + marks[1] + marks[2] + marks[3]+marks[4]; 
  var avg = sum/marks.length; 
  console.log("a media é: ");
  console.log(avg);

}

function setup() {
  createCanvas(400,400);
  score_average();

}

function draw() 
{
 
background(51);

}

