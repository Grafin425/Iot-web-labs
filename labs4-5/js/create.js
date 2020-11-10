import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

import {
    postCars,
} from "./api.js";

const createButton = document.getElementById("create");


createButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { productionYear, producerName, priceInUaH, model, weightInKilograms, numberOfButton } = getInputValues();

    clearInputs();

    postCars({
        productionYear,
        producerName,
        priceInUaH,
        model,
        weightInKilograms,
        numberOfButton,
    });
    alert("CAR CREATED")
});