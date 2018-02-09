var katzDeliLine = [];


function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var name = katzDeliLine[katzDeliLine.length - 1];
  var place = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + place + " in line." ;
}

function nowServing() {

  // if(katzDeliLine.length === 0) {
  //   return "There is nobody waiting to be served!"
  // }

  if(katzDeliLine.length > 0) {
    //var next = katzDeliLine.shift();
    return "Currently serving " + katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
