'use strict';

// Pike Place Market
var Pike = {
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averageLbs: 0.34,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalLbs: 0,
  cupBeansPerHour: [],
  totalBeansHr: [],
  allBeans: 0,
  emplPerHour: [],
  pikeEl: document.getElementById('pike'),
  ulEl: document.createElement('ul'),
  pikeTitle: document.createElement('pikeTitle'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalLbs);
      this.bagLbsPerHour.push(numLbsHr);
    }
  },

  getBeansPerHr: function() {
    this.cupBeansPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numBeenzHr = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHour.push(numBeenzHr);
    }
  },

  getTotalBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      console.log(this.cupBeansPerHour[i]);
      console.log(this.bagLbsPerHour[i]);
      var totalBeenz = this.cupBeansPerHour[i] + this.bagLbsPerHour[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalBeansHr.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
  },

  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  },

  doAllTheThings: function() {
    Pike.getRandomCust();
    console.log(Pike.randomCust);
    Pike.getCupsPerHr();
    console.log('Total cups for the day: ' + Pike.totalCups);
    console.log(Pike.cupsPerHour);
    Pike.getLbsPerHr();
    console.log(Pike.bagLbsPerHour);
    Pike.getBeansPerHr();
    console.log(Pike.cupBeansPerHour);
    Pike.getTotalBeans();
    console.log('Total lbs beans total: ' + parseFloat(Pike.allBeans).toFixed(1));
    Pike.getEmployees();
    console.log(Pike.emplPerHour);
  },

  typeStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalBeansHr[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var pikeT = document.createElement('h3');
      pikeT.textContent = 'Pike Place Market';
    }
    this.pikeTitle.appendChild(pikeT);
    this.pikeEl.appendChild(this.pikeTitle);
    this.pikeEl.appendChild(this.ulEl);
  }
}

// Capitol Hill
var capHill = {
  minCust: 12,
  maxCust: 28,
  averageCups: 3.2,
  averageLbs: 0.03,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalLbs: 0,
  cupBeansPerHour: [],
  totalBeansHr: [],
  allBeans: 0,
  emplPerHour: [],
  capHillEl: document.getElementById('capHill'),
  ulEl: document.createElement('ul'),
  capHillTitle: document.createElement('capHillTitle'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalLbs);
      this.bagLbsPerHour.push(numLbsHr);
    }
  },

  getBeansPerHr: function() {
    this.cupBeansPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numBeenzHr = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHour.push(numBeenzHr);
    }
  },

  getTotalBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      console.log(this.cupBeansPerHour[i]);
      console.log(this.bagLbsPerHour[i]);
      var totalBeenz = this.cupBeansPerHour[i] + this.bagLbsPerHour[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalBeansHr.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
  },

  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  },

  doAllTheThings: function() {
    capHill.getRandomCust();
    console.log(capHill.randomCust);
    capHill.getCupsPerHr();
    console.log('Total cups for the day: ' + capHill.totalCups);
    console.log(capHill.cupsPerHour);
    capHill.getLbsPerHr();
    console.log(capHill.bagLbsPerHour);
    capHill.getBeansPerHr();
    console.log(capHill.cupBeansPerHour);
    capHill.getTotalBeans();
    console.log('Total lbs beans total: ' + parseFloat(capHill.allBeans).toFixed(1));
    capHill.getEmployees();
    console.log(capHill.emplPerHour);
  },

  typeStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalBeansHr[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var capHillT = document.createElement('h3');
      capHillT.textContent = 'Capitol Hill';
    }
    this.capHillTitle.appendChild(capHillT);
    this.capHillEl.appendChild(this.capHillTitle);
    this.capHillEl.appendChild(this.ulEl);
  }
}

// Seattle Public Library
var seaLib = {
  minCust: 9,
  maxCust: 45,
  averageCups: 2.6,
  averageLbs: 0.02,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalLbs: 0,
  cupBeansPerHour: [],
  totalBeansHr: [],
  allBeans: 0,
  emplPerHour: [],
  seaLibEl: document.getElementById('seaLib'),
  ulEl: document.createElement('ul'),
  seaLibTitle: document.createElement('seaLibTitle'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalLbs);
      this.bagLbsPerHour.push(numLbsHr);
    }
  },

  getBeansPerHr: function() {
    this.cupBeansPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numBeenzHr = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHour.push(numBeenzHr);
    }
  },

  getTotalBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      console.log(this.cupBeansPerHour[i]);
      console.log(this.bagLbsPerHour[i]);
      var totalBeenz = this.cupBeansPerHour[i] + this.bagLbsPerHour[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalBeansHr.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
  },

  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  },

  doAllTheThings: function() {
    seaLib.getRandomCust();
    console.log(seaLib.randomCust);
    seaLib.getCupsPerHr();
    console.log('Total cups for the day: ' + seaLib.totalCups);
    console.log(seaLib.cupsPerHour);
    seaLib.getLbsPerHr();
    console.log(seaLib.bagLbsPerHour);
    seaLib.getBeansPerHr();
    console.log(seaLib.cupBeansPerHour);
    seaLib.getTotalBeans();
    console.log('Total lbs beans total: ' + parseFloat(seaLib.allBeans).toFixed(1));
    seaLib.getEmployees();
    console.log(seaLib.emplPerHour);
  },

  typeStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalBeansHr[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var seaLibT = document.createElement('h3');
      seaLibT.textContent = 'Seattle Public Library';
    }
    this.seaLibTitle.appendChild(seaLibT);
    this.seaLibEl.appendChild(this.seaLibTitle);
    this.seaLibEl.appendChild(this.ulEl);
  }
}

