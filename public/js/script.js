// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let snares = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let hiHats = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false];

let rideCymbals = [false, false, false, false, false, false, false, false,
false, false, false, false, false, false, false, false]

function toggleDrum(instrument, indexNumber){
  if (instrument[indexNumber] === false){
    instrument[indexNumber] = true
  }
  else {instrument[indexNumber] = false}
}


function clear(instrument){
  for (let x = 0; x < instrument.length; x++){
   instrument[x] = false;
     }
     // return instrument
}

function invert(instrument){
  for (let x = 0; x < instrument.length; x++){
    if (instrument[x] === false){
      instrument[x] = true
    }
    else {instrument[x] = false}
  }
}
