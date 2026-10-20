//스코프 (유효범위) : 변수 또는 함수가 접근(사용)될 수 있는 범위

//전역 스코프 : 어디서든 사용 가능
var globalValue = "전역 변수";

function showScope(){
    //지역 스코프 이면서 함수 레벨 스코프
    //이 함수 안에서만 사용 가능
    var localValue ="지역 변수";
    console.log(globalValue);
    console.log(localValue);
}

showScope();
//console.log(localValue); ->ReferenceError : localValue is not defined

//같은 이름의 변수가 존재한다면 실행 위치에서 가까운 스코프가 우선
var message =" 전역의  message 변수";
function printMessage(){
    var message=" 함수 안의 message 변수";
    console.log(message);
    //나는 이 안에 있는 message 말고 밖에 이쓴 message를 불러오고 싶은데?-> 안됨
    //그럴거면 애초에 이 안에 message 변수 명을 같게 지으면 안됨
}
printMessage();
console.log(message);
//밖에서 printMessage 함수 안에 있는 message를 불러오고 싶은데?-> 안됨
//printMessage 안의 message는 함수가 실행이 끝나면 사라지는 존재

//스코프 체인 : 안 쪽에서 바깥 쪽으로 차례대로 변수를 찾아감
var level ="전역";
function outer(){
    var outerValue ="outer의 변수";
    function inner() {
        var innerValue =" inner의 변수";
        console.log(innerValue);
        console.log(outerValue);
        console.log(lever);
    }
    inner();
}
outer();


//var 변수 선언 키워드는 함수 레벨 스코프까지만 확인 / 블록{}은 스코프를 만들지 않음
ir (true){
    var insideIf ="if 블록 안에서 선언된 변수";
}
console.log(insideIf); //var 변수는 블록 밖에서도 접근 가능

for (var i=0; i<3; i++){}
console.log("반복문이 끝난 뒤 i:" + i); // 반복문에 포함된 var 변수도 밖으로 새어 나옴


//var 변수는 재선언도 허용하기 때문에 개발자가 의도치않게 (기억하지 못해서 ) 덮어쓰는 상황이 발생될 수 있음
var count =10;
if (true){
    var count =99;  //어디선가 사용된 count 이름의 변수를 재선언하고 값을 덮어씀
}
console.log(count);