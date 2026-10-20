//1.암묵적 타입 변환 : 자바스크립트가 알아서 바꾸는 형변화

//string변환 : +연산자에 문자열이 하나라도 있으면 변환
console.log(1+"2"); // "12"
console.log("값 : "+"true"); // "값 :true "
console.log(`\`${100}`); // "100"


//number변환 : +를 제외한 산술 연산자, 비교 연산자
console.log("10"-3); // 7
console.log("6"*2); //12
console.log(+"42"); // 단항 + 연산자 : 42
console.log(+"abc"); // 계산불가 NaN
console.log(+true, + false, +null, +undefined); // 1 0 0 NaN

// boolean 변환
// falsy 값으로 평가되는 것  false, 0, "", null, undefined, NaN 만
// 이 외에 나머지들은 모두 truthy 취급



//2. 명시적 타입 변환: 개발자가 의도를 담아 코드화해서 직접 바꾸는 형변환

console.log(string(123), typeof string(123)); // "123" string
console.log((123).toString()); // "123"
console.log(Number(123), typeof Number(123)); // 123 Number
console.log(Boolean(""),Boolean("hello"));  // false true (실무에서는 "" 대신 !! 많이 사용)
// falsy 값으로 평가되는 것  false, 0, "", null, undefined, NaN 이라서
console.log(!!"hello"); // hello라는 타입은 true 이지만 요기 ! 하나 붙으면 false , !! 는 true // 값 : true

// Number() vs parseInt()
console.log(Number("100px")); // NaN, Number() 은 전체가 숫자여야 함
console.log(parseInt("100px")); // 100, parseInt()는 앞자리부터 순차적으로 읽어서 변환함
console.log(Number("3.9")); // 3.9, 정수든 소수든 상관업이 변환 가능
console.log(parseInt("3.9")); // 3, parseInt()는 정수만 변환 가능
console.log(parseFloat("3.9")); // 3.9 , ParseFloat()는 소수 변환 가능(정수 아닌 소수계산이여서 속도가 느림)




//3. 단축평가 : || (논리합), && (논리곱)
console.log("" || "기본값"); // 기본값 출력됨 , 앞 "" 는 문자 없어 값 없다 판단 false 
console.log("홍길동" || "기본값"); // "홍길동" ,  앞 "" 홍길동이라는 문자 있음 true 
// true 값 출력 둘 다 true면 앞에 값 출력 됨 

console.log( 0 && "실행안됨"); // 0 , 앞에 false 뒤로 넘어갈 수 없음
console.log("로그인됨"&&  "환영합니다"); // "환영합니다", 앞에 true로 판단 두 번째 값으로 넘어감

var isLoggedIn = true;
//프로그램을 만든다는 행위는 변수를 만들고 사용자의 상태에 따라 뒤에 값이 바뀌게 함(로그인하면 true 로그아웃 false)
isLoggedIn && console.log("로그인을 한 사용자에게만 이 메세지가 보입니다.");


//4. 옵셔널 체이닝( ?. )
var user = {
    name="홍길동",
    address: null,  // 최초가입 때 주소를 안 넣고, 주문을 하면 그제서야 회원정보를 주문서에 있는 주소로 업데이트
}

// console.log(user.address.city);  // typeError : Cannot read properties of null (타입에러 -> 미가 말한 항목 찾을 수 없어!)
//사용자 중에 address 값이 있는 사용자가 있고 address 값이 없는 사용자가 있어버리게 됨
console.log(user.address?.city); // address가 없으면 undefined, address가 있으면 그 내부 접근
console.log(user.profile?.image?.url); // profile이 없기 때문에 undefined -> 없는 거 이후부터는 신경 안 씀

//5. null 병합 연산자
var count =0;
console.log(count || 10 ); //10
console.log(count ?? 10); // 0

var volume = null;
console.log(volume ?? "이게 나가야됨"); //"이게 나가야됨"





























