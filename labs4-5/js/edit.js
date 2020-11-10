import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

import {
    updateCars,
} from "./api.js";

const submitButton = document.getElementById("create");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const query = window.location.search.substring(1);
    const vars = query.split("=");
    const itemId = vars[1];

    const { productionYear, producerName, priceInUaH, model, weightInKilograms, numberOfButton } = getInputValues();

    clearInputs();

    updateCars(itemId, {
        productionYear,
        producerName,
        priceInUaH,
        model,
        weightInKilograms,
        numberOfButton,
    });
    alert("CAR Edited")
});