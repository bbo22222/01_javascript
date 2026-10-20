//1. 숫자 num이 짝수면 "짝수", 홀수이면 "홀수"를 출력하세요
// % 삼항 연산자(OR)를 사용해서)
var num =17;
console.log(num % 2===0? "짝수":"홀수");




//2. 총 금액 total에 배송비 3000원 +=로 더한 뒤 출력하세요
var total =25000;
total+=3000
console.log(total);



//3. 아래 비교 결과를 예상해 주석으로 적은 뒤 확인하세요.
// 1== "1"                /true
// 1 === "1"              /false
//null == undefined      /true
//"b"> "a"              /true


//4. 나이 age 가 13 이상 19이하이면 true 를 출력하세요 (&& 사용(AND))
var age =16
console.log(age >= 13 && age <= 18);

//논리곲 : 둘 다 만족시켜야 트루

//5. 아래 코드의 출력 결과를 순서대로 예상한 뒤 실행해서 확인하세요
var x =3;
console.log(x++);  //3          1.화면 출력 =3, 2.덧셈 =4
console.log(++x);   // 5        //2. 화면 출력 1.덧셈 => (x=5) 5
console.log(x); //5
//예상 값 :5