'use strict';


var app = new Vue({
  el: '#app',
  data: {
    upComing: [],
    upComingMessage: [],
    teamSelection: 0,
    myTeam: [],
    september: [],
    october: [],
    locations: [],
    locationId: '',
    history: [0],
    actualPage: 0,
    lastPage: 0,
    elementarySchool: [],
    postPageLoadingWithTime: 0,
    postMatch: [],
    whatsappMatchInfoString: '',
    whatsappLocInfoString: '',
    userEmail: '',
    userPassword: '',
    loginErrorMessage: '',
    resetPassPage: ''
  },
  methods: {
    teamFilterActivated: function () {
      app.teamSelection = document.getElementById('teamSelect').value;

      app.myTeam = league.september.filter(teamFilter).concat(league.october.filter(teamFilter));
    },
    toMyTeam: function () {
      app.history.push(1);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut();

      setTimeout(function () {
        app.actualPage = 1;
      }, tBoton2);

      setTimeout(pageChangeOut2, tBoton2 + 5);
    },
    toAllGames: function () {
      app.history.push(2);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut();

      setTimeout(function () {
        app.actualPage = 2;
      }, tBoton2);

      setTimeout(pageChangeOut2, tBoton2 + 5);
    },
    toLocations: function () {
      app.history.push(3);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut();

      setTimeout(function () {
        app.actualPage = 3;

        setTimeout(pageChangeOut2, 5);
      }, tBoton2);
    },
    goBack: function () {
      app.history.pop();

      pageChangeOut4();

      if (app.lastPage == 0) {
        pageChangeIn();

        setTimeout(function () {
          app.actualPage = app.lastPage;
          app.lastPage = app.history[(app.history.length - 2)];
        }, tBoton2);
      } else {
        app.actualPage = app.lastPage;

        app.lastPage = app.history[(app.history.length - 2)];

        setTimeout(pageChangeOut3, tBoton2);

        setTimeout(pageChangeOut5, tBoton2 + 5);
      };
    },
    locationPage: function locationPage() {
      app.elementarySchool = locations.filter(function (location) {
        if (location.id == app.locationId) {
          return true;
        };
      });
    },
    toLocationUp1: function () {
      app.history.push(4);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut();

      setTimeout(function () {
        app.actualPage = 4;

        app.locationId = app.upComing[0].id;

        app.locationPage();

        setTimeout(pageChangeOut2, 5);
      }, tBoton2);
    },
    toLocationUp2: function () {
      app.history.push(4);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut();

      setTimeout(function () {
        app.actualPage = 4;

        app.locationId = app.upComing[1].id;

        app.locationPage();

        setTimeout(pageChangeOut2, 5);
      }, tBoton2);
    },
    toLocation: function (id) {
      app.history.push(4);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut4();

      setTimeout(function () {
        app.actualPage = 4;

        app.locationId = id;

        app.locationPage();

        setTimeout(initMap, 100);

        setTimeout(pageChangeOut3, 5);
      }, tBoton2);

      setTimeout(pageChangeOut5, tBoton2 + 5);
    },
    toPostUp1: function () {
      app.history.push(5);

      app.lastPage = app.history[(app.history.length - 2)];

      app.actualPage = 5;

      app.postMatch = app.upComing[0];

      app.postPageLoadingWithTime = window.setInterval(postPageLoading, 300);
    },
    toPostUp2: function () {
      app.history.push(5);

      app.lastPage = app.history[(app.history.length - 2)];

      app.actualPage = 5;

      app.postMatch = app.upComing[1];

      app.postPageLoadingWithTime = window.setInterval(postPageLoading, 300);
    },
    toPost: function (id) {
      app.history.push(5);

      app.lastPage = app.history[(app.history.length - 2)];

      pageChangeOut4();

      setTimeout(function () {
        app.actualPage = 5;

        setTimeout(pageChangeOut3, 5);

        app.postWAppMatch(id);

        app.postPageLoadingWithTime = window.setInterval(postPageLoading, 300);
      }, tBoton2);

      setTimeout(pageChangeOut5, tBoton2 + 5);
    },
    whatsappInfo: function (id, type) {
      if (type == 'match') {
        app.postWAppMatch(id);

        app.whatsappMatchInfoString = 'https://wa.me/whatsappphonenumber/?text=*NYSL - NORTHSIDE YOUTH SOCCER LEAGUE* %0D%0A*Date:* ' + app.postMatch[0].date + '. %0D%0A*Time:* ' + app.postMatch[0].time + ' %0D%0A*Teams:* ' + app.postMatch[0].teamA + ' vs ' + app.postMatch[0].teamB + '. %0D%0A*Location:* ' + app.postMatch[0].location + ' Elementary. %0D%0A*Direction:* ' + app.postMatch[0].direction + '. %0D%0A*Map:* ' + app.postMatch[0].mapUrl;
      } else if (type == 'loc') {
        let loc = app.locations.filter(function (location) {
          if (location.id == id) {
            return true;
          };
        });

        app.whatsappLocInfoString = 'https://wa.me/whatsappphonenumber/?text=*NYSL - NORTHSIDE YOUTH SOCCER LEAGUE* %0D%0A*Location:* ' + loc[0].name + ' Elementary. %0D%0A*Direction:* ' + loc[0].direction + '. %0D%0A*Map:* ' + loc[0].mapUrl;
      }
    },
    postWAppMatch: function (id) {
      app.postMatch = app.september.filter(function (match) {
        if (match.id == id) {
          return true;
        };
      }).concat(app.october.filter(function (match) {
        if (match.id == id) {
          return true;
        };
      }));

      let loc = locations.filter(function (location) {
        if (location.id == app.postMatch[0].locationId) {
          return true;
        };
      });

      app.postMatch[0].direction = loc[0].direction;

      app.postMatch[0].mapUrl = loc[0].mapUrl;
    },
    resetPassEMail: function () {
      let auth = firebase.auth();
      let emailAddress = app.userEmail;

      auth.sendPasswordResetEmail(emailAddress).then(function () {
        
        app.resetPassPage = 1;
        
        setTimeout(function() {
          window.location.href = 'index.html';
        }, 2000);
        
      }).catch(function (error) {
        // An error happened.
      });
    },
    toResetPage1: function() {
      app.resetPassPage = 0;
    }
  }
});


