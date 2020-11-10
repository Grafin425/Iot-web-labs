import {
    EDIT_BUTTON_PREFIX,
    REMOVE_BUTTON_PREFIX,
    renderItemsList,
    getInputProducerName,
} from "./dom_util.js";

import {
    deleteCars,
    getAllCars,
} from "./api.js";

// slider
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .slider_menu, .slider_text').toggleClass('active');
    })
})


const findProducerName = document.getElementById('find_button');
const returnButton = document.getElementById('cancel_find_button');

const sortButton = document.getElementById("highest_first");
const sumButton = document.getElementById("calculate");
const sumPrice = document.getElementById("total_price_output2");

let mouses = [];

export const refetchAllMouses = async() => {
    const allMouses = await getAllCars();
    mouses = allMouses;
    renderItemsList(mouses, onEditItem, onDeletedItem);
};

const onEditItem = async(e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
    e.target.i = onclick = () => {
        location.href = `edit.html?id=${itemId}`;
    }
    console.log(itemId)

};

const onDeletedItem = async(e) => {
    const itemId = e.target.id.replace(REMOVE_BUTTON_PREFIX, "");
    deleteCars(itemId).then(refetchAllMouses);
};

findProducerName.addEventListener("click", (event) => {
    event.preventDefault();
    const producerName = getInputProducerName();
    const findMouses = mouses.filter(mouse => mouse.producerName.search(producerName) !== -1);

    renderItemsList(findMouses, onEditItem, onDeletedItem);
});

returnButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemsList(mouses, onEditItem, onDeletedItem);
})


sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    mouses.sort((a, b) => {
        if (a.priceInUaH > b.priceInUaH) { return -1; }
        if (a.priceInUaH < b.priceInUaH) { return 1; }
        return 0;
    })

    renderItemsList(mouses, onEditItem, onDeletedItem);
})

sumButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sumOfPrice = 0;
    for (const mouse of mouses) {
        sumOfPrice += +mouse.priceInUaH;
    }
    sumPrice.textContent = sumOfPrice;
})

refetchAllMouses();