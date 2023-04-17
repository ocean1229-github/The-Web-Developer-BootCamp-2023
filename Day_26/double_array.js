const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X','O', null]
]

// o   x
//   x o
// x o 

// 중간 x에 접근하고싶으면
board[1][1] = 'O';