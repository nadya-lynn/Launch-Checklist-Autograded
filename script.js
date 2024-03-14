// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

const { myFetch } = require("./scriptHelper");
// Task 3.
window.addEventListener("load", function() {
    //alert("All fields are required!");
    let form = document.querySelector(`form`);
    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo (
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl
        )

    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }).catch(function(planetsFetchingError) {
        console.log(`Catch Them All if You Cannot fetch Them Planets!`, planetsFetchingError);
    })



   //add event listener for "formSubmit" button, click. grab all from your document. Use  document.   Inside your eventListenner call formSubmission()
   
   window.addEventListener("load", function() {

    let form = document.querySelector(`form`);

    form.addEventListener("submit", function(event) {

       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuelLevel= document.querySelector("input[name=fuelLevel]");
       let cargoLevel= document.querySelector("input[name=cargoMass]");
       let list = document.getElementById(`faultyItems`);
    
       if (validateInput(pilot).trim() === "" || validateInput(copilot).trim() === "" || validateInput(fuelLevel).trim() === "" || validateInput(cargoLevel).trim() === "") {
        alert("All fields are required!");
        console.log("All fields are required!");
       // Add prevent default form submission.
       event.preventDefault();
       event.stopPropagation();
       }
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);


          // stop the form submission
           
       
    });
   
 });
});