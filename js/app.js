function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cusPerHour = [];
var Sales = [];
var cities = [];//array of object 
function City(cityName, MinCus, MaxCus, AvgCookie) {
    this.cityName = cityName;
    this.MinCus = MinCus;
    this.MaxCus = MaxCus;
    this.AvgCookie = AvgCookie;
    this.total = 0;
    this.cookiePerHour = [];
    cities.push(this);
}
City.prototype.GetCusPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        var perday = Math.floor(Math.random() * (this.MaxCus - this.MinCus + 1)) + this.MinCus;
        cusPerHour[i] = Math.floor(perday);
    }
}
City.prototype.getCookiePerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookiePerHour[i] = Math.ceil(cusPerHour[i] * this.AvgCookie);
        this.total = this.total + this.cookiePerHour[i];
        Sales[i] = hours[i] + " : " + this.cookiePerHour[i];
    }
    Sales[14] = this.total;
}
City.prototype.render = function () {
    var container = document.getElementById('tableOne');
    var tableEl = document.createElement('tr');
    container.appendChild(tableEl);
    var tableData23 = document.createElement('td');
    tableEl.appendChild(tableData23);
    tableData23.textContent = (this.cityName);
    for (var i = 0; i < hours.length; i++) {
        var tableHours = document.createElement('td');
        tableEl.appendChild(tableHours);
        tableHours.textContent = this.cookiePerHour[i];
    }
    var tableData2 = document.createElement('td');
    tableEl.appendChild(tableData2);
    tableData2.textContent = (this.total);
}
var Seattle = new City('seattle', 23, 65, 6.3);
var tokyo = new City('tokyo', 3, 24, 1.2);
var dubai = new City('dubai', 11, 38, 3.7);
var paris = new City('paris', 20, 38, 2.5);
var lima = new City('lima', 2, 16, 4.6);
function calling() {
    for (var i = 0; i < cities.length; i++) {
        cities[i].GetCusPerHour();
        cities[i].getCookiePerHour();
        cities[i].render();
    }
}



function headertag() {
    var container = document.getElementById('locations');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    tableEl.setAttribute('id', 'tableOne');
    var headerRow = document.createElement('tr');
    tableEl.appendChild(headerRow);
    var tableData33 = document.createElement('th');
    headerRow.appendChild(tableData33);
    tableData33.textContent = " ";
    for (var i = 0; i < hours.length; i++) {
        var tableHours = document.createElement('th');
        headerRow.appendChild(tableHours);
        tableHours.textContent = hours[i];
    }
    var tableData1 = document.createElement('th');
    headerRow.appendChild(tableData1);
    tableData1.textContent = 'Daily Location Total';
}



function tablefooter() {
    var container = document.getElementById('tableOne');
    var footRow = document.createElement('tr');
    container.appendChild(footRow);
    var tableData77 = document.createElement('td');
    footRow.appendChild(tableData77);
    tableData77.textContent = "total";
    var TotalTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var htotal = 0;
        for (var j = 0; j < cities.length; j++) {
            htotal = htotal + cities[j].cookiePerHour[i];
            console.log('htotal',htotal);
            TotalTotal = TotalTotal + cities[j].cookiePerHour[i];
            console.log('totaltotal',TotalTotal);

        }
        var tableData99 = document.createElement('td');
        footRow.appendChild(tableData99);
        tableData99.textContent = htotal;
    }
    var tableData100 = document.createElement('td');
    footRow.appendChild(tableData100);
    tableData100.textContent = TotalTotal;
}


headertag();
calling();
tablefooter();

var citySalmon = document.getElementById('salmoShopForm');
citySalmon.addEventListener('submit',submiter);

function  deleletLastR() {
    document.getElementById('tableOne').deleteRow(length -1);
}

function submiter(event){
    event.preventDefault();
    console.log('event',event);

    var name=event.target.nameCity.value;
    console.log('name',name);

    var minCustHour=event.target.mincushour.value;
    console.log('mincushour',minCustHour);

    var maxCustHour=event.target.maxcushour.value;

    console.log('maxncushour',maxCustHour);

    var avgCookie=parseFloat(event.target.avgeachcust.value);
    console.log('avgcookie',avgCookie);

    // if ((name!== null || name!==" ") && (minCustHour!== null ||minCustHour!==" ") && (maxCustHour!== null || maxCustHour!==" ") &&(avgCookie!== null || avgCookie!==" "))
    // {      
    var addCity = new City(name,minCustHour,maxCustHour,avgCookie)
    console.log('add');
    var section = document.getElementById('locations');
    section.innerHTML='';
    console.log('add city');
   headertag();
    for(var i=0;i<cities.length;i++){

        cities[i].GetCusPerHour();
        cities[i].getCookiePerHour();
        // deleletLastR();
        cities[i].render();
        
    
    }   
    
    
    tablefooter();
// }
// else{
// alert('Please Insert a value ');
// }
}
