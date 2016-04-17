describe('Sudoku', function() {

  const grid = [[5, 6, 8, 4, 7, 2, 3, 1, 9],
                [2, 3, 9, 6, 5, 1, 8, 4, 7],
                [1, 4, 7, 8, 3, 9, 6, 5, 2],

                [6, 2, 1, 3, 8, 5, 7, 9, 4],
                [7, 9, 3, 1, 4, 6, 2, 8, 5],
                [4, 8, 5, 9, 2, 7, 1, 3, 6],

                [9, 7, 6, 5, 1, 3, 4, 2, 8],
                [8, 1, 2, 7, 9, 4, 5, 6, 3],
                [3, 5, 4, 2, 6, 8, 9, 7, 1]];

  const sudoku = new Sudoku(grid);
  const firstRow = sudoku.grid[0];

  it('checks array contains only numbers from 1 to 9', function () {
    expect(sudoku.isBetweenOneAndNine(firstRow)).toBe(true);
  });

  it('checks array contains each number 1 to 9 only once', function () {
    expect(sudoku.isEachNumberUnique(firstRow)).toBe(true);
  });

  it('checks each row follows the rules', function () {
    expect(sudoku.isEachRowFollowingRules()).toBe(true);
  });

  it('gets the columns from the grid', function() {
    const columns = [[5, 2, 1, 6, 7, 4, 9, 8, 3],
                     [6, 3, 4, 2, 9, 8, 7, 1, 5],
                     [8, 9, 7, 1, 3, 5, 6, 2, 4],

                     [4, 6, 8, 3, 1, 9, 5, 7, 2],
                     [7, 5, 3, 8, 4, 2, 1, 9, 6],
                     [2, 1, 9, 5, 6, 7, 3, 4, 8],

                     [3, 8, 6, 7, 2, 1, 4, 5, 9],
                     [1, 4, 5, 9, 8, 3, 2, 6, 7],
                     [9, 7, 2, 4, 5, 6, 8, 3, 1]];
    expect(sudoku.getCols()).toEqual(columns);
  });

  it('checks each column follows the rules', function () {
    expect(sudoku.isEachColumnFollowingRules()).toBe(true);
  });
});
