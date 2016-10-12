var companyWide = {
  name: 'Campfire Coffee',
  hourlyBeanTotal: [],
  dailyBeanTotal: 0,
  hourlyLaborTotal: [],
  dailyLaborTotal: 0,

  calcTotalHourlyBeans: function () {
    this.hourlyBeanTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < allStores.length; i++) {
      for (var j = 0; j < hours.length; j++) {
        var beansEachHour = 0;
        beansEachHour += allStores[i].totalHourlyBeans[j];
        console.log(beansEachHour);
        this.hourlyBeanTotal[j] += beansEachHour;
      }
    }
  },

  calcTotalDailyBeans: function() {
    this.dailyBeanTotal = 0;
    for (var i = 0; i < allStores.length; i++) {
      for (var j = 0; j < hours.length; j++) {
        this.dailyBeanTotal += Math.ceil(allStores[i].allBeans);
      }
    }
  },

  // calcTotalHourlyLabor: function () {
  //   this.hourlyLaborTotal = [];
  //   console.log('Calc stuff');
  //   for (var i = 0; i < allStores.length; i++) {
  //     var laborEachHour = 0;
  //     for (var j = 0; j < hours.length; j++) {
  //       laborEachHour += allStores[i].emplPerHr[j];
  //       this.hourlyLaborTotal.push(laborEachHour);
  //     }
  //   }
  // },

  calcTotalDailyLabor: function() {
    for (var i = 0; i < allStores.length; i++) {
      this.dailyLaborTotal = 0;
      for (var j = 0; j < hours.length; j++) {
        this.dailyLaborTotal += allStores[i].emplHrs;
      }
    }
  }
};

function calculateCompanyTotals() {
  companyWide.calcTotalHourlyBeans();
  companyWide.calcTotalDailyBeans();
  // companyWide.calcTotalHourlyLabor();
  companyWide.calcTotalDailyLabor();
}

calculateCompanyTotals();
