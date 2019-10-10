
/*-- Exercise 1 --*/
var car = {
	name: "VW", 
	model: "Golf", 
	makeYear: 2010, 
	color: "red", 
	fuelType: "Benzin"
}

document.getElementById("car1").innerHTML = 
	"<b>Name</b>: " +car.name+ 
	"<br><b>Model</b>: " +car.model+
	"<br><b>Year</b>: " +car.makeYear+
	"<br><b>Color</b>: " +car.color+
	"<br><b>Fuel Type</b>: " +car.fuelType+ 
	"<br>";
	
	
/*-- Exercise 2 --*/
function Car(name, model, makeYear, color, fuelType ) {
	this.name = name;
	this.model = model;
	this.makeYear = makeYear;
	this.color = color;
	this.fuelType = fuelType;
}
	

var car = new Car("BMW", "Cabrio", 2003, "blue", "Diesel");

document.getElementById("car2").innerHTML = 
	"<b>Name</b>: " +car.name+ 
	"<br><b>Model</b>: " +car.model+
	"<br><b>Year</b>: " +car.makeYear+
	"<br><b>Color</b>: " +car.color+
	"<br><b>Fuel Type</b>: " +car.fuelType+ 
	"<br>";


/*-- Exercise 3 --*/
class Cars {
	construtor(name, model, makeYear, color, fuelType) {
		this.name = name;
		this.model = model;
		this.makeYear = makeYear;
		this.color = color;
		this.fuelType = fuelType;
	}
}

var car1 = new Cars("Audio", "Smart", 2013, "white", "Diesel");

document.getElementById("car3").innerHTML = 
	"<b>Name</b>: " +car1.name+ 
	"<br><b>Model</b>: " +car1.model+
	"<br><b>Year</b>: " +car1.makeYear+
	"<br><b>Color</b>: " +car1.color+
	"<br><b>Fuel Type</b>: " +car1.fuelType+ 
	"<br>";

	
