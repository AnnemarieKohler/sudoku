/* eslint-env knockout.js */
const inputGrid = function inputGrid() {
  return [[undefined, 6, undefined, undefined, undefined, undefined, undefined, 1, undefined],
          [undefined, undefined, undefined, 6, 5, 1, undefined, undefined, undefined],
          [1, undefined, 7, undefined, undefined, undefined, 6, undefined, 2],

          [6, 2, undefined, 3, undefined, 5, undefined, 9, 4],
          [undefined, undefined, 3, undefined, undefined, undefined, 2, undefined, undefined],
          [4, 8, undefined, 9, undefined, 7, undefined, 3, 6],

          [9, undefined, 6, undefined, undefined, undefined, 4, undefined, 8],
          [undefined, undefined, undefined, 7, 9, 4, undefined, undefined, undefined],
          [undefined, 5, undefined, undefined, undefined, undefined, undefined, 7, undefined]];
};

const viewModel = function viewModel(inputGrid) {
  const grid = [];
  let row = 0;
  const len = 9;
  const populateRow = function populateRow(rowNum) {
    const newRow = [];
    let col = 0;
    for (;col < len; col++) {
      newRow.push({
        val: ko.observable(inputGrid[rowNum][col]),
        disabled: (inputGrid[rowNum][col])
      });
    }
    return newRow;
  };
  for (;row < len; row++) {
    grid.push(populateRow(row));
  }
  return {
    grid: grid,
    finished: ko.observable(),
      submit: function(args) {
        console.log(args);
        let submission = grid.map(function(row) {
          return row.map(function (col) {
            return col.val();
          });
        });
        let puzzle = new Sudoku(submission);
        if (puzzle.isSolutionCorrect()) {
          console.log('yes');
          this.finished("success");

        } else {
          console.log('nope');
          this.finished("failure");
        };
      },
  };
};


const thisVM = viewModel(inputGrid());

ko.applyBindings(thisVM, document.getElementById('container'));
