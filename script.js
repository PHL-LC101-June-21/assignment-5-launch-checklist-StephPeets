// Write your JavaScript code here!


window.addEventListener("load", function () {

    let list = document.querySelector("#faultyItems");
    list.style.visibility = 'hidden';
    let form = document.querySelector("form");

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
     
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

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