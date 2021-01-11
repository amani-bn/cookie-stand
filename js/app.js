// 'use strict';

// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// var Seattle = {
//     minCustPerHour: 23,
//     maxCustPerHour: 65,
//     avgCookiePerCust: 6.3,
//     total:0,
//     customerPerHour: [],
//     cookiesPerHour: [],
//     sales: [],
//     workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



//     calCustomerPerHour: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] =Math.floor(perDay) ;

//         };
//         // console.log("perDay!>>", perDay);
//     },

//     calAmountOfCookies: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total=this.total+this.cookiesPerHour[i];
//         this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';


//         };
//         this.sales[14]='Total:' + this.total +' cookies '

//     },

//     render : function () {
//         var parentdiv=document.getElementById("unordered");
//         var head=document.createElement('h1');
//         parentdiv.appendChild(head);
//         head.textContent='Seattle';

//         var unorder=document.createElement('ul');
//         parentdiv.appendChild(unorder);
//         for (var i=0;i<this.sales.length;i++){
//         var listItem=document.createElement('li');
//         unorder.appendChild(listItem);
//         listItem.textContent=this.sales[i];




//         }
//     }
// }



// Seattle.calCustomerPerHour();
// Seattle.calAmountOfCookies();
// Seattle.render();

// // object Tokyo




// var Tokyo = {
//     minCustPerHour:3,
//     maxCustPerHour: 24,
//     avgCookiePerCust:1.2,
//     total:0,
//     customerPerHour: [],
//     cookiesPerHour: [],
//     sales: [],
//     workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



//     calCustomerPerHour: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] =Math.floor(perDay) ;

//         };
//         console.log("perDay >>>>", perDay);
//     },

//     calAmountOfCookies: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total=this.total+this.cookiesPerHour[i];
//         this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';


//         };
//         this.sales[14]='Total:' + this.total +' cookies '

//     },

//     render : function () {
//         var parentdiv=document.getElementById("unordered");
//         var head=document.createElement('h1');
//         parentdiv.appendChild(head);
//         head.textContent='Tokyo';

//         var unorder=document.createElement('ul');
//         parentdiv.appendChild(unorder);
//         for (var i=0;i<this.sales.length;i++){
//         var listItem=document.createElement('li');
//         unorder.appendChild(listItem);
//         listItem.textContent=this.sales[i];




//         }
//     }
// }



// Tokyo.calCustomerPerHour();
// Tokyo.calAmountOfCookies();
// Tokyo.render();







// // object Dubai





// var Dubai = {
//     minCustPerHour: 11,
//     maxCustPerHour: 38,
//     avgCookiePerCust:3.7,
//     total:0,
//     customerPerHour: [],
//     cookiesPerHour: [],
//     sales: [],
//     workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



//     calCustomerPerHour: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] =Math.floor(perDay) ;

//         };
//         console.log("perDay >>>>", perDay);
//     },

//     calAmountOfCookies: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total=this.total+this.cookiesPerHour[i];
//         this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';


//         };
//         this.sales[14]='Total:' + this.total +' cookies '

//     },

//     render : function () {
//         var parentdiv=document.getElementById("unordered");
//         var head=document.createElement('h1');
//         parentdiv.appendChild(head);
//         head.textContent='Dubai';

//         var unorder=document.createElement('ul');
//         parentdiv.appendChild(unorder);
//         for (var i=0;i<this.sales.length;i++){
//         var listItem=document.createElement('li');
//         unorder.appendChild(listItem);
//         listItem.textContent=this.sales[i];




//         }
//     }
// }



// Dubai.calCustomerPerHour();
// Dubai.calAmountOfCookies();
// Dubai.render();

// // object Paris

// var Paris = {
//     minCustPerHour: 20,
//     maxCustPerHour: 38,
//     avgCookiePerCust:2.3,
//     total:0,
//     customerPerHour: [],
//     cookiesPerHour: [],
//     sales: [],
//     workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



//     calCustomerPerHour: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] =Math.floor(perDay) ;

//         };
//         console.log("perDay >>>>", perDay);
//     },

//     calAmountOfCookies: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total=this.total+this.cookiesPerHour[i];
//         this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';


//         };
//         this.sales[14]='Total:' + this.total +' cookies '

//     },

//     render : function () {
//         var parentdiv=document.getElementById("unordered");
//         var head=document.createElement('h1');
//         parentdiv.appendChild(head);
//         head.textContent='Paris';

