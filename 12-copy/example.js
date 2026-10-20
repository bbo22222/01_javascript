//1. 원시 값에 대한 복사
//원시값은 stack 메모리 영역에 그대로 쓰여지고, 그 값을 읽어서 그대로 복사(: stack 영역에 쓰여진 값을 그대로 복사)

var price = 1000;
var salePrice = price; //stack 영역의 price 변수 값 1000을 그대로 salePrice 저장

//이 시점에서 price엔 1000, salePrice엔 1000

saleprice = 800;
console.log(saleprice,price); //800  1000 각각 존재(원시값)



//2. 객체(참조자료형)에 대한 '얕은 복사'
var cart ={items:"사과", count:1 };
//stack 영역의 cart 변수에는 하나의 칸만 조재하므로
//2개의 프로퍼티를 저장하기 위해 heap 메모리 영역에 2칸을 확보하고 프로퍼티를 저장
// 이후 해당 heap 메모리 영역에 주소값을 stack 영역에 저장

//cart 라는 변수에는 주소값, heap 따로 데이터 존재


var sameCart=cart; //cart라는 변수에 있는 값을 sameCart에 할당
                                            // 결국, sameCart와 cart는 같은 '주소값'을 갖게됨

sameCart.count=5;
console.log(cart.count); //5
console.log(sameCart===cart); //cart에 저장된 주소값, sameCart에 저장된 주소값이 같아서 true

console.log(); // 화면에 값을 찍는 기능을 '실행'
console.log("값"); // 저 값을 화면에 찍어줘

//일상생활에서의 복사라는 건, 같은 내용을 가진 다른 종이를 만들어내는 일
// 깊은 복사 (같은 내용을 가진 건물을 세우는)//두개의 프로퍼티
var original ={
    name:"홍길동",
    address:{city:"서울"}
};

//첫번째 방법: Object.assign( )->첫번째자리에 객체, 두번째자리에 원본 두개가 들어가야 함
//Object.assign() : 원본을 가지고 새로운 객체를 만들어내는 기능
//Object.assign({},원본);
 var shallow1= Object.assign({}, original);
 //var shallow1={name:"홍길동", address:주소값 }

//두번째 방법 : 스프레드 문법(...)
//스프레드 문법 : 객체나 배열처럼 여러 개의 값을 가진 데이터를 낱개로 펼쳐서 보여주는 문법
var shallow2= {...original};//...은 오리지널이라고 하는 내용을 펼쳐낸다
//var shallow2 ={name:홍길동, address: 주소값};

//이 시점에서, original과 shallow1과 shallow2는 다른 주소값을 가짐
//original. address 와 shallow1. address와 shallow2.address는 같은 주소값을 가짐


//세번째 방법(완벽한 Deep Copy) : structuredClone()
//structuredClone(): 내부까지 자바스크립트 엔진이 확인하여 새로운 대상을 만듦
//structuredClone(원본 또는 value, options)
var deep = structuredClone(original);
