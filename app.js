//

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let parentElement = document.getElementById('salesData');
// // let seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     cookiesPerHoure: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
//             let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
//             this.cookiesPerHoure.push(cookies);
//             this.total += cookies;
//         }
//         console.log(this.cookiesPerHoure);
//         console.log(this.total);
//     },
//     render: function () {
//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.name;
//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
//         }
//         let total = document.createElement('li');
//             ul.appendChild(total);
//             total.textContent = `Total:${this.total} cookies`;
//     }
// }

// function getRandomCustomer(minCust, maxCust) {
//     minCust = Math.ceil(minCust);
//     maxCust = Math.floor(maxCust);
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
// }
// seattle.getCustomer();
// seattle.render();

// //__________________________________tokyo___________________________________//

// let tokyo = {
//     name: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     cookiesPerHoure: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
//             let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
//             this.cookiesPerHoure.push(cookies);
//             this.total += cookies;
//         }
//         console.log(this.cookiesPerHoure);
//         console.log(this.total);
//     },
//     render: function () {
//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.name;
//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
//         }
//             let total = document.createElement('li');
//             ul.appendChild(total);
//             total.textContent = `Total:${this.total} cookies`;

//     }
// }

// function getRandomCustomer(minCust, maxCust) {
//     minCust = Math.ceil(minCust);
//     maxCust = Math.floor(maxCust);
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
// }



// tokyo.getCustomer();
// tokyo.render();





// //__________________________________________________Dubai________________________________________//




// let dubai = {
//     name: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.6,
//     cookiesPerHoure: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
//             let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
//             this.cookiesPerHoure.push(cookies);
//             this.total += cookies;
//         }
//         console.log(this.cookiesPerHoure);
//         console.log(this.total);
//     },
//     render: function () {
//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.name;
//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
//         }
//             let total = document.createElement('li');
//             ul.appendChild(total);
//             total.textContent = `Total:${this.total} cookies`;

//     }
// }

// function getRandomCustomer(minCust, maxCust) {
//     minCust = Math.ceil(minCust);
//     maxCust = Math.floor(maxCust);
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
// }



// dubai.getCustomer();
// dubai.render();




// //___________________________________Paris_____________________________________________//


// let paris = {
//     name: 'paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     cookiesPerHoure: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
//             let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
//             this.cookiesPerHoure.push(cookies);
//             this.total += cookies;
//         }
//         console.log(this.cookiesPerHoure);
//         console.log(this.total);
//     },
//     render: function () {
//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.name;
//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
//         }
//             let total = document.createElement('li');
//             ul.appendChild(total);
//             total.textContent = `Total:${this.total} cookies`;

//     }
// }

// function getRandomCustomer(minCust, maxCust) {
//     minCust = Math.ceil(minCust);
//     maxCust = Math.floor(maxCust);
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
// }



// paris.getCustomer();
// paris.render();


// //___________________________________________________lima________________________________________//

// let lima = {
//     name: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     cookiesPerHoure: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             // console.log(getRandomCustomer(this.minCust, this.maxCust)*this.avgCookie);
//             let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
//             this.cookiesPerHoure.push(cookies);
//             this.total += cookies;
//         }
//         console.log(this.cookiesPerHoure);
//         console.log(this.total);
//     },
//     render: function () {
//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.name;
//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${hours[i]} : ${this.cookiesPerHoure[i]} cookies `;
//         }
//             let total = document.createElement('li');
//             ul.appendChild(total);
//             total.textContent = `Total:${this.total} cookies`;

//     }
// }

// function getRandomCustomer(minCust, maxCust) {
//     minCust = Math.ceil(minCust);
//     maxCust = Math.floor(maxCust);
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
// }



// lima.getCustomer();
// lima.render();







//_________________________________________constructur function__________________________________//

'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('salesData');

let salesTable = document.getElementById('salesTable');

function CookieStand(name, min, max, avg) {
    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.agvCookie = avg;
    this.cookiesPerHour = [];
    this.total = 0;
    CookieStand.allCookies.push(this)
  }

  CookieStand.allCookies = [];

  CookieStand.prototype.getCustomer = function() {
    for(let i = 0; i < hours.length; i++) {
      // console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }

    // console.log(this.cookiesPerHour);
    // console.log(this.total)
  };

  CookieStand.prototype.render = function() {
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = this.name;

    for(let i = 0; i < hours.length; i++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.textContent = this.cookiesPerHour[i];
    }

    let total = document.createElement('th');
      tr.appendChild(total);
      total.textContent = this.total;
  }

  let seattle = new CookieStand('Seattle', 23, 65, 6.3)
  let tokyo = new CookieStand('Tokyo', 3, 24, 1.2)
  let dubai = new CookieStand('Dubai', 11, 38, 3.7)
  let paris = new CookieStand('Paris', 20, 38, 2.3)
  let lima = new CookieStand('liam', 2, 16, 4.6)

  makeTableHeader();

  seattle.getCustomer();
  seattle.render();

  tokyo.getCustomer();
  tokyo.render();

  dubai.getCustomer();
  dubai.render();

  paris.getCustomer();
  paris.render();

  lima.getCustomer();
  lima.render();

  makeTableFooter();

  function makeTableHeader() {
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Location';

    for(let i = 0; i < hours.length; i++) {
      let th2 = document.createElement('th');
      tr.appendChild(th2);
      th2.textContent = hours[i];
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Daily totals';
  }



  function makeTableFooter() {
    // console.log(CookieStand.allCookies)
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Totals';

    let hourlyTotal = 0;
    let totalOfTotals = 0;
    for(let i = 0; i < hours.length; i++) {
      hourlyTotal = 0;
      for(let j = 0; j < CookieStand.allCookies.length; j++) {
        // console.log(CookieStand.allCookies[j].cookiesPerHour[i])
        let total = CookieStand.allCookies[j].cookiesPerHour[i];
        hourlyTotal += total;
        totalOfTotals += total;
      }
      let th2 = document.createElement('th');
      tr.appendChild(th2);
      th2.textContent = hourlyTotal;
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = totalOfTotals;
}

  // Helper function
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

  }