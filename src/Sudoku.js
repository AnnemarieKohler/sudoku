function Sudoku(grid) {
  this.grid = grid;
}

Sudoku.prototype.isBetweenOneAndNine = function isBetweenOneAndNine(array) {
  for (let num = 0; num < 9; num++) {
    if (array[num] >= 1 && array[num] <= 9) {
      return true;
    }
  }
  return false;
};

Sudoku.prototype.isEachNumberUnique = function isNumberUnique(array) {
  const sortedArray = array.sort().join('');
  if (sortedArray === '123456789') {
    return true;
  }
  return false;
};
