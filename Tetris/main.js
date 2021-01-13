//canvas 설정
const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d');

//상수로 캔버스 크기 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//블록의 크기 변경
//scale 함수를 사용하면 배번 block_size로 계산할 필요 없이
//블록의 크기를 1로 취급할 수 있어서 단순화 가능 ???
ctx.scale(BLOCK_SIZE, BLOCK_SIZE)

//play 버튼 누를 때
let board = new Board();

function play() {
    board.reset();
    //console.table은 숫자값으로 보드를 확인 할 수 있다.
    console.table(board.grid);


    let piece = new Piece(ctx);
    piece.draw();
    board.piece = piece;

}

//얕은 복사를 통해 블럭 움직임 복사
moves = {
    [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.UP]:    p => ({ ...p, y: p.y + 1 })
};