'use strict';

var Pike = {
  minCust: 14,
  maxCust: 35,
  averageCups: 1.2,
  averageLbs: 0.34,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
  randomCust: [],
  cupsPerHour: [],

  randomCustf: function() {
    for (var i = 0; i < this.hours.length; i++) {
      var randomCustv = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      console.log(randomCustv);
      this.randomCust.push(randomCustv);
    }
  }
  // ,
  // cupsPerHourf: function() {
  //   var cupsPerHourv = this.randomCust[i] * this.averageCups;
  //   console.log(cupsPerHourv);
  //   return cupsPerHourv;
  // },
  // lbsPerHourf: function() {
  //   var lbsPerHourv = this.randomCust * averageLbs;
  //   console.log(lbsPerHour);
  //   return lbsPerHour;
  // },
  // // employeeNumber: function() {
  // //   var employeeNumber = Math.round()
  // // }
  // }
}


Pike.randomCustf();
// Pike.cupsPerHourf();
console.log(Pike.randomCust);
