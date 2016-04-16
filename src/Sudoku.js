function Sudoku(grid) {
  this.grid = grid;
}

Sudoku.prototype.isBetweenOneAndNine = function(array) {
  for (var num = 0; num < 9; num++) {
    if (array[num] >= 1 && array[num] <= 9) {
      return true;
    } else {
      return false;
    }
  }
};
