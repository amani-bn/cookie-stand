'use strict';

// console.log("amaaaani");

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var Seattle = {
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiePerCust: 6.3,
    total:0,
    customerPerHour: [],
    cookiesPerHour: [],
    sales: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



    calCustomerPerHour: function () {
        for (var i = 0; i < this.workHour.length; i++) {
            var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
            this.customerPerHour[i] =Math.floor(perDay) ;

        };
        console.log("perDay >>>>", perDay);
    },

    calAmountOfCookies: function () {
        for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total=this.total+this.cookiesPerHour[i];
        this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';
        
        
        };
        this.sales[14]='Total:' + this.total +' cookies '

    },

    render : function () {
        var parentdiv=document.getElementById("unordered");
        var head=document.createElement('h1');
        parentdiv.appendChild(head);
        head.textContent='Seattle';

        var unorder=document.createElement('ul');
        parentdiv.appendChild(unorder);
        for (var i=0;i<this.sales.length;i++){
        var listItem=document.createElement('li');
        unorder.appendChild(listItem);
        listItem.textContent=this.sales[i];




        }
    }
}



Seattle.calCustomerPerHour();
Seattle.calAmountOfCookies();
Seattle.render();

// object Tokyo




var Tokyo = {
    minCustPerHour:3,
    maxCustPerHour: 24,
    avgCookiePerCust:1.2,
    total:0,
    customerPerHour: [],
    cookiesPerHour: [],
    sales: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



    calCustomerPerHour: function () {
        for (var i = 0; i < this.workHour.length; i++) {
            var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
            this.customerPerHour[i] =Math.floor(perDay) ;

        };
        console.log("perDay >>>>", perDay);
    },

    calAmountOfCookies: function () {
        for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total=this.total+this.cookiesPerHour[i];
        this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';
        
        
        };
        this.sales[14]='Total:' + this.total +' cookies '

    },

    render : function () {
        var parentdiv=document.getElementById("unordered");
        var head=document.createElement('h1');
        parentdiv.appendChild(head);
        head.textContent='Tokyo';

        var unorder=document.createElement('ul');
        parentdiv.appendChild(unorder);
        for (var i=0;i<this.sales.length;i++){
        var listItem=document.createElement('li');
        unorder.appendChild(listItem);
        listItem.textContent=this.sales[i];




        }
    }
}



Tokyo.calCustomerPerHour();
Tokyo.calAmountOfCookies();
Tokyo.render();







// object Dubai





var Dubai = {
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiePerCust:3.7,
    total:0,
    customerPerHour: [],
    cookiesPerHour: [],
    sales: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



    calCustomerPerHour: function () {
        for (var i = 0; i < this.workHour.length; i++) {
            var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
            this.customerPerHour[i] =Math.floor(perDay) ;

        };
        console.log("perDay >>>>", perDay);
    },

    calAmountOfCookies: function () {
        for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total=this.total+this.cookiesPerHour[i];
        this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';
        
        
        };
        this.sales[14]='Total:' + this.total +' cookies '

    },

    render : function () {
        var parentdiv=document.getElementById("unordered");
        var head=document.createElement('h1');
        parentdiv.appendChild(head);
        head.textContent='Dubai';

        var unorder=document.createElement('ul');
        parentdiv.appendChild(unorder);
        for (var i=0;i<this.sales.length;i++){
        var listItem=document.createElement('li');
        unorder.appendChild(listItem);
        listItem.textContent=this.sales[i];




        }
    }
}



Dubai.calCustomerPerHour();
Dubai.calAmountOfCookies();
Dubai.render();

// object Paris

var Paris = {
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiePerCust:2.3,
    total:0,
    customerPerHour: [],
    cookiesPerHour: [],
    sales: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



    calCustomerPerHour: function () {
        for (var i = 0; i < this.workHour.length; i++) {
            var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
            this.customerPerHour[i] =Math.floor(perDay) ;

        };
        console.log("perDay >>>>", perDay);
    },

    calAmountOfCookies: function () {
        for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total=this.total+this.cookiesPerHour[i];
        this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';
        
        
        };
        this.sales[14]='Total:' + this.total +' cookies '

    },

    render : function () {
        var parentdiv=document.getElementById("unordered");
        var head=document.createElement('h1');
        parentdiv.appendChild(head);
        head.textContent='Paris';

        var unorder=document.createElement('ul');
        parentdiv.appendChild(unorder);
        for (var i=0;i<this.sales.length;i++){
        var listItem=document.createElement('li');
        unorder.appendChild(listItem);
        listItem.textContent=this.sales[i];




        }
    }
}



Paris.calCustomerPerHour();
Paris.calAmountOfCookies();
Paris.render();

// object Lima




var Lima = {
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiePerCust:4.6,
    total:0,
    customerPerHour: [],
    cookiesPerHour: [],
    sales: [],
    workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],



    calCustomerPerHour: function () {
        for (var i = 0; i < this.workHour.length; i++) {
            var perDay = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
            this.customerPerHour[i] =Math.floor(perDay) ;

        };
        console.log("perDay >>>>", perDay);
    },

    calAmountOfCookies: function () {
        for (var i = 0; i < this.workHour.length; i++) {
        this.cookiesPerHour[i] =Math.floor(this.avgCookiePerCust * this.customerPerHour[i]);
        this.total=this.total+this.cookiesPerHour[i];
        this.sales[i]=this.workHour[i] + ':' + this.cookiesPerHour[i] +'  cookies';
        
        
        };
        this.sales[14]='Total:' + this.total +' cookies '

    },

    render : function () {
        var parentdiv=document.getElementById("unordered");
        var head=document.createElement('h1');
        parentdiv.appendChild(head);
        head.textContent='Lima';

        var unorder=document.createElement('ul');
        parentdiv.appendChild(unorder);
        for (var i=0;i<this.sales.length;i++){
        var listItem=document.createElement('li');
        unorder.appendChild(listItem);
        listItem.textContent=this.sales[i];




        }
    }
}



Lima.calCustomerPerHour();
Lima.calAmountOfCookies();
Lima.render();