//Loading and All Games
if (document.getElementById('content-1')) {
  onLoad();

  app.september = league.september;

  app.october = league.october;

  app.locations = locations;
}


//Home Page
if (document.getElementById('brand-name')) {
  dateFilteredArray();
};


//Locations page link
jQuery(document).ready(function ($) {
  $('*[data-href]').on('click', function () {
    window.location = $(this).data('href');
  });
});



//Array filtered by date
function dateFilteredArray() {
  let gamesFilteredByDate1 = league.september.filter(dateFilter1).concat(league.october.filter(dateFilter1));

  dateFilter2(gamesFilteredByDate1);
};


//Array filtered by date
function dateFilter1(game) {
  if (moment(game.date, 'MM/DD/YY') >= moment()) {
    return true;
  }
};


//Array filtered by date 2
/*The array must be previously ordered for the "break" to get just the first two equals (if they exist)*/
function dateFilter2(array) {
  let x = 0;
  for (var i = 0; i < (array.length - 1); i++) {
    if (array[i].date == array[i + 1].date) {
      x++;
    } else {
      break;
    }
  }

  app.upComing = array.slice(0, x + 1);

  if (app.upComing.date == moment()) {
    app.upComingMessage = "Today's Games: "
  } else {
    app.upComingMessage = 'Upcoming Games: '
  }

  for (var i = 0; i < locations.length; i++) {
    if (app.upComing[0].location + ' Elementary' == locations[i].name) {
      app.upComing[0].id = locations[i].id;
      break;
    }
  }

  for (var i = 0; i < locations.length; i++) {
    if (app.upComing[1].location + ' Elementary' == locations[i].name) {
      app.upComing[1].id = locations[i].id;
      break;
    }
  }
};


//My team filter
function teamFilter(game) {
  if ((game.teamA == app.teamSelection) || (game.teamB == app.teamSelection)) {
    return true;
  }
};
