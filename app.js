'use strict';

// task1

class Exchanger {
    #prices = {
        "USD": 37.63540,
        "EUR": 39.9929,
        "PLN": 8.5454
    }
    #date = new Date()
    #cashBook = [];
    
    constructor(value, vasStr) {
        this.value = "";
        this.vasStr = "";
        this.#date = new Date();
        this.#cashBook = [];
    }
    
    calculate(value = 0, vasStr = "USD") {
        this.value = value;
        this.vasStr = vasStr;
        this.recordToCashBook();
    }
    
    get prices() {
        return this.#prices;
    }
    
    generateDate() {
        let d = this.#date;
        return `${d.getDate().toString().padStart(2, '0')}. ${d.getMonth().toString().padStart(2, '0')}. ${d.getDay().toString().padStart(2, '0')}`;
    }
    
    generateTime() {
        let d = this.#date;
        return `${d.getHours().toString().padStart(2, '0')}. ${d.getMinutes().toString().padStart(2, '0')}. ${d.getSeconds().toString().padStart(2, '0')}`;
    }
    
    generateObj() {
        return {
            date: this.generateDate(),
            time: this.generateTime(),
            valute: this.vasStr,
            sum: this.value,
            convert: (this.value / this.#prices[this.vasStr]).toFixed(3)
        }
    }
    
    recordToCashBook() {
        this.#cashBook.push(this.generateObj());
    }
    
    get cashBook() {
        return this.#cashBook;
    }
    
    set prices(value) {
        return this.#prices = value;
    }
}

const currency = function() {
    const a = new Exchanger();
    
    let b = confirm("Чи хочете ви обміняти валюти?");
    if (b === true) {
        let valuta = prompt("Обмін якої валюти ви хочете здійснити?", "USD");
        let value = +prompt("Вкажіть кількість обмінюваної валюти", "1");
        a.calculate(value, valuta);
        console.log(a.cashBook);
        currency();
    }
}

currency();

// task2

class ExtendedArray extends Array {
    constructor() {
        super();
        for (let i = 0; i < arguments.length; i++) {
            this.push(arguments[i]);
        }
    }

    getString(separator) {
        return this.join(separator);
    }

    getHtml(tagName) {
        if (tagName === 'li') {
            const listItems = this.map(item => `<li>${item}</li>`).join('');
            return document.write(`<ul>${listItems}</ul>`);
        } else {
            const elements = this.map(item => document.write(`<${tagName}>${item}</${tagName}>`)).join('');
            return elements;
        }
    }
}

const fruits = new ExtendedArray('Apple', 'Banana', 'Cherry', 'Date');

console.log(fruits.getString(','));

fruits.getHtml('ul');

fruits.getHtml('div');