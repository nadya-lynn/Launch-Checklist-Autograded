// Write your JavaScript code here!

window.addEventListener("load", function() {
    //alert("All fields are required!");
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
   //add event listener for "formSubmit" button, click. grab all from your document. Use  document.   Inside your eventListenner call formSubmission()
   window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       
       let pilotName = document.querySelector("input[name=pilotName]").value;
       let copilotName = document.querySelector("input[name=copilotName]").value;
       let fuelLevel= document.querySelector("input[name=fuelLevel]").value;
       let cargoMass= document.querySelector("input[name=cargoMass]").value;
       
       if (pilotName.value === "" || copilotName.value === ""|| fuelLevel.value===""||cargoMass.value==="") {
          alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
       }
    });
   
 });
});