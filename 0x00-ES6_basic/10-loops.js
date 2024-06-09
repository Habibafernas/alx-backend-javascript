export default function appendToEachArrayValue(array, appendString) {
    const newarray = [];
    for (let idx of array) {
      newarray.push(appendString + idx);
    }
  
    return array;
  }
