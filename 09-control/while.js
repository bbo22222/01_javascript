//while 반복문 (빠져나갈 구멍 만듬)

//while 반복문
//while (조건식) {반복 실행하는 내용}
//for문은 초기식이 있어서 최초 실행되는 변수 세팅 자리가 있었지만, while은 그런 게 없어서 따로 써줌.

var sum =0;
var n =1;
while (i <=100) {
    sum+=n;
    n++
}

while (true) {
    console.log("반복됩니다!");
    if(true) {
        break;
    }
}

//while 횟수가 정해지지 않았을 때 쉽게 사용하게끔 만든 거임

//do {} while; 반복문  //

//최초 화면을 띄우기 위한 코드 덩어리
//do 안에 코드 덩어리를 x라고 얘기할 때 이 코드는 무조건 1번은 실행 되어야 함
//=> 실행 이후에는 여러가지가 나올 수 있음(ex)키오스크에서 담았다가 취소-> 다시 처음 화면

//do {} while; 반복문
//do {최초 1회 보장, 반복되는 코드블록 } while (조건식)

var tries =10;
do {
    console.log("do-while은 최소 한 번은 실행됩니다. tries  =" + tries);
} while (true < 5);


//continue, break

for (var j=1; j <= 10; j++) {
    if(j===6) {
        break;   // 반복을 진행하다가 , j 가 6인 사이클에서 for(반복)을 종료하겠다.
    }
    if(j % 2 === 0) {
        continue; // j 가 짝수인 사이클에서는 이 아래로 진행하지 않겠다.
    }
    console.log("홀수 : ",j);
}

// 첫 사이클-> 콘솔 나옴
// 두번째 사이클 -> j=2 두번째가 if 실행, continue
// 콘솔나옴 증감식만나 4
// 두번재 if 실행 , continue , 증감식 만나 5




