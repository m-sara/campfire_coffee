
function makeTextElement(parent, type, text) {
  var makeElement = document.createElement(type);
  makeElement.textContent = text;
  parent.appendChild(makeElement);
};

function loopForTableText(parent, type, text) {
  for (var i = 0; i < hours.length; i++) {
    makeTextElement(parent, type, text[i]);
  }
};

function createRow(id, type, t1, t2, t3) {
  var tableEl = document.getElementById(id);
  var rowEl = document.createElement('tr');
  makeTextElement(rowEl, type, t1);
  makeTextElement(rowEl, type, t2);
  loopForTableText(rowEl, type, t3);
  tableEl.appendChild(rowEl);
};

createRow('beansHead', 'th', ' ', 'Daily Location Total', hours);





var companyWide = {
  name: 'Campfire Coffee',
  dailyBeanTotal: 0,
  hourlyBeanTotal: [ ],
  dailyLaborTotal: 0,
  hourlyLaborTotal: [ ],

  dailyBeanTotalCalc: function() {
    for (var i = 0; i < allStores.length; i++) {
      this.dailyBeanTotal += allStores[i].totalBeansDelivered;
    }
  },
  hourlyBeanTotalCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      var counter = 0;
      for (var j = 0; j < allStores.length; j++) {
        counter += allStores[j].cupBeansPerHr[i];
      }
      this.hourlyBeanTotal.push(round(counter, 1));
    }
  },
  dailyLaborTotalCalc: function() {
    for (var i = 0; i < allStores.length; i++) {
      this.dailyLaborTotal += allStores[i].employeesPerDay;
    }
  },
  hourlyLaborTotalCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      var counter = 0;
      for (var j = 0; j < allStores.length; j++) {
        counter += allStores[j].emplPerHr[i];
      }
      this.hourlyLaborTotal.push(counter);
    }
  },
};

function calculateCompanyTotals() {
  companyWide.dailyBeanTotalCalc();
  companyWide.dailyLaborTotalCalc();
  companyWide.hourlyBeanTotalCalc();
  companyWide.hourlyLaborTotalCalc();
};

calculateCompanyTotals();
