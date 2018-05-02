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
