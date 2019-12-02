'use strict';


var body = document.body;


//window.screen.orientation.addEventListener('change', () => {
//  if (window.screen.orientation.type == 'landscape-primary') {
//    body.classList.add('primary');
//    if (body.classList.contains('secondary')) {
//      body.classList.remove('secondary');
//    };
//  } else if (window.screen.orientation.type == 'landscape-secondary') {
//    body.classList.add('secondary');
//    if (body.classList.contains('primary')) {
//      body.classList.remove('primary');
//    };
//  };
//});


window.onorientationchange = readDeviceOrientation;

//Add class to the body tag
function readDeviceOrientation() {
  if (window.orientation === 0) {
    if (body.classList.contains('primary')) {
      body.classList.remove('primary');
    } else if (body.classList.contains('secondary')) {
      body.classList.remove('secondary');
    };
  } else if (window.orientation === 90) {
    if (body.classList.contains('secondary')) {
      body.classList.remove('secondary');
    };

    body.classList.add('primary');
  } else if (window.orientation === -90) {
    if (body.classList.contains('primary')) {
      body.classList.remove('primary');
    };

    body.classList.add('secondary');
  };
};
