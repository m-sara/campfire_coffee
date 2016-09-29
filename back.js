'use strict';

var Pike = {
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averageLbs: 0.34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  randomCust: [],
  totalCust: 0,
  cupsPerHour: [],
  totalCups: 0,
  lbsPerHour: [],
  totalLbs: 0,
  emplPerHour: [],

  getRandomCust: function() {
    this.randomCust.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numRandCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log('Hour ' + (i + 1) + ': ' + numRandCust);
      this.totalCust += numRandCust;
      console.log('Total customers: ' + this.totalCust);
      this.randomCust.push(numRandCust);
    }
  },
  getCupsPerHr: function() {
    this.cupsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numCupsHr = Math.ceil(this.randomCust[i] * this.averageCups);
      console.log('Hour ' + (i + 1) + ': ' + numCupsHr);
      this.totalCups += numCupsHr;
      console.log('Total cups: ' + this.totalCups);
      this.cupsPerHour.push(numCupsHr);
    }
  },

  getLbsPerHr: function() {
    this.lbsPerHour.length = 0;
    for (var i = 0; i < this.hours.length; i++) {
      var numLbsHr = Math.ceil(this.randomCust[i] * this.averageLbs);
      console.log('Hour ' + (i + 1) + ': ' + numLbsHr);
      this.totalLbs += numLbsHr;
      console.log('Total lbs: ' + this.totalLbs);
      this.lbsPerHour.push(numLbsHr);
    }
  },
  getEmployees: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var employeeNumber = Math.ceil((this.randomCust[i] * 2) / 60);
      console.log('Employees for hour ' + (i + 1) + ': ' + employeeNumber);
      this.emplPerHour.push(employeeNumber);
    }
  }
}


Pike.getRandomCust();
console.log(Pike.randomCust);
Pike.getCupsPerHr();
console.log(Pike.cupsPerHour);
Pike.getLbsPerHr();
console.log(Pike.lbsPerHour);
Pike.getEmployees();
console.log(Pike.emplPerHour);
