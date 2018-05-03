// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let snares = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let hiHats = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let rideCymbals = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];


const transmogrifier = function(inputString){

if (inputString = "kicks"){
  return kicks;
}
else if (inputString = "snares"){
  return snares;
}
else if (inputString = "hiHats"){
  return hiHats;
}
else if (inputString = "rideCymbals"){
  return rideCymbals
}
else {return}
};


const toggleDrum = function(instrumentString, indexNumber){
let instrument = transmogrifier(instrumentString);

if (instrument[indexNumber] === false){
  instrument[indexNumber] = true
}
else {instrument[indexNumber] = false}
}


const clear = function(instrument){
let instrument = transmogrifier(instrumentString);

for (let x = 0; x < instrument.length; x++){
   instrument[x] = false;
     }
     // return instrument
}

const invert = function(instrument){
let instrument = transmogrifier(instrumentString);

for (let x = 0; x < instrument.length; x++){
    if (instrument[x] === false){
      instrument[x] = true
    }
    else {instrument[x] = false}
  }
}



/*
// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let snares = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let hiHats = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let rideCymbals = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

const toggleDrum = function(instrument, indexNumber){
  if (instrument[indexNumber] === false){
    instrument[indexNumber] = true
  }
  else {instrument[indexNumber] = false}
}


const clear = function(instrument){
  for (let x = 0; x < instrument.length; x++){
   instrument[x] = false;
     }
     // return instrument
}

const invert = function(instrument){
  for (let x = 0; x < instrument.length; x++){
    if (instrument[x] === false){
      instrument[x] = true
    }
    else {instrument[x] = false}
  }
}
*/
