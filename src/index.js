
// You should implement your task here.

 module.exports =   function towelSort(matrix) {
  if (matrix) {
    return matrix.map((item) => matrix.indexOf(item) % 2 === 0 ? item.sort((a, b) => a - b) : item.sort((a, b) => b - a)).flat();
   } else {
    return [];
   }
}

