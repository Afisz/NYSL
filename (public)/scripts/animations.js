'use strict';


//Animation distances
var vHBoton2 = heightConversor(0.1);

var vHBoton3 = heightConversor(0.2);

var vHLogo = heightConversor(0.205);

var vHBrandName = heightConversor(0.205);

var vHAnimationPart11 = heightConversor(0.22);

var vHAnimationPart21 = heightConversor(0.08);

var vHAnimationPart212 = heightConversor(0.14);

var vHContent1 = heightConversor(0.43);

var vHContent2 = heightConversor(0.77);

var vHAnimationPart13 = heightConversor(0.29);

var vHAnimationPart23 = heightConversor(0.13);


//Animation durations
var tPpalAnimation = 280;

var tanimationpPart13 = 1;

var tContent1 = tPpalAnimation;

var tLogo = tContent1;

var tBrandName = tLogo;

var tAnimationPart11 = tContent1;

var tAnimationPart21 = tAnimationPart11;

var tBoton3 = tContent1;

var tBoton2 = tContent1 / 2;


//Form vibration
var vibraConf = {
  frequency: 5000,
  spread: 5,
  duration: 500
};


//On load
function onLoad() {
  anime({
    targets: '#logo',
    opacity: 1,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '#brand-name',
    opacity: 1,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '.animationpPart-1-2',
    opacity: 1,
    duration: 0.1,
    easing: 'linear'
  });
};


//Animation sequences first
function pageChangeOut() {
  //Buttons animations
  anime({
    targets: '#boton3',
    translateY: -vHBoton3,
    scale: '0.8',
    duration: tBoton3,
    easing: 'linear'
  });

  anime({
    targets: '#boton2',
    translateY: -vHBoton2,
    scale: '0.8',
    duration: tBoton2,
    delay: tBoton2,
    easing: 'linear'
  });

  anime({
    targets: '#boton1',
    opacity: 0,
    duration: tBoton2,
    easing: 'linear'
  });

  //Logo and Title animations
  anime({
    targets: '#logo',
    translateY: -vHLogo,
    duration: tLogo,
    easing: 'linear'
  });

  anime({
    targets: '#brand-name',
    translateY: -vHBrandName,
    duration: tBrandName,
    easing: 'linear'
  });

  //Body animations
  anime({
    targets: '.animationPart-1-1',
    height: vHAnimationPart21,
    duration: tAnimationPart11,
    easing: 'linear'
  });

  anime({
    targets: '.animationPart-2-1',
    translateY: -vHAnimationPart212,
    duration: tAnimationPart21,
    easing: 'linear'
  });

  anime({
    targets: '#content-1',
    height: vHContent2,
    duration: tContent1,
    easing: 'linear'
  });

  anime({
    targets: '.animationpPart-1-3',
    height: vHAnimationPart23,
    duration: tanimationpPart13,
    easing: 'linear'
  });

  anime({
    targets: '.animationpPart-1-2',
    opacity: 0,
    duration: tBoton2,
    easing: 'linear'
  });
};

function pageChangeOut2() {
  anime({
    targets: 'table',
    opacity: 1,
    duration: tBoton2,
    easing: 'linear'
  });

  anime({
    targets: '#boton4',
    opacity: 1,
    duration: tBoton2,
    easing: 'linear'
  });

  pageChangeOut5();

  buttonsChange1();
};

function pageChangeOut3() {
  anime({
    targets: 'table, #map',
    opacity: 1,
    duration: tBoton2,
    easing: 'linear'
  });
};

function pageChangeOut4() {
  anime({
    targets: 'table, #map, .page-name-header',
    opacity: 0,
    duration: tBoton2,
    easing: 'linear'
  });
};

function pageChangeOut5() {
  setTimeout(function () {
    if (app.actualPage == 1) {
      anime({
        targets: '#pNH1',
        opacity: 1,
        duration: tBoton2,
        easing: 'linear'
      });
    } else if (app.actualPage == 2) {
      anime({
        targets: '#pNH2',
        opacity: 1,
        duration: tBoton2,
        easing: 'linear'
      });
    } else if (app.actualPage == 3) {
      anime({
        targets: '#pNH3',
        opacity: 1,
        duration: tBoton2,
        easing: 'linear'
      });
    } else if (app.actualPage == 4) {
      anime({
        targets: '#pNH4',
        opacity: 1,
        duration: tBoton2,
        easing: 'linear'
      });
    } else if (app.actualPage == 5) {
      anime({
        targets: '#pNH5',
        opacity: 1,
        duration: tBoton2,
        easing: 'linear'
      });
    };
  }, tBoton2 / 2);
};


//Animation sequences second
function pageChangeIn2() {
  setTimeout(function () {
    anime({
      targets: '#boton1',
      opacity: 1,
      duration: tBoton2,
      easing: 'linear'
    });

    anime({
      targets: '.animationpPart-1-2, table',
      opacity: 1,
      duration: tBoton2,
      easing: 'linear'
    });
  }, 5);

  buttonsChange2();
};

function pageChangeIn() {
  anime({
    targets: '#logo',
    translateY: -vHLogo,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '#brand-name',
    translateY: -vHBrandName,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '#boton4',
    opacity: 0,
    duration: tBoton2,
    easing: 'linear'
  });

  //Buttons animations  
  anime({
    targets: '#boton3, #boton4',
    translateY: vHBoton3 / 200000,
    scale: '1',
    duration: tBoton3,
    easing: 'linear'
  });

  anime({
    targets: '#boton2',
    translateY: vHBoton2 / 200000,
    scale: '1',
    duration: tBoton2,
    easing: 'linear'
  });

  //Logo and Title animations
  anime({
    targets: '#logo',
    opacity: 1,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '#brand-name',
    opacity: 1,
    duration: 0.1,
    easing: 'linear'
  });

  anime({
    targets: '#logo',
    translateY: vHLogo / 18,
    duration: tLogo,
    easing: 'linear'
  });

  anime({
    targets: '#brand-name',
    translateY: vHBrandName / 18,
    duration: tBrandName,
    easing: 'linear'
  });

  //Body animations
  anime({
    targets: '.animationPart-1-1',
    height: vHAnimationPart11,
    duration: tAnimationPart11,
    easing: 'linear'
  });

  anime({
    targets: '#content-1',
    height: vHContent1,
    duration: tContent1,
    easing: 'linear'
  });

  anime({
    targets: '.animationpPart-1-3',
    height: vHAnimationPart13,
    duration: tanimationpPart13,
    easing: 'linear'
  });

  setTimeout(pageChangeIn2, tBoton2);
};


//Height convertion vh to px
function heightConversor(vh) {
  return document.documentElement.clientHeight * vh;
};


//Buttons Z-Index Change
function buttonsChange1() {
  document.getElementById('boton1').style.zIndex = '3';

  document.getElementById('boton4').style.zIndex = '4';
};

function buttonsChange2() {
  document.getElementById('boton1').style.zIndex = '4';

  document.getElementById('boton4').style.zIndex = '3';
};
