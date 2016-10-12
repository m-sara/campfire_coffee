'use strict';

// Title
var Title = {
  docTitleEl: document.getElementById('docTitle'),
  typeTitle: function() {
    var docTitle = document.createElement('h1');
    docTitle.textContent = 'Campfire Coffee Daily Projections';
    this.docTitleEl.appendChild(docTitle);
  }
};

// Round function
function round(num) {
  return parseFloat(num.toFixed(1));
};

// Contains all stores' info
var allStores = [];

var hours = ['6:00am',
            '7:00am',
            '8:00am',
            '9:00am',
            '10:00am',
            '11:00am',
            '12:00pm',
            '1:00pm',
            '2:00pm',
            '3:00pm',
            '4:00pm',
            '5:00pm',
            '6:00pm',
            '7:00pm',
            '8:00pm'];

var beansHead = document.getElementById(beansHead);
var beansBody = document.getElementById(beansBody);
var beansFoot = document.getElementById(beansFoot);
var laborHead = document.getElementById(laborHead);
var laborBody = document.getElementById(laborBody);
var laborFoot = document.getElementById(laborFoot);

// Store constructor
function Store(name, minCust, maxCust, avgCups, avgLbs) {
  this.name = name;

  this.minCust = parseFloat(minCust);
  this.maxCust = parseFloat(maxCust);
  this.avgCups = parseFloat(avgCups);
  this.avgLbs = parseFloat(avgLbs);
  this.randomCust = [];
  this.totalCust = 0;
  this.cupsPerHr = [];
  this.totalCups = 0;
  this.bagLbsPerHr = [];
  this.totalBagLbs = 0;
  this.cupBeansPerHr = [];
  this.totalHourlyBeans = [];
  this.allBeans = 0;
  this.allBeenz = [];
  this.emplPerHr = [];
  this.emplHrs = 0;
  allStores.push(this);

  this.getRandomCust = function() {
    this.randomCust.length = 0;
    for (var i = 0; i < hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  };

  this.getCupsPerHr = function() {
    this.cupsPerHr.length = 0;
    for (var i = 0; i < hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHr.push(numCupsHr);
    }
  };

  this.getLbsPerHr = function() {
    this.bagLbsPerHr.length = 0;
    for (var i = 0; i < hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
      this.bagLbsPerHr.push(numLbsHr);
    }
  };

  this.getCupBeansPerHr = function() {
    this.cupBeansPerHr.length = 0;
    for (var i = 0; i < hours.length; i++) {
      var numBeenzHr = round(this.cupsPerHr[i] / 16);
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHr.push(numBeenzHr);
    }
  };

  this.getTotalBeans =  function() {
    for (var i = 0; i < hours.length; i++) {
      console.log(this.cupBeansPerHr[i]);
      console.log(this.bagLbsPerHr[i]);
      var totalBeenz = this.cupBeansPerHr[i] + this.bagLbsPerHr[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalHourlyBeans.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
    this.allBeenz.push(this.allBeans);
  };

  this.getEmployees = function() {
    for (var i = 0; i < hours.length; i++) {
      var numOfEmpl = Math.ceil(((this.cupsPerHr[i] + this.bagLbsPerHr[i]) * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + numOfEmpl);
      this.emplPerHr.push(numOfEmpl);
      this.emplHrs += numOfEmpl;
    }
  };

  this.doAllTheThings = function() {
    this.getRandomCust();
    console.log(this.randomCust);
    this.getCupsPerHr();
    console.log(this.cupsPerHr);
    console.log('Total cups for the day: ' + this.totalCups);
    this.getLbsPerHr();
    console.log(this.bagLbsPerHr);
    this.getCupBeansPerHr();
    console.log(this.cupBeansPerHr);
    this.getTotalBeans();
    console.log('Total beans total: ' + round(this.allBeans));
    this.getEmployees();
    console.log(this.emplPerHr);
    console.log('Total employee hours: ' + this.emplHrs);
  };







}

var pikePlace = new Store('Pike Place Market', 14, 35, 1.2, 0.34);
var capHill = new Store('Capitol Hill', 12, 28, 3.2, 0.03);
var seaLib = new Store('Seattle Public Library', 9, 45, 2.6, 0.02);
var southLU = new Store('South Lake Union', 5, 18, 1.3, 0.04);
var seaTac = new Store('Sea-Tac Airport', 28, 44, 1.1, 0.41);

Title.typeTitle();
pikePlace.doAllTheThings();
capHill.doAllTheThings();
seaLib.doAllTheThings();
southLU.doAllTheThings();
seaTac.doAllTheThings();



function makeTextElement(parent, type, text) {
  var makeElement = document.createElement(type);
  makeElement.textContent = text;
  parent.appendChild(makeElement);
};

function loopForCells(parent, type, text) {
  for (var i = 0; i < hours.length; i++) {
    makeTextElement(parent, type, text[i]);
  }
};

function createRow(id, type, t1, t2, t3) {
  var tableEl = document.getElementById(id);
  var rowEl = document.createElement('tr');
  makeTextElement(rowEl, type, t1);
  loopForCells(rowEl, type, t2);
  makeTextElement(rowEl, type, t3);
  tableEl.appendChild(rowEl);
};

function beansRows() {
  for (var i = 0; i < this.allStores.length; i++) {
    createRow('beansBody', 'td', allStores[i].name, allStores[i].allBeenz, 'x')
  }

}


// function totalsCell() {
//   var tableEl = document.getElementById(id);
//   var
// }

createRow('beansHead', 'th', 'Location', hours, 'Daily Location Total');
beansRows();
