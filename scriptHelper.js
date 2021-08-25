// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionTarget = document.getElementById("missionTarget");



  missionTarget.innerHTML =
     `<h2>Mission Destination</h2>
      <ol>
          <li>Name: ${name}</li>
          <li>Diameter: ${diameter} </li>
          <li>Star: ${star}</li>
          <li>Distance from Earth: ${distance} </li>
          <li>Number of Moons: ${moons} </li>
      </ol>
      <img src="${imageUrl}">`

}

function validateInput(testInput) {
  if (testInput.length === 0) {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {

  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  let badFuelLevel = (validateInput(fuelLevelValue) !== 'Empty' && fuelLevelValue < 10_000);
  let goodFuelLevel = (validateInput(fuelLevelValue) !== 'Empty' && fuelLevelValue >= 10_000);

  let badCargoLevel = (validateInput(cargoLevelValue) !== 'Empty' && cargoLevelValue > 10_000);
  let goodCargoLevel = (validateInput(cargoLevelValue) !== 'Empty' && cargoLevelValue <= 10_000);

  if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || validateInput(fuelLevelValue) === 'Empty' || validateInput(cargoLevelValue) === 'Empty') {
    alert("Please fill out all fields!");
  } else if (validateInput(fuelLevelValue) === "Not a Number" || validateInput(cargoLevelValue) === "Not a Number") {
    alert("Please enter valid input!");
  }

  if (validateInput(pilotValue) === "Not a Number") {
    pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
  }

  if (validateInput(copilotValue) === "Not a Number") {
    copilotStatus.innerHTML = `Co-pilot ${copilotValue} is ready for launch`;
  }

  if (goodFuelLevel && goodCargoLevel) {
    list.style.visibility = 'visible';
    launchStatus.style.color = "rgb(65, 159, 106)";
    launchStatus.textContent = "Shuttle is Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotValue} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }

  if (badFuelLevel) {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }

  if (badCargoLevel) {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  }

  if (badCargoLevel && badFuelLevel) {
    list.style.visibility = "visible";
    launchStatus.style.color = "rgb(199, 37, 78)";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  }

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then(function (response) {
      return response.json();
    });

  return planetsReturned;
}

function pickPlanet(planets) {
  let choice = Math.floor(Math.random() * 10)
  let chosen = 0;
  if (choice < 5) {
    chosen = choice;
  }
  return planets[chosen];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
