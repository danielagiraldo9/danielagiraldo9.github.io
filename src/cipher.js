const cipher = {
  encode (offset, string) {
    offset *= 1;
    if (typeof offset !== "number") {
      throw new TypeError("it must be a number");
    }
    if (typeof string !== "string") {
      throw new TypeError("it must be a string");
    }
    const spacesToRun = offset % 26;
    let encodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        encodedMessage += " ";
      } else {
        const letterCipherOne = string.charCodeAt(i) + spacesToRun;
        if (letterCipherOne > 90) {
          const res = letterCipherOne - 90;
          const letterCipherTwo = 64 + res;
          encodedMessage += String.fromCharCode(letterCipherTwo);
        } else {
          encodedMessage += String.fromCharCode(letterCipherOne);
        }
      }
    }
    return encodedMessage;
  },

  decode (offset, string) {
    offset *= 1;
    if (typeof offset !== "number") {
      throw new TypeError("it must be a number");
    }
    if (typeof string !== "string") {
      throw new TypeError("it must be a string");
    }
    const spacesToRun = offset % 26;
    let decodeMessaje = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        decodeMessaje += " ";
      } else {
        const letterDecipherOne = string.charCodeAt(i) - spacesToRun;
        if (letterDecipherOne < 65) {
          const res =  letterDecipherOne - 65;
          const letterDecipherTwo = 91 + res
          decodeMessaje += String.fromCharCode(letterDecipherTwo);
        } else {
          decodeMessaje += String.fromCharCode(letterDecipherOne);
        }
      }
    }
    return decodeMessaje;
  }
}

export default cipher;
