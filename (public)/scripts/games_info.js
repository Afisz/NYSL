'use strict';

var league = {
  september: [
    {
      date: "09/01/19",
      teamA: "U1",
      teamB: "U4",
      location: "AJ Katzenmaier",
      locationId: "kat",
      time: "9:30 a.m.",
      id: "1"
  },
    {
      date: "09/01/19",
      teamA: "U3",
      teamB: "U2",
      location: "Greenbay",
      locationId: "gre",
      time: "1:00 p.m.",
      id: "2"
  },
    {
      date: "09/08/19",
      teamA: "U5",
      teamB: "U6",
      location: "Howard A Yeager",
      locationId: "yea",
      time: "9:30 a.m.",
      id: "3"
  },
    {
      date: "09/08/19",
      teamA: "U6",
      teamB: "U1",
      location: "Marjorie P Hart",
      locationId: "har",
      time: "1:00 p.m.",
      id: "4"
  },
    {
      date: "09/15/19",
      teamA: "U2",
      teamB: "U4",
      location: "North",
      locationId: "nor",
      time: "9:30 a.m.",
      id: "5"
  },
    {
      date: "09/15/19",
      teamA: "U3",
      teamB: "U5",
      location: "AJ Katzenmaier",
      locationId: "kat",
      time: "1:00 p.m.",
      id: "6"
  },
    {
      date: "09/22/19",
      teamA: "U1",
      teamB: "U3",
      location: "South",
      locationId: "sou",
      time: "9:30 a.m.",
      id: "7"
  },
    {
      date: "09/22/19",
      teamA: "U2",
      teamB: "U6",
      location: "Howard A Yeager",
      locationId: "yea",
      time: "1:00 p.m.",
      id: "8"
  },
    {
      date: "09/29/19",
      teamA: "U4",
      teamB: "U5",
      location: "Greenbay",
      locationId: "gre",
      time: "9:30 a.m.",
      id: "9"
  }
],
  october: [
    {
      date: "10/06/19",
      teamA: "U2",
      teamB: "U5",
      location: "Marjorie P Hart",
      locationId: "har",
      time: "9:30 a.m.",
      id: "10"
  },
    {
      date: "10/06/19",
      teamA: "U1",
      teamB: "U6",
      location: "South",
      locationId: "sou",
      time: "1:00 p.m.",
      id: "11"
  },
    {
      date: "10/13/19",
      teamA: "U3",
      teamB: "U4",
      location: "Howard A Yeager",
      locationId: "yea",
      time: "9:30 a.m.",
      id: "12"
  },
    {
      date: "10/13/19",
      teamA: "U5",
      teamB: "U1",
      location: "Greenbay",
      locationId: "gre",
      time: "1:00 p.m.",
      id: "13"
  },
    {
      date: "10/20/19",
      teamA: "U6",
      teamB: "U3",
      location: "North",
      locationId: "nor",
      time: "9:30 a.m.",
      id: "14"
  },
    {
      date: "10/20/19",
      teamA: "U2",
      teamB: "U4",
      location: "Marjorie P Hart",
      locationId: "har",
      time: "1:00 p.m.",
      id: "15"
  },
    {
      date: "10/27/19",
      teamA: "U3",
      teamB: "U1",
      location: "AJ Katzenmaier",
      locationId: "kat",
      time: "9:30 a.m.",
      id: "16"
  },
    {
      date: "10/27/19",
      teamA: "U5",
      teamB: "U6",
      location: "Howard A Yeager",
      locationId: "yea",
      time: "1:00 p.m.",
      id: "17"
  }
]
};

var locations = [
  {
    name: "AJ Katzenmaier Elementary",
    id: "kat",
    direction: "Brandsen 805, C1161 CABA",
    mapUrl: 'https://goo.gl/maps/qFUzt56h8dSYzxp18'
  },
  {
    name: "Greenbay Elementary",
    id: "gre",
    direction: "Av. Pres. Figueroa Alcorta 7597, C1428 CABA",
    mapUrl: 'https://goo.gl/maps/V4y8HF6Nmt6a59wA6'
  },
  {
    name: "Howard A Yeager Elementary",
    id: "yea",
    direction: "Av. Gral. Fernández de la Cruz 2145, C1437 CABA",
    mapUrl: 'https://goo.gl/maps/B1HCSEKNxm9dXaXa7'
  },
  {
    name: "Marjorie P Hart Elementary",
    id: "har",
    direction: "815, Ricardo Enrique Bochini 701, Avellaneda, Buenos Aires",
    mapUrl: 'https://goo.gl/maps/KgAA9UWqwjRA8b2J7'
  },
  {
    name: "North Elementary",
    id: "nor",
    direction: "B1870CJD, Corbatta Oreste Omar 28, B1870CJD Avellaneda, Buenos Aires",
    mapUrl: 'https://goo.gl/maps/xuHu7XCmcqFhMxiB7'
  },
  {
    name: "South Elementary",
    id: "sou",
    direction: "Av. Juan B. Justo 9200, C1408AKU CABA",
    mapUrl: 'https://goo.gl/maps/1YYfV9DLR7yepwfw7'
  }
];
