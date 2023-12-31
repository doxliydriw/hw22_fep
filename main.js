// Додати до попереднього завдання з інтернет - магазином:

// В інформації товару - кнопка "купити"

// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця !!input!!
// Місто(вибір зі списку) !!select!!
// Склад Нової пошти для надсилання !!textarea!!
// Післяплати або оплати банківської картки !!checkbox!!
// Кількість продукції, що купується !!select!!
// коментар до замовлення !!textarea!!
// Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше виводити помилку на сторінку
// Виводити інформацію про замовлення на сторінку(інформація про товар та про доставку)


const data = [
    {
        category: "bread",
        products: [
            {
                product: "banana bread",
                description: "a moist and sweet quick bread made with ripe bananas, flour, sugar, eggs, and butter",
                price: "10"
            },
            {
                product: "baguette",
                description: "a crisp and slender baked stick of bread, often served as an appetizer or snack",
                price: "10"
            },
            {
                product: "breadstick",
                description: "a long and thin loaf of French bread with a crisp crust and soft interior",
                price: "10"
            },
            {
                product: "whole_wheat_bread",
                description: "a type of bread made with flour that contains the whole grain of wheat, including the bran and germ",
                price: "10"
            },
            {
                product: "brioche",
                description: "a rich and buttery yeast bread with a tender crumb and a golden crust",
                price: "10"
            },
        ]
    },
    {
        category: "milk",
        products: [
            {
                product: "0% fat milk",
                description: "also known as skim milk, it is milk that has had all the fat removed",
                price: "15"
            },
            {
                product: "1,6% fat milk",
                description: "also known as low-fat milk, it is milk that has some of the fat removed, usually 1.5% or 1.8% in Europe",
                price: "14"
            },
            {
                product: "3,2% fat milk",
                description: "also known as whole milk, it is milk that has not had any fat removed, usually 3.25% or 3.5% in North America",
                price: "13"
            },
            {
                product: "goat milk",
                description: "milk that comes from goats, which has a slightly tangy flavor and more protein and calcium than cow's milk",
                price: "12"
            },
            {
                product: "almond milk",
                description: "a plant-based milk alternative made from almonds and water, which is dairy-free, vegan, and low in calories",
                price: "11"
            },
        ]
    },
    {
        category: "meat",
        products: [
            {
                product: "beef",
                description: "the meat from cattle, which is high in protein and iron and can be cooked in various ways",
                price: "15"
            },
            {
                product: "veal",
                description: "the meat from young calves, which is tender and pale in color and often used for escalopes or cutlets",
                price: "14"
            },
            {
                product: "pork",
                description: "the meat from pigs, which is versatile and flavorful and can be roasted, grilled, fried, or cured",
                price: "13"
            },
            {
                product: "lamb",
                description: "the meat from young sheep, which is succulent and mild in taste and often served with mint sauce or rosemary",
                price: "12"
            },
            {
                product: "goat",
                description: "the meat from goats, which is lean and gamey in flavor and popular in Caribbean, African, and Middle Eastern cuisines",
                price: "11"
            },
        ]
    }
]


const category = document.getElementById("category");
const products = document.getElementById("products");
const product_info = document.getElementById("product_info");
const buy = document.getElementById("buy");

let currentCat = {};
let currentProd = {};

const myform = document.getElementById('form');
const fnameElement = myform.elements["fname"];
const lnameElement = myform.elements['lname'];
const paymentElement = myform.elements['payment'];
const quantityElement = myform.elements['quantity'];
const cityElement = myform.elements['city'];
const addressElement = myform.elements['address'];
const commentsElement = myform.elements['comment'];
const radioError = document.querySelector('.radio-header')
res = []

const FNAME_ERROR = 'Please input first name';
const LNAME_ERROR = 'Please input last name';
const payment_ERROR = 'Please indicate your payment';
const quantity_ERROR = 'Please enter product quantity';
const CITY_ERROR = 'Please check your city of living';
const ADDRESS_ERROR = 'Please input your address';
const COMMENTS_ERROR = 'Please input your comments';


window.onload = () => {
    const ul = document.createElement("ul");
    data.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.category;
        li.setAttribute("id", element.category)
        ul.appendChild(li);
    })
    category.appendChild(ul);
    console.log("finished");
}

//////// EventListener for the CATEGORIES LIST.////////
category.addEventListener("click", (e) => {
    const click = e.target.id
    const choice = data.filter((obj) => {
        return obj.category === click;
    });
    // console.log(choice);
    products.innerHTML = '';
    product_info.innerHTML = '';
    product_info.style.display = 'none';
    const ul = document.createElement("ul");
    choice[0].products.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element.product;
        li.setAttribute("id", element.product)
        ul.appendChild(li);
        return currentCat = choice;
    })
    products.appendChild(ul);
    products.style.display = "flex";
    return currentCat;
})

