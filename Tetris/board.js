// 보드 : 셀들로 구성
// 비어있는 셀은 0 색상은 1-7로 표현
// 2차원 배열로 행과 열 나타냄

//1. board 클래스에 모든 셸이 0으로 초기화된 보드 반환
class Board{
    grid;
    //새 게임이 시작되면 보드 초기화
    reset(){
        this.grid = this.getEmptyBoard();
    }
    //0으로 채워진 행렬을 얻는다
    getEmptyBoard() {
        return Array.from({length: ROWS}, () => Array(COLS).fill(0));
    }

    //키보드를 이용하여 조각 움직이기
    move(p){
        this.x = p.x;
        this.y = p.y;
    }

}