//         var unorder=document.createElement('ul');
//         parentdiv.appendChild(unorder);
//         for (var i=0;i<this.sales.length;i++){
//         var listItem=document.createElement('li');
//         unorder.appendChild(listItem);
//         listItem.textContent=this.sales[i];




//         }
//     }
// }



// Paris.calCustomerPerHour();
// Paris.calAmountOfCookies();
// Paris.render();

// // object Lima




// var Lima = {
//     minCustPerHour: 2,
//     maxCustPerHour: 16,
//     avgCookiePerCust:4.6,
//     total:0,
//     customerPerHour: [],
//     cookiesPerHour: [],
//     sales: [],
//     workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



//     calCustomerPerHour: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] =Math.floor(perDay) ;

//         };
//         console.log("perDay >>>>", perDay);
//     },

//     calAmountOfCookies: function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total=this.total+this.cookiesPerHour[i];
//         this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';


//         };
//         this.sales[14]='Total:' + this.total +' cookies '

//     },

//     render : function () {
//         var parentdiv=document.getElementById("unordered");
//         var head=document.createElement('h1');
//         parentdiv.appendChild(head);
//         head.textContent='Lima';

//         var unorder=document.createElement('ul');
//         parentdiv.appendChild(unorder);
//         for (var i=0;i<this.sales.length;i++){
//         var listItem=document.createElement('li');
//         unorder.appendChild(listItem);
//         listItem.textContent=this.sales[i];




//         }
//     }
// }



// Lima.calCustomerPerHour();
// Lima.calAmountOfCookies();
// Lima.render();



// use constructor

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var sales = [];
function Shoplocation(ShoplocationName, minCustPerHour, maxCustPerHour, avgCookiePerCust) {
    this.ShoplocationName = ShoplocationName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerCust = avgCookiePerCust;
    this.total = 0;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    Shoplocation.push[this];
}
// this.calAmountOfCookies = function () {
//     for (var i = 0; i < this.workHour.length; i++) {
//         this.cookiesPerHour[i] = Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
//         this.total = this.total + this.cookiesPerHour[i];
//         this.sales[i] = this.workHour[i] + ':' + this.cookiesPerHour[i] + '  cookies';


//     };
//     this.sales[14] = 'Total:' + this.total + ' cookies '

// },

//     this.calCustomerPerHour = function () {
//         for (var i = 0; i < this.workHour.length; i++) {
//             var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
//             this.customerPerHour[i] = Math.floor(perDay);

//         };
//         this.sales = this.sales;
//     }
Shoplocation.prototype.calCustomerPerHour = function () {
    console.log(this.ShoplocationName);
    for (var i = 0; i < this.workHour.length; i++) {
        var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
        this.customerPerHour[i] = Math.floor(perDay);
        console.log(perDay);

    }

}
Shoplocation.prototype.calAmountOfCookies = function () {
    for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] = Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total = this.total + this.cookiesPerHour[i];
        this.sales[i] = this.workHour[i] + ':' + this.cookiesPerHour[i] + '  cookies';
    }
    this.sales[14] = 'Total:' + this.total + ' cookies '
}

Shoplocation.prototype.render = function () {
    var parentDiv = document.getElementById("locations");
    var table1 = document.createElement('tr');
    parentDiv.appendChild(table1);

    var tabledata1 = document.createElement('td');
    table1.appendChild(tabledata1);
    head.textContent(head);


    //  var storeDataTable=document.createElement('table');
    //  locationSection.appendChild(storeDataTable);
    //  // for (var i=0;i<this.sales.length;i++){
    //  var seattleData=document.createElement('tr');
    //  storeDataTable.appendChild(seattleData);
    //  listItem.textContent=this.sales[i];





}

function headertag() {
    var container = document.getElementById('locations');
    var tableElment = document.createElement('table');
    container.appendChild(tableElment);
    tableElment.setAttribute('id', 'table1');

    var headerRow1 = document.createElement('tr');
    tableElment.appendChild(headerRow1);

    var tableData2 = document.createElement('th');
    headerRow1.appendChild(tableData2);
    tableData2.textContent = " ";

    for (var i = 0; i < workHour.length; i++) {
        var tableHours = document.createElement('th');
        headerRow1.appendChild(tableHours);
        tableHours.textContent = workHour[i];


    }

}

headertag();
calling ();











var Seattle = new Shoplocation('Seattle', 23, 65, 6.3);

function calling (){
for (var i =0;i<sales.length;i++){
    sales[i].calAmountOfCookies () ;
    sales[i].calCustomerPerHour () ;
    sales[i].render () ;
}

}





















