const hexToRgb = (hex) => {
  let d = hex?.split("#")[1];
  var aRgbHex = d?.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
};
const getTextColor = (backColor) => {
  let rgbArray = hexToRgb(backColor);
  if (rgbArray[0] * 0.299 + rgbArray[1] * 0.587 + rgbArray[2] * 0.114 > 186) {
    return "#000000";
  } else {
    return "#ffffff";
  }
};
const replaceAt = function (string, index, replacement) {
  // if (replacement == "" || replacement == " ") {
  //   return (
  //     string.substring(0, index) +
  //     string.substring(index + replacement.length )
  //   );
  // }
  const replaced = string.substring(0, index) + replacement + string.substring(index + 1)
  return replaced
};

export { hexToRgb, getTextColor, replaceAt };
