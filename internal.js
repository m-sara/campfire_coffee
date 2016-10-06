'use strict';

// Title
var Title = {
  docTitleEl: document.getElementById('docTitle'),
  typeTitle: function() {
    var docTitle = document.createElement('h1');
    docTitle.textContent = 'Campfire Coffee Daily Projections';
    this.docTitleEl.appendChild(docTitle);
  }
}

var round(num) {
  return parseFloat(num.toFixed(1));
}

// Pike Place Market
var Pike = {
  minCust: 14,
  maxCust: 35,
  avgCups: 1.2,
  avgLbs: 0.34,
  hours: ['6:00am',
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
          '8:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalBagLbs: 0,
  cupBeansPerHour: [],
  totalCupBeans: [],
  allBeans: 0,
  emplPerHour: [],
  pikeEl: document.getElementById('pike'),
  ulEl: document.createElement('ul'),
  titleEl: document.createElement('titleEl'),

  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
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
      this.totalCupBeans.push(totalBeenz);
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

  typeAllTheStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var title = document.createElement('h3');
      title.textContent = 'Pike Place Market';
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalCupBeans[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var allCust = document.createElement('li');
      allCust.textContent = 'Total customers at ' + title.textContent + ': ' + this.totalCust;
      var allCups = document.createElement('li');
      allCups.textContent = 'Total cups sold at ' + title.textContent + ': ' + this.totalCups;
      var allBagLbs = document.createElement('li');
      allBagLbs.textContent = 'Total to-go pound packages sold at ' + title.textContent + ': ' + this.totalBagLbs;
      var allLbs = document.createElement('li');
      allLbs.textContent = 'Total pounds of beans needed at ' + title.textContent + ': ' + parseFloat(this.allBeans).toFixed(1);
    }
    this.titleEl.appendChild(title);
    this.pikeEl.appendChild(this.titleEl);
    this.pikeEl.appendChild(this.ulEl);
    this.pikeEl.appendChild(allCust);
    this.pikeEl.appendChild(allCups);
    this.pikeEl.appendChild(allBagLbs);
    this.pikeEl.appendChild(allLbs);
  }
}

// Capitol Hill
var capHill = {
  minCust: 12,
  maxCust: 28,
  avgCups: 3.2,
  avgLbs: 0.03,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalBagLbs: 0,
  cupBeansPerHour: [],
  totalCupBeans: [],
  allBeans: 0,
  emplPerHour: [],
  capHillEl: document.getElementById('capHill'),
  ulEl: document.createElement('ul'),
  titleEl: document.createElement('titleEl'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
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
      this.totalCupBeans.push(totalBeenz);
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

  typeAllTheStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalCupBeans[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var title = document.createElement('h3');
      title.textContent = 'Capitol Hill';
      var allCust = document.createElement('li');
      allCust.textContent = 'Total customers at ' + title.textContent + ': ' + this.totalCust;
      var allCups = document.createElement('li');
      allCups.textContent = 'Total cups sold at ' + title.textContent + ': ' + this.totalCups;
      var allBagLbs = document.createElement('li');
      allBagLbs.textContent = 'Total to-go pound packages sold at ' + title.textContent + ': ' + this.totalBagLbs;
      var allLbs = document.createElement('li');
      allLbs.textContent = 'Total pounds of beans needed at ' + title.textContent + ': ' + parseFloat(this.allBeans).toFixed(1);
    }
    this.titleEl.appendChild(title);
    this.capHillEl.appendChild(this.titleEl);
    this.capHillEl.appendChild(this.ulEl);
    this.capHillEl.appendChild(allCust);
    this.capHillEl.appendChild(allCups);
    this.capHillEl.appendChild(allBagLbs);
    this.capHillEl.appendChild(allLbs);
  }
}

// Seattle Public Library
var seaLib = {
  minCust: 9,
  maxCust: 45,
  avgCups: 2.6,
  avgLbs: 0.02,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalBagLbs: 0,
  cupBeansPerHour: [],
  totalCupBeans: [],
  allBeans: 0,
  emplPerHour: [],
  seaLibEl: document.getElementById('seaLib'),
  ulEl: document.createElement('ul'),
  titleEl: document.createElement('titleEl'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
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
      this.totalCupBeans.push(totalBeenz);
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

  typeAllTheStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalCupBeans[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var title = document.createElement('h3');
      title.textContent = 'Seattle Public Library';
      var allCust = document.createElement('li');
      allCust.textContent = 'Total customers at ' + title.textContent + ': ' + this.totalCust;
      var allCups = document.createElement('li');
      allCups.textContent = 'Total cups sold at ' + title.textContent + ': ' + this.totalCups;
      var allBagLbs = document.createElement('li');
      allBagLbs.textContent = 'Total to-go pound packages sold at ' + title.textContent + ': ' + this.totalBagLbs;
      var allLbs = document.createElement('li');
      allLbs.textContent = 'Total pounds of beans needed at ' + title.textContent + ': ' + parseFloat(this.allBeans).toFixed(1);
    }
    this.titleEl.appendChild(title);
    this.seaLibEl.appendChild(this.titleEl);
    this.seaLibEl.appendChild(this.ulEl);
    this.seaLibEl.appendChild(allCust);
    this.seaLibEl.appendChild(allCups);
    this.seaLibEl.appendChild(allBagLbs);
    this.seaLibEl.appendChild(allLbs);
  }
}

