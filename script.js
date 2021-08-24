// Write your JavaScript code here!

window.addEventListener("load", function () {

    let list = document.querySelector("#faultyItems");
    list.style.visibility = 'hidden';
    let form = document.querySelector("form");

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



    form.addEventListener('submit', function (event) {

        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        const pilotValue = pilotInput.value;
        const copilotValue = copilotInput.value;
        const fuelLevelValue = fuelLevelInput.value;
        const cargoMassValue = cargoMassInput.value;

        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    });
});