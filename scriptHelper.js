// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)  {
    // Here is the HTML formatting for our mission target div.
    // Test: Mission target has the appropriate info. All PASSING. DO NOT TOUCH.
    document.getElementById("missionTarget").innerHTML =`
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (!testInput) {	
        //alert("All fields are required!");
        //console.log("All fields are required!");	
        return "Empty";
    }
    if (isNaN(parseInt(testInput))){
        //alert("All fields are required!");
        //console.log("All fields are required!");
        return "Not a Number";
    } else
    {
        //alert("All fields are required!");
        //console.log("All fields are required!");
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("pilotStatus").innerHTML = "Pilot Chris is ready for launch";
    document.getElementById("copilotStatus").innerHTML = "Co-pilot Bob is ready for launch";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    list.style.visibility = "visible";

    
if (validateInput(pilot).trim() === "" || validateInput(copilot).trim() === "" || validateInput(fuelLevel).trim() === "" || validateInput(cargoMass).trim() === "") {
    console.log("All fields are required!");
   

} if (validateInput(pilot).trim() !== "string" || validateInput(pilot).trim().length === 0) {
    console.log("Pilot Name!"); 
    

} else if (validateInput(!isNaN(Number(pilot))) && validateInput(pilot).trim().length > 0) {
    console.log("Pilot name is not a number");

} else if (validateInput(!isNaN(Number(copilot))) || validateInput(copilot).trim().length === 0) {
    console.log("Copilot Name!"); 
    
     
} else if (validateInput(copilot) !== "Is a Number" && validateInput(copilot).trim().length > 0) {
    console.log("Copilot name is not a number");
   

} else if (validateInput(fuelLevel) !== "Is a Number" && validateInput(cargoMass) !== "Is a Number") {
    console.log("Must be a number");
    //document.getElementById(`launchStatus`).innerHTML = "Shuttle Not Ready for Launch";
    

} else { (validateInput(Number(fuelLevel)) !== Number && validateInput(fuelLevel) === "Empty") 
    console.log(`Please enter a numerical value`);
   // document.getElementById(`launchStatus`).innerHTML = "Shuttle Not Ready for Launch";
}


 // Test: Launch Checklist when fuel too low for launch.    PASSING!!! DO NOT TOUCH!!!
 if (validateInput(Number(fuelLevel)) < 10000) {
    //document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
    //document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
    
    //document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById(`launchStatus`).innerHTML = `Shuttle Not Ready for Launch`;
    document.getElementById(`launchStatus`).style.color = 'red';
 } else {
    //document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById(`launchStatus`).style.color = 'red';
 } 


 // Test   "Launch Checklist when cargo too heavy for launch"

 if (validateInput(Number(cargoMass)) > 10000 ) {
    //document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("pilotStatus").innerHTML= `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById(`launchStatus`).style.color = 'green';
    
} else {
    //document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    document.getElementById(`launchStatus`).style.color = 'red';
}
     // Passing- DO Not Touch.    Ugh... not passing anymore
    // Test:  Launch Checklist when everything is good to go
    // Shuttle should be ready for launch, enough fuel and cargo
if (validateInput(Number(fuelLevel))  > 10000 && validateInput(Number(cargoMass) < 10000)) {
    document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById(`launchStatus`).innerHTML = "Shuttle is Ready for Launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    document.getElementById(`launchStatus`).style.color = 'green';
 
} else {
    document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready for Launch");
    //document.getElementById(`launchStatus`).style.color = `red`;

}


 }

// Test: fetching a list of planets from Planets URL- IS PASSING! DO NOT TOUCH.
 async function myFetch() {
    
     let response = await fetch("https://handlers.education.launchcode.org/static/planets.json") 

     let planetsReturned = await response.json();
     return planetsReturned;
     
 }
 

 //  Test: Select planets ar random. IS PASSING! DO NOT TOUCH!
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    // Get random number and get planet with that index.

    return planets[randomPlanet];
 };
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;