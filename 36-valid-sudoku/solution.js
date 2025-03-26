export default isValidSudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  for (let r = 0; r < 9; r++) {
      const row = board[r]
      const nums = row.filter(x => x != '.')
      if (nums.length !== new Set(nums).size) return false
  }

  for (let c = 0; c < 9; c++) {
      const col = [...Array(9).keys()].map(x => board[x][c])
      const nums = col.filter(x => x != '.')
      if (nums.length !== new Set(nums).size) return false
  }

  for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
          if (!validSubGrid(board, r, c)) return false
      }
  }

  return true
}

function validSubGrid(board, r = 0, c = 0) {
const [row_ofs, col_ofs] = [r * 3, c * 3]

const grid = []
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
      grid.push(board[row_ofs + i][col_ofs + j])
  }
}
const nums = grid.filter(x => x != '.')
return nums.length === new Set(nums).size
}