// South Lake Union
var Slu = {
  minCust: 5,
  maxCust: 18,
  averageCups: 1.3,
  averageLbs: 0.04,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalLbs: 0,
  cupBeansPerHour: [],
  totalBeansHr: [],
  allBeans: 0,
  emplPerHour: [],
  sluEl: document.getElementById('Slu'),
  ulEl: document.createElement('ul'),
  sluTitle: document.createElement('sluTitle'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalLbs);
      this.bagLbsPerHour.push(numLbsHr);
    }
  },

  getBeansPerHr: function() {
    this.cupBeansPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numBeenzHr = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHour.push(numBeenzHr);
    }
  },

  getTotalBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      console.log(this.cupBeansPerHour[i]);
      console.log(this.bagLbsPerHour[i]);
      var totalBeenz = this.cupBeansPerHour[i] + this.bagLbsPerHour[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalBeansHr.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
  },

  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  },

  doAllTheThings: function() {
    Slu.getRandomCust();
    console.log(Slu.randomCust);
    Slu.getCupsPerHr();
    console.log('Total cups for the day: ' + Slu.totalCups);
    console.log(Slu.cupsPerHour);
    Slu.getLbsPerHr();
    console.log(Slu.bagLbsPerHour);
    Slu.getBeansPerHr();
    console.log(Slu.cupBeansPerHour);
    Slu.getTotalBeans();
    console.log('Total lbs beans total: ' + parseFloat(Slu.allBeans).toFixed(1));
    Slu.getEmployees();
    console.log(Slu.emplPerHour);
  },

  typeStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalBeansHr[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var sluT = document.createElement('h3');
      sluT.textContent = 'South Lake Union';
    }
    this.sluTitle.appendChild(sluT);
    this.sluEl.appendChild(this.sluTitle);
    this.sluEl.appendChild(this.ulEl);
  }
}

// Sea-Tac Airport
var seaTac = {
  minCust: 28,
  maxCust: 44,
  averageCups: 1.1,
  averageLbs: 0.41,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalLbs: 0,
  cupBeansPerHour: [],
  totalBeansHr: [],
  allBeans: 0,
  emplPerHour: [],
  seaTacEl: document.getElementById('seaTac'),
  ulEl: document.createElement('ul'),
  seaTacTitle: document.createElement('seaTacTitle'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalLbs);
      this.bagLbsPerHour.push(numLbsHr);
    }
  },

  getBeansPerHr: function() {
    this.cupBeansPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numBeenzHr = parseFloat((this.cupsPerHour[i] / 16).toFixed(1));
      console.log('Lbs of beans for cups in hour ' + (i + 1) + ': ' + numBeenzHr);
      this.cupBeansPerHour.push(numBeenzHr);
    }
  },

  getTotalBeans: function() {
    for (var i = 0; i < this.hours.length; i++) {
      console.log(this.cupBeansPerHour[i]);
      console.log(this.bagLbsPerHour[i]);
      var totalBeenz = this.cupBeansPerHour[i] + this.bagLbsPerHour[i];
      console.log('Total lbs of beans for hour ' + (i + 1) + ': ' + totalBeenz);
      this.totalBeansHr.push(totalBeenz);
      this.allBeans += totalBeenz;
    }
  },

  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  },

  doAllTheThings: function() {
    seaTac.getRandomCust();
    console.log(seaTac.randomCust);
    seaTac.getCupsPerHr();
    console.log('Total cups for the day: ' + seaTac.totalCups);
    console.log(seaTac.cupsPerHour);
    seaTac.getLbsPerHr();
    console.log(seaTac.bagLbsPerHour);
    seaTac.getBeansPerHr();
    console.log(seaTac.cupBeansPerHour);
    seaTac.getTotalBeans();
    console.log('Total lbs beans total: ' + parseFloat(seaTac.allBeans).toFixed(1));
    seaTac.getEmployees();
    console.log(seaTac.emplPerHour);
  },

  typeStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalBeansHr[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var seaTacT = document.createElement('h3');
      seaTacT.textContent = 'Sea-Tac Airport';
    }
    this.seaTacTitle.appendChild(seaTacT);
    this.seaTacEl.appendChild(this.seaTacTitle);
    this.seaTacEl.appendChild(this.ulEl);
  }
}


Pike.doAllTheThings();
Pike.typeStuff();
capHill.doAllTheThings();
capHill.typeStuff();
seaLib.doAllTheThings();
seaLib.typeStuff();
Slu.doAllTheThings();
Slu.typeStuff();
seaTac.doAllTheThings();
seaTac.typeStuff();
