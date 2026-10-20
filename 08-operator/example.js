// 1. 산술 연산자

console.log(10 + 3);   //13
console.log(10 - 3);   //7
console.log(10 * 3);   //30
console.log(10 / 3);   //3.333333333...
// 딱 떨어지지 않는 소숫점 계산을 시키면 믿을 수 없음
console.log(10 % 3);   //1
console.log(2 ** 3);   //8  (2에 3승)

//증감연산자 : 전위 증감 연산자, 후위 증감 연산자
var a = 5;
console.log(a++);  // 화면 :5 , a의 값 :6
console.log(a);    // 화면 : 6
console.log(++a); // 화면 :7 , a의 값 :7


// 2. 할당 연산자

var total =10;
total +=5;   //15
// var temp +=5; // undefined +5 를 한 것과 같음---> 초기화가 안 된 상태에서 바로 계산 불가
total-=3;   //12
total *=2;  //24
total /=4;    //6
console.log(total);

var message ="안녕";
message +="하세요";  //+연산이 산술연산이 아닌, 연결연산 동작
console.log(message);  // 안녕하세요

//3. 비교 연산자
// ==, ===이 있을 때 ===을 기본적으로 사용한다고 생각해야 함.(특별한 경우==)
console.log(5 =="5"); //true (=느슨한 비교)
console.log(5 === "5"); //false (=엄격한 비교)
console.log(false == 0); // true (-> 컴퓨터 내부적으로 false는 0으로 기록 중)
console.log(true == 0); // true (-> 컴퓨터 내부적으로 true는 1이라고 기록 중)

console.log(undefined == null); // (true 값이 없는 상태이기 때문)

console.log(5! ="5"); // ! false => true
console.log(5!=="5"); // ! true => false


//4. 삼항 연산자 => 조건식? 조건이 참일 때 : 조건이 거짓일 때

var score =75;
var result = score >=60? "합격" : "불합격";
console.log(result);

//5. 논리 연산자

var age =25;
var hasTicker ="true";
console.log(age < 19 ㅣㅣ hasTicker);  // true => 논리합(or) : 둘 중 하나라도 참이면 참
console.log(age >= 19 &&  hasTicker); // true => 논리곱(and) : 둘 다 참이어야 참
console.log(!hasTicker);             // false => 부정(not) :반대값

//6. typeof 연산자
// 나오는 결과값 8가지
//number, string, boolean, undefined, symbol, bigint, object, function











































