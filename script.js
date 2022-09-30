//Change language
const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');
        const nameEl = document.querySelector('.name');
        const tipsCurrencyEl = document.querySelector('.tipsCurrency');
        const paymentButtonEl = document.querySelector('.paymentButton');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');
       

                titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
                nameEl.textContent = data[attr].name;
                tipsCurrencyEl.textContent = data[attr].tipsCurrency;
                paymentButtonEl.textContent = data[attr].paymentButton;
    });
});

var data = {
    "english" : {
        "title" : "TIPS",
        "description" : "Тips for waiter",
        "name" : "Waiter name here",
        "tipsCurrency": "$CAD",
        "paymentButton": "Go To Payment"
    },
    "deutchland" : {
        "title" : "TIPP",
        "description" : "Trinkgelder für den Kellner",
        "name" : "Name des Kellners hier",
        "tipsCurrency": "€EUR",
        "paymentButton": "Gehen Sie zu Zahlung"
    },
    "français" : {
        "title" : "POINTE",
        "description" : "Тips pour le serveur",
        "name" : "Nom du serveur ici",
        "tipsCurrency": "€EUR",
        "paymentButton": "Aller au paiement"
    },
    "espagnol" : {
        "title" : "PROPINA",
        "description" : "Propinas para el mesero",
        "name" : "Nombre del camarero aqui",
        "tipsCurrency": "€EUR",
        "paymentButton": "Ir a pago"
    },
    "ukrainian" : {
        "title" : "ЧАЙОВІ",
        "description" : "Чайові для офіціанта",
        "name" : "Тут ім'я офіціанта",
        "tipsCurrency": "₴UAH",
        "paymentButton": "Перейдіть до Оплати"
    }
}


//amount to next page
function twentyFIve(){
    document.getElementById("amount").value="5";
}
function fifty(){
    document.getElementById("amount").value="10";
}
function hundred(){
    document.getElementById("amount").value="25";
}
//Emount on next page


//form data


document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number').innerText = document.querySelector('.card-number-input').value
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value.slice(2)
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value
}
