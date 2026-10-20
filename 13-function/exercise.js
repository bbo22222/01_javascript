//문제 1. 두 수 중 큰 수를 반환하는 함수 max(a, b)를 함수 선언문으로 만드세요.

 function max(a,b){
//     if( a> b) {
//         return a;
//     }
//     else { return b;}
// }
     return a > b ? a: b;

console.log(max(3,8));}



//문제 2. 섭씨 온도를 화씨로 바꾸는 함수 toFahrenheit를 화살표 함수로 만드세요.
//화씨 = 섭씨 *9 / 5 +32

//TODO : var toFahrenheit  = x => x * 9 / 5 +32;
console.log(toFahrenheit(30))




//문제3. 점수를 받아 60점 이상이면 "합격", 아니면 "불합격"을 반환하는 함수 표현식  checkPass를 만드세요.



//TODO : var checkPass = function(score) {
//     if (score >= 60) {
//         return "합격";
//     } else {
//         return "불합격";
//     }
// };

// return score >=60? "합격" : "불합격"


console.log(checkPass(75));




//문제4. 인사말 함수 welcome(name)을 함수 선언문으로 만드세요. 이름을 넘기지 않으면 "고객"을 기본값으로 씁니다.

//TODO : function welcome(name="고객"){
//     return   name + "님,환영합니다!" ;}
console.log(welcome());           //고객님, 환영합니다!
console.log(welcome("홍길동"));    // 홍길동님, 환영합니다!



//문제5. 아래 코드를 생행하면 어떤 결과가 나올지 예상해보세요
console.log(hello());
var hello = function(){return "hi"};
//console.log(hello);는 문제가 없지만 (hello())소괄호를 통해 해당 변수를 실행한다는 게 문제->오류(hello에 있는 값이 함수가 아니야!)
