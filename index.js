function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome " + katzDeliLine[katzDeliLine.length - 1] + ". You are number " + katzDeliLine.length-1 + " in line.";
}
