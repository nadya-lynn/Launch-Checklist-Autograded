// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (!testInput) {		
        return "Empty";
    }
    if(isNaN(parseInt(testInput))){
        return "Not a Number";
    } else
    {
        return "Is a Number";
    }
 }
 
    //let form = document.querySelector("form");

    let fuelLevel;
    let cargoReady = false;
    let fuelReady = false;
    let fieldCheck = false;
    let cargoMass;
    let cargoLevel;
    let pilot = "Chris";
    let copilot = "Bob";
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("launchStatus").innerText = `Awaiting Information Before Launch`;
    document.getElementById("pilotStatus").innerText = `Pilot ${pilot}Ready`;
    document.getElementById("copilotStatus").innerText = `Co-pilot ${copilot} Ready`;
    document.getElementById("fuelStatus").innerText = `Fuel level high enough for launch`;
    document.getElementById("cargoStatus").innerText = `Cargo mass low enough for launch`;

 }
if (validateInput(pilot).trim() === "" || validateInput(copilot).trim() === "" || validateInput(fuelLevel).trim() === "" || validateInput(cargoLevel).trim() === "") {
    //alert("All fields are required!");
    //document.getElementById("faultyItems").style.visibility = "hidden";
    fieldCheck = false;
}
if 
    (validateInput(pilot) !== "string" || validateInput(pilot).trim().length === 0) {
    //alert("Pilot Name!"); 
    //document.getElementById("faultyItems").style.visibility = "hidden";
    fieldCheck = false;   
}

if (validateInput(pilot) !== "Is a Number" && validateInput(pilot).trim().length > 0) {
    //alert("Pilot name is not a number");
    fieldCheck = false;
    //document.getElementById("faultyItems").style.visibility = "hidden";
}

if (validateInput(copilot) !== "string" || validateInput(copilot).trim().length === 0) {
    //alert("Copilot Name!"); 
    //document.getElementById("faultyItems").style.visibility = "hidden";
    fieldCheck = false;   
}

if (validateInput(copilot) !== "Is a Number" && validateInput(copilot).trim().length > 0) {
    //alert("Copilot name is not a number");
    fieldCheck = false;
    //document.getElementById("faultyItems").style.visibility = "hidden";
}

if (validateInput(cargoMass) !== "Is a Number" && validateInput(cargoMass) === "Not a Number") {
    //alert("Is a number");
    fieldCheck = false;
    //document.getElementById("faultyItems").style.visibility = "hidden";

}


 if (validateInput(fuelLevel) !== "Not a Number" && validateInput(fuelLevel) === "Empty") {
    console.log(`Please enter a numerical value`);
    //document.getElementById("faultyItems").style.visibility = "hidden";
    fieldCheck = false;
 }


 // Launch Checklist when fuel too low for launch
 if (validateInput(fuelLevel) < 10000 && fieldCheck) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").innerText = `Fuel level too low for launch`;
    document.getElementById(`launchStatus`).innerText = `Shuttle Not Ready for Launch`;
    document.getElementById("cargoStatus").innerText = `Cargo mass low enough for launch`;
    document.getElementById(`launchStatus`).style.color = "red";
    fuelReady = false;
    
 } else {
    fuelReady = true;
 }


 // Test   "Launch Checklist when cargo too heavy and fuel too low for launch"

 if (validateInput(fuelLevel) > 10000 && validateInput(cargoMass) === `Fuel level too low for launch`) {
    document.getElementById("faultyItems").style.visiblity = "visible";
    document.getElementById(`cargoStatus`).innerHTML = `Cargo mass too heavy for launch`;
    document.getElementById(`launchStatus`).innerHTML = `Shuttle Not Ready for Launch`;
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById(`launchStatus`).style.color = `red`;
    cargoReady = false;

 } else {
    cargoReady = true;
 }

 if (fuelReady && cargoReady && fieldCheck) {
    //document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById(`launchStatus`).innerText = `Shuttle is Ready for Launch`;
    document.getElementById(`launchStatus`).style.color = "green";

 }



 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    // Get random number and get planet with that index.

    return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;