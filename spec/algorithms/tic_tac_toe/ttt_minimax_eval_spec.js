import TTTMMEval, { evaluatePlay } from '../../../src/algorithms/tic_tac_toe/ttt_minimax_eval'
import Matrix from '../../../src/algorithms/tic_tac_toe/matrix'

describe('Tic Tac Toe Evaluation using Minimax', () => {
  let board
  describe("selection", () => {
    beforeEach(() => {
      board = Matrix.from([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ])
    })

    it('should return center as best starting position', () => {

      var xScore = evaluatePlay(board, 'X')
      console.log(`XSCORE: ${xScore}`)

      var oScore = evaluatePlay(board, 'O')
      console.log(`OSCORE: ${oScore}`);

      // try all other

      console.log('\n', 'Evaluation:')
      evaluatePlay(board, 'O')

      board[2][1] = 'O'
      board[1][0] = 'X';

      console.log('\n', 'Evaluation:')
      evaluatePlay(board, 'O')
    })

    it('should return center as the best position', () => {
      console.log(`best play for player "O" is ${evaluatePlay(board, 'O').position}`)
      expect(evaluatePlay(board, 'O').position).toEqual([1,1])
    })

    it('self-preservation', () => {
      board[1][1] = 'X'
      board[2][1] = 'O'
      board[2][0] = 'X'

      // O should play board[6]
      expect(evaluatePlay(board, 'O').position).toEqual([0, 2])
    })

    it('knows how to win', () => {
      board[2][1] = 'O'
      board[2][2] = 'O'

      // O should play board[6]
      expect(evaluatePlay(board, 'O').position).toEqual([2, 0])
    })
  })
})