//////// EventListener for the PRODUCT LIST.////////
products.addEventListener("click", (e) => {
    var children = products.children[0].children
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "lightgrey";
    }
    const click = e.target.id;
    // console.log(click);
    const choice = currentCat[0].products.filter(function (product) {
        return product.product === click;
    })
    // console.log(choice);
    product_info.innerHTML = '';
    const p = document.createElement("p");
    p.textContent = choice[0].description;
    product_info.appendChild(p);
    product_info.appendChild(buy);
    document.getElementById(click).style.background = "lightblue"
    product_info.style.display = "flex";
    return currentProd = choice;
})

//////// EventListener for the BUY BUTTON.////////
buy.addEventListener("click", (e) => {
    alert('Added to basket')
    products.innerHTML = '';
    product_info.innerHTML = '';
    products.style.display = 'none';
    product_info.style.display = 'none';
    category.style.display = 'none';
    myform.style.display = 'grid';
})


function ShowError(elem, msg) {
    console.log(elem);
    const errorAlert = elem.parentNode.querySelector('.alert');
    console.log(errorAlert);
    errorAlert.textContent = msg;
    elem.classList.add('.active');
}

function ShowSuccess(elem, msg) {
    console.log('true');
    const errorAlert = elem.parentNode.querySelector('.alert');
    errorAlert.textContent = '';
    elem.classList.remove('.active');
}
///Validate NAME ///
function validateFname(el, message) {
    // console.log(el)
    if (el.value !== "") {
        res.push(['Your name:', el.value]);
        ShowSuccess(el, message);
        return true;
    } else {
        // console.log(el, FNAME_ERROR);
        ShowError(el, message);
        return false;
    }
}

///Validate LASTNAME ///
function validateLname(el, message) {
    // console.log(el)
    if (el.value !== "") {
        res.push(['Your surname', el.value]);
        ShowSuccess(el, message);
        return true;
    } else {
        // console.log(el, FNAME_ERROR);
        ShowError(el, message);
        return false;
    }
}

///Validate PAYMENT ///
function validatepayment(el, message) {
    let selectedpayment;
    for (const radio of el) {
        if (radio.checked) {
            selectedpayment = radio.value;
        }
    }
    if (selectedpayment) {
        res.push(['Way of payment:', selectedpayment]);
        ShowSuccess(radioError, message);
        return true;
    }
    ShowError(radioError, message);
    return false;
}


///Validate QUANTITY ///
function validatequantity(el, message) {
    console.log()
    let qty = el.valueAsNumber;
    if (qty > 0) {
        res.push(['Ordered quantity:', qty]);
        ShowSuccess(radioError, message);
        return true;
    }
    ShowError(radioError, message);
    return false;
}



///Validate CITY ///
function validateCity(el, message) {
    if (el.selectedIndex != 0) {
        res.push(['City of delivery:', el.value]);
        ShowSuccess(el, message);
        return true;
    }
    ShowError(el, message);
    return false;
}

///Validate NOVA POSHTA ///
function validateAddress(el, message) {
    // console.log(el)
    if (el.value !== "") {
        res.push(['Nova poshta brunch:', el.value]);
        ShowSuccess(el, message);
        return true;
    } else {
        // console.log(el, FNAME_ERROR);
        ShowError(el, message);
        return false;
    }
}

///Validate COMMENTS///
function validateComments(el, message) {
    // console.log(el)
    if (el.value !== "") {
        res.push(['Comments:', el.value]);
        ShowSuccess(el, message);
        return true;
    } else {
        // console.log(el, FNAME_ERROR);
        ShowError(el, message);
        return false;
    }
}

function datatable() {
    document.getElementById('form').setAttribute('style', 'display: none');
    const section = document.getElementById('form_sec')
    table = document.createElement('table');
    table.setAttribute('id', 'datatable');
    section.appendChild(table);
    thead = document.createElement('th');
    thead.setAttribute('colspan', 2);
    thead.textContent = 'Your order details';
    table.appendChild(thead);
    for (i of res) {
        const row = document.createElement('tr');
        const cellOne = document.createElement('td');
        cellOne.textContent = i[0];
        const cellTwo = document.createElement('td');
        cellTwo.textContent = i[1];
        row.appendChild(cellOne);
        row.appendChild(cellTwo);
        table.appendChild(row);
    }


    console.log(res);

}
//////// EventListener for the form.////////

myform.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(fnameElement, 'inside listener')
    res = []
    const isFnameValid = validateFname(fnameElement, FNAME_ERROR);
    const isLnameValid = validateLname(lnameElement, LNAME_ERROR);
    const ispaymentValid = validatepayment(paymentElement, payment_ERROR);
    const isquantityValid = validatequantity(quantityElement, quantity_ERROR);
    const isCityValid = validateCity(cityElement, CITY_ERROR);
    const isAddressValid = validateAddress(addressElement, ADDRESS_ERROR);
    const isCommentsValid = validateComments(commentsElement, COMMENTS_ERROR);

    if (isFnameValid && isLnameValid && ispaymentValid && isquantityValid && isCityValid && isAddressValid && isCommentsValid) {
        res.push(["Product: ", currentProd[0].product]);
        console.log('Submit');
        datatable();
    }
})
