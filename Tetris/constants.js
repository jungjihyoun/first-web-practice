
// 10개의 열과 20개의 행으로 구성
// 이 값들은 보드를 순환하는 데 자주 사용되므로 상수 값으로 추가

const COLS = 10;
const ROWS  = 20;
const BLOCK_SIZE = 30;

//열거형으로 키 코드 값
const KEY={
    LEFT : 37,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY);
//freeze()사용하여 불변하게 사용하기