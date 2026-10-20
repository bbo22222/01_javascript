//1. 변수 선언과 할당

var score;  // 선언 : score라는 이름의 저장 공간을 만듦

// console.log(score) -> score 변수 안의 값을 화면에 출력하는 명령
console.log(score);   // undefined ( 아직 초기화가 일어나지 않음)

score  = 80; // 할당: 저장 공간에 값을 넣음
console.log(score);

var name = "홍길동"; // 선언과 할당(초기화)를 한 번에
console.log(name);

// 2. 호이스팅(Hoisting)
// var 로 선언한 변수는 선언부가 코드의 맨 위로 끌어올려진 것처럼 동작되는 것

console.log(hoisting);     // undefined
var hoisting  = " 나중에 선언된 변수";
console.log(hoisting);     // 나중에 선언된 변수


// 3. 변수명 작명 규칙

var userName  = "kim"; // 영문, 숫자, - , $ 사용가능 / camelCase
var _count = 1;        // _ 시작 가능
var $price = 1000;     // $시작 가능

//var 1st = "x";         // 숫자로 시작 불가
//var user-name = "park"; // 하이픈(-) 사용 불가
//var var = 4;            // 시스템이 사용 중인 예약어는 변수명으로 사용 불가(var var123은 가능 var 단독으로만은 x)

var apple = "사과";
var Apple = "대문자 사과"; // 같은 사과 소대문자만 구분해서 사용은 가능하지만 되도록 소대문자로 구분하기보다는 숫자 붙여서




// 4. 표기법

var myFirstName ="카멜케이스"; // 자바스크립트 변수나 함수에 사용(소문자로 시작해서 각 단어 앞을 대문자로 구분)
var MyComputerIsGood = "파스칼케이스"; // 자바스크립트 클래스나 타입에 사용(각 단어 앞 글자 대문자)
var my_first_name = "스네이크케이스"; // 파이썬에서 자주 사용
// kebab-case 방식도 있음


// 5. 동적 타이밍
// 같은 변수에 다른 종류의 값을 넣을 수 있음

