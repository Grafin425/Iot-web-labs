let a = [50, 100, 2, 22, 1, 53, 6];


for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

    }
}

// let cars_card = document.querySelectorAll('.cars_card')
// console.log(cars_card)
// replacedNode = card_pole.replaceChild(card_pole.children[1], card_pole.children[0]);
// console.log(replacedNode);
// card_pole.appendChild(replacedNode);

document.querySelector('.highest_first').onclick = mySort;
document.querySelector('.lowest_first').onclick = mySortDesc;
// document.querySelector('.calculate').onclick = count;

function mySort() {
    let card_pole = document.querySelector('.card_pole');
    for (let i = 0; i < card_pole.children.length; i++) {
        for (let j = i; j < card_pole.children.length; j++) {
            if (+card_pole.children[i].getAttribute('price-sort') > +card_pole.children[j].getAttribute('price-sort')) {
                replacedNode = card_pole.replaceChild(card_pole.children[j], card_pole.children[i]);
                insertAfter(replacedNode, card_pole.children[i]);
            }
        }
    }

}

function mySortDesc() {
    let card_pole = document.querySelector('.card_pole');
    for (let i = 0; i < card_pole.children.length; i++) {
        for (let j = i; j < card_pole.children.length; j++) {
            if (+card_pole.children[i].getAttribute('price-sort') < +card_pole.children[j].getAttribute('price-sort')) {
                replacedNode = card_pole.replaceChild(card_pole.children[j], card_pole.children[i]);
                insertAfter(replacedNode, card_pole.children[i]);
            }
        }
    }

}

// function count() {
//     var summ = 0;

//     var count_arr = document.getElementsByClassName("cars_card");
//     for (var i = 0; i < count_arr.length; i++) {
//         summ += Number(count_arr[i].card_information__price)
//     }
//     document.getElementById("total_price").card_information__price = "₴" + String(summ);
// }



function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}