//1. 객체 만들기

var person ={
    name: "홍길동", // 프로퍼티 키 : name, 값 :"홍길동"
    age :20,
    hobbies : ["독서","여행"], // 값으로 배열(array)을 넣었음
    address: {city: "서울"}, // 값으로 객체 (object)를 넣었음
    greet: function () {
        //this 키워드
        //메서드가 존재하는 객체 자체를 가리키는 키워드
        console.log("안녕하세요,"+ this.name + "입니다");
    }
}

//2. 프로퍼티 접근: 마침표 표기법, 대괄호 표기법
console.log(person.name);
console.log(person.["age"]);  //대괄호 표기법은 변수를 가지고도 접근할 수 있기 때문에
                              //꼭 따움표""를 붙여 string 임을 표현해줘야 함
console.log(person.address.city);
console.log(person["address"]["city"]);

// 키를 변수로 받을 때는 대괄호 표기법으로만 가능
var k ="age";
console.log(person[k]); //따움표를 통한 string이 아니면 변수로 인식하여 값을 꺼내어 접근함


person.greet(); // 메서드(기능을 담은 프로퍼티) 실행


//3. 프로퍼티 생성 / 갱신 / 삭제

person.email = "hong@example.com"; //존재하지 않는 키라면 생성해줌
person.age = 21;                   // 이미 있는 키라면 값만 덮어쓰기 해줌
delete person.hobbies;             // 프로퍼티 삭제
console.log(person);