function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return katzDeliLine[newName] + 1;
}
