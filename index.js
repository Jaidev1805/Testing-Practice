export function capitalize(string){
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function reverseString(string){
    if (!string) return "";
    let result = "";
    for(let i = string.length - 1; i >= 0;i--){
        result += string[i];
    }
    return result;
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  }
};

export function caesarCipher(str, shift) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(
        ((code - 65 + shift) % 26) + 65
      );
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(
        ((code - 97 + shift) % 26) + 97
      );
    } else {
      result += char;
    }

  }
  return result;
}

export function analyzeArray(array){
    let sum = 0;
    let length = array.length;
    let min = array[0];
    let max = array[0];

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        } else{
            max = array[i];
        }
    }

    let average = sum / length;
    let object = {
        Average : average,
        Min : min,
        Max : max,
        Length : length
    };
    return object;
}