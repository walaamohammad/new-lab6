
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let parentElement = document.getElementById('salesData');
let seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    cookiesPerHoure: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
            let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesPerHoure.push(cookies);
            this.total += cookies;
        }
        console.log(this.cookiesPerHoure);
        console.log(this.total);
    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
        }
        let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `Total:${this.total} cookies`;
    }
}

function getRandomCustomer(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}
seattle.getCustomer();
seattle.render();

//__________________________________tokyo___________________________________//

let tokyo = {
    name: 'tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    cookiesPerHoure: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
            let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesPerHoure.push(cookies);
            this.total += cookies;
        }
        console.log(this.cookiesPerHoure);
        console.log(this.total);
    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
        }
            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `Total:${this.total} cookies`;
    
    }
}

function getRandomCustomer(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}



tokyo.getCustomer();
tokyo.render();





//__________________________________________________Dubai________________________________________//




let dubai = {
    name: 'dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.6,
    cookiesPerHoure: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
            let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesPerHoure.push(cookies);
            this.total += cookies;
        }
        console.log(this.cookiesPerHoure);
        console.log(this.total);
    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
        }
            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `Total:${this.total} cookies`;
    
    }
}

function getRandomCustomer(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}



dubai.getCustomer();
dubai.render();




//___________________________________Paris_____________________________________________//


let paris = {
    name: 'paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    cookiesPerHoure: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
            let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesPerHoure.push(cookies);
            this.total += cookies;
        }
        console.log(this.cookiesPerHoure);
        console.log(this.total);
    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
        }
            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `Total:${this.total} cookies`;
    
    }
}

function getRandomCustomer(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}



paris.getCustomer();
paris.render();
 

//___________________________________________________lima________________________________________//

let lima = {
    name: 'lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    cookiesPerHoure: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
            let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
            this.cookiesPerHoure.push(cookies);
            this.total += cookies;
        }
        console.log(this.cookiesPerHoure);
        console.log(this.total);
    },
    render: function () {
        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
        }
            let total = document.createElement('li');
            ul.appendChild(total);
            total.textContent = `Total:${this.total} cookies`;
    
    }
}

function getRandomCustomer(minCust, maxCust) {
    minCust = Math.ceil(minCust);
    maxCust = Math.floor(maxCust);
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}



lima.getCustomer();
lima.render();