// South Lake Union
var Slu = {
  minCust: 5,
  maxCust: 18,
  avgCups: 1.3,
  avgLbs: 0.04,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalBagLbs: 0,
  cupBeansPerHour: [],
  totalCupBeans: [],
  allBeans: 0,
  emplPerHour: [],
  sluEl: document.getElementById('Slu'),
  ulEl: document.createElement('ul'),
  titleEl: document.createElement('titleEl'),

  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
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
      this.totalCupBeans.push(totalBeenz);
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

  typeAllTheStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalCupBeans[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var title = document.createElement('h3');
      title.textContent = 'South Lake Union';
      var allCust = document.createElement('li');
      allCust.textContent = 'Total customers at ' + title.textContent + ': ' + this.totalCust;
      var allCups = document.createElement('li');
      allCups.textContent = 'Total cups sold at ' + title.textContent + ': ' + this.totalCups;
      var allBagLbs = document.createElement('li');
      allBagLbs.textContent = 'Total to-go pound packages sold at ' + title.textContent + ': ' + this.totalBagLbs;
      var allLbs = document.createElement('li');
      allLbs.textContent = 'Total pounds of beans needed at ' + title.textContent + ': ' + parseFloat(this.allBeans).toFixed(1);
    }
    this.titleEl.appendChild(title);
    this.sluEl.appendChild(this.titleEl);
    this.sluEl.appendChild(this.ulEl);
    this.sluEl.appendChild(allCust);
    this.sluEl.appendChild(allCups);
    this.sluEl.appendChild(allBagLbs);
    this.sluEl.appendChild(allLbs);
  }
}

// Sea-Tac Airport
var seaTac = {
  minCust: 28,
  maxCust: 44,
  avgCups: 1.1,
  avgLbs: 0.41,
  hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  bagLbsPerHour: [],
  totalBagLbs: 0,
  cupBeansPerHour: [],
  totalCupBeans: [],
  allBeans: 0,
  emplPerHour: [],
  seaTacEl: document.getElementById('seaTac'),
  ulEl: document.createElement('ul'),
  titleEl: document.createElement('titleEl'),


  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      console.log('Customers for hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },

  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.avgCups);
      console.log('Cups for hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups for the day: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.bagLbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.avgLbs);
      console.log('Lbs for hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalBagLbs += numLbsHr;
      console.log('Total lbs for the day: ' + this.totalBagLbs);
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
      this.totalCupBeans.push(totalBeenz);
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

  typeAllTheStuff: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.totalCupBeans[i] + ' lbs [' + this.randomCust[i] + ' customers, ' + this.cupsPerHour[i] + ' cups (' + this.cupBeansPerHour[i] + ' lbs), ' + this.bagLbsPerHour[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
      var title = document.createElement('h3');
      title.textContent = 'Sea-Tac Airport';
      var allCust = document.createElement('li');
      allCust.textContent = 'Total customers at ' + title.textContent + ': ' + this.totalCust;
      var allCups = document.createElement('li');
      allCups.textContent = 'Total cups sold at ' + title.textContent + ': ' + this.totalCups;
      var allBagLbs = document.createElement('li');
      allBagLbs.textContent = 'Total to-go pound packages sold at ' + title.textContent + ': ' + this.totalBagLbs;
      var allLbs = document.createElement('li');
      allLbs.textContent = 'Total pounds of beans needed at ' + title.textContent + ': ' + parseFloat(this.allBeans).toFixed(1);
    }
    this.titleEl.appendChild(title);
    this.seaTacEl.appendChild(this.titleEl);
    this.seaTacEl.appendChild(this.ulEl);
    this.seaTacEl.appendChild(allCust);
    this.seaTacEl.appendChild(allCups);
    this.seaTacEl.appendChild(allBagLbs);
    this.seaTacEl.appendChild(allLbs);
  }
}

Title.typeTitle();
Pike.doAllTheThings();
Pike.typeAllTheStuff();
capHill.doAllTheThings();
capHill.typeAllTheStuff();
seaLib.doAllTheThings();
seaLib.typeAllTheStuff();
Slu.doAllTheThings();
Slu.typeAllTheStuff();
seaTac.doAllTheThings();
seaTac.typeAllTheStuff();
