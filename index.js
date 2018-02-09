function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var name = katzDeliLine[katzDeliLine.length - 1];
  return "Welcome, " + name + ". You are number 88 in line." ;
}
