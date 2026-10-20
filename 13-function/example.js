//13. 함수

//매개변수 : 함수가 실행이 되기 위해 받아야 되는 값의 자리(변수) -> ex )미지수 x,y(정해지지않은자리)
function add(a,b) { //이 함수 add 는 두 개의 값을 받아서 실행될 수 있음
    //이 함수 몸통 안에서 a 라고 부를거고 b라고 부를거야
    return a + b;        //<-반환(리턴)값
}

//add(2,3)-> 함수를 실행할 건데, 실행에 2와 3을 넣어서 실행할거야
//           실제 넣은 2와 3을 인수라고 함(매개변수 자리 a, b에 각각 2,3이 들어감)
console.log(add(2,3));   // add(2,3) 실행되어서 5라는 반환값을 받음
// 결과값으로는 console.log(5); 와 같음

function sayHello(name){
    console.log("안녕하세요" + name + "님");
}
//function은 return이 있을 수도 있고 없을 수도 있음

console.log(sayHello("홍길동"));
//0.consoe.log(값) 이 실행 되어야 하기 때문에 값을 알아야 함
//1. sayHello("홍길동")이 실행이 됨-> 함수 몸통의 코드가 한 줄 한 줄 실행이 되면서
//                               -> console.log("안녕하세요,홍길동님");이 실행이 되었음
//2.sayHello("홍길동") 함수는 반환값이 없으므로 , undefined로 평가됨
//3.console.log(undefined)이기 때문에 undefined 가 화면에 찍힘


//함수를 사용하는 이유 : 코드의 재사용 -> 유지보수의 용이성 -> 코드의 신뢰도 상승
//                    함수명을 함축적으로 만들면서, 보는 사람으로서도 바로 이해 가능하도록 함
function getDiscountPrice(price,rate){
    return price - (price * rate);
}

console.log(getDiscountPrice(10000,0.1));
console.log(getDiscountPrice(20000,0.4));


//함수를 정의하는 방법
//그 중 생성자 함수는 그냥 Function()을 쓰는 구나 기억만
//1. 함수 선언문(function 키워드를 통해 선언)
function square1(x){
    return x * x;
}

//2. 함수 표현식(익명 함수를 변수에 할당)
var square2 =function(x) {
    return x * x;
}

//3-1 화살표 함수
var square3 = (x) => {
    return x * x;
}

//3-2 화살표 함수( 함수 몸통이 1줄이고, return이 있다면 생략)
var square4 = (x) => x * x ;

//3-3 화살표 함수 (매개변수가 하나면 생력)
var square5 = x => x * x ;

//함수 호이스팅
//function 선언 키워드로 선언된 "함수 선언문"만 함수 호이스티으이 대상
//        => 통째로 올라가니까, 어디에서든지 사용(호출) 문제 없음
// 나머지는 var 선언 키워드로 선언된 "변수 선언"만 변수 호이스팅의 대상이 되어 올라감
//         => 변수부분만 올라가니까, 함수 값 (=설계도)이 저장되기 전에 사용하면 오류

//매개변수의 갯수와 인수 갯수가 다를 때
console.log(add(1));    //NaN => 인수가 부족해도 함수 실행 자체엔 아무런 지장 없음
                           //       다만, 함수 안에서 y 를 찾을 때 문제가 됨 (실행 자체 에러 x)
console.log(add(2,3,4));   // 5   => 인수가 넘치면 그냥 넘치는 인수는 버려짐


function greet(name="손", greeting="안녕하세요"){
    return greeting + ", " + name +"님!";
} // 순서 중요

console.log(greet()); //안녕하세요, 손님!
console.log(greet("홍길동"));  // 안녕하세요, 홍길동님!
console.log(greet("홍길동", "반가워요")); // 반가워요, 홍길동님!

function greet2(greeting ="안녕하세요", name="손"){
    return greeting + "," + name  + "님!";
}

console.log(greet2()); // 안녕하세요, 손님 !
console.log(greet2("안녕하세요","홍길동"));  // 두번째만 바꾸고 싶은데, '두번째'라는 건 '첫번째'가 있어야 함


//함수를 값처럼 다루기-> 다른 함수에 함수를 넘기기
function calculate(a, b, operation){
    return operation(a,b)
}
//calculate라는 이름을 갖는 함수 설계를 하고 있는데,
//이 함수는 a,b, operation 이라는 이름을 붙여서 3개의 매개변수를 받아서 실행하는데
//실행하면 다른 건 없고 바로 리턴을 만나는데 반환값이 operation(a,b)네?
//calculate 함수는 세 번째 매개변수로 들어온 함수를 첫번째 매개변수a 와 두번째 매개변수 b를 집어넣어서 실행한 결과를
//리턴한다.

//변수: 값을 저장할 수 있는 메모리 영역
//함수 : 값
//변수는 함수도 저장할 수 있음

console.log(calculate(10,5,add));
console.log(calculate(10,5,(x,y)=> x*y));


var mul = (x, y) => x * y;
console.log(calculate(10,5,mul));

