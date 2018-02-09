function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome " + katzDeliLine[katzDeliLine.length - 1];
}
