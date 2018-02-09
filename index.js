function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var name = katzDeliLine[katzDeliLine.length - 1];
  var place = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + place + " in line." ;
}
