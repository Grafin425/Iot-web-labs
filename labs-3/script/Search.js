let input = document.getElementById('carsSearch');

input.addEventListener('keyup', () => {
    let filter, div, divPrice;
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('cars_card');


    divPrice = document.getElementsByClassName('card_information__title');

    for (i = 0; i < divPrice.length; i++) {
        let a = divPrice[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = '';
        } else {
            div[i].style.display = 'none';
        }
    }
})