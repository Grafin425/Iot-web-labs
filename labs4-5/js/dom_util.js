export const REMOVE_BUTTON_PREFIX = 'remove-button-';
export const EDIT_BUTTON_PREFIX = 'edit-button-';


const findInput = document.getElementById('cars_search');
const productionYearInput = document.getElementById("year");
const producerNameInput = document.getElementById("mark");
const priceInUahInput = document.getElementById("price");
const modelInput = document.getElementById("model");
const weightInKilogramsInput = document.getElementById("weight");
const itemsContainer = document.getElementById("itemContainer");

const getItemId = (id) => `item-${id}`;


const itemTemplate = ({ id, weightInKilograms, priceInUaH, productionYear, producerName, model }) => `
<div id="${getItemId(id)}" >
                <div class="cars_card">
                    <div class="front_card">
                        <div class="card_image">
                            <img class="card_image__poligon" src="img/news-1005181.jpg" alt="">
                        </div>
                        <div class="card_information">
                            <div class="card_information__title">  ${producerName} ${model}</div>
                            <div class="card_information__price">${priceInUaH} $</div>
                            <div class="card_information__year">Year:${productionYear}</div>
                            <div class="card_information__kilograms">Weight: ${weightInKilograms}kg</div>
                              <div class="card_button">
                                <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="card_button__edit ">Edit</button>
                                <button id="${REMOVE_BUTTON_PREFIX}${id}"  class="card_button__remove ">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>`;

export const clearInputs = () => {
    productionYearInput.value = "";
    producerNameInput.value = "";
    priceInUahInput.value = "";
    modelInput.value = "";
    weightInKilogramsInput.value = "";
};

export const addItemToPage = ({ id, productionYear, producerName, priceInUaH, model, weightInKilograms, numberOfButton }, onEditItem, onDeletedItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, productionYear, producerName, priceInUaH, model, weightInKilograms, numberOfButton }, onEditItem, onDeletedItem)
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deletedButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);


    editButton.addEventListener("click", onEditItem);
    deletedButton.addEventListener("click", onDeletedItem);

}

export const renderItemsList = (items, onEditItem, onDeletedItem) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item, onEditItem, onDeletedItem);
    }
};

export const getInputValues = () => {
    return {
        productionYear: productionYearInput.value,
        producerName: producerNameInput.value,
        priceInUaH: priceInUahInput.value,
        model: modelInput.value,
        weightInKilograms: weightInKilogramsInput.value,
    };
};

export const getInputProducerName = () => {
    return findInput.value
};