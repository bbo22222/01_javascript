//find 메서드 : 조건에 맞는 첫 번째 요소를 반환하는 메서드
//             조건에 맞는 모든 요소를 돌려주는 게 아님

const arr = ["apple","banana","melon"];

//arr.find(함수)
//arr.find(() => {})
//arr.find((이번에 순회할 때의 요소) => { 검색에 대한 조건-> true, false가 반환 되게끔 써줘야 함 })
// fine 메서드는 함수에 기재한 조건이 true 인 요소를 반환시키는 메서드
//arr.fine((item)=> {return item ==="banana"});// 이번 순회에 들어오는 아이템이 바나나인지
arr.find(item=>item==="banana");

//arr 의 요소가 3개니까 3번 순회하는게 목표(중간에 찾으면 중간 종료)
//1번째 순회 : item에 사과라서 사과===바나나를 확인하고 false로 1번째 순회 종료 
//2번째 순회 : item에 바나나가 들어가서 바나나===바나나를 확인하고 true로 확인하여 바나나를 반환(return)하고 find로 종료
//3번째 순회는 없음

const products =[
    {id:1, name: "노트북", price:1200000, category:"전자", stock:3},
    {id:2, name: "마우스", price:25000, category:"전자", stock:0},
    {id:3, name: "책상", price:150000, category:"가구", stock:5},
    {id:4, name: "의자", price:90000, category:"가구", stock:2},
    {id:5, name: "키보드", price:70000, category:"전자", stock:7},
];

//내 사이트의 상품들 중 상품명이 "책상"이라는 것을 검색해오고 싶다.
//products.find(함수);
//products.find(() => {});
//products.find((item) => {}); // 순회할 때의 그 요소가 들어오는 자리를 나는 item 이라고 부르겠다.
//products.find((item)=> {return item.name ==="책상"}); // 순회할 때 들어온 그 요소의 name 프로퍼티 값과 "책상"을 비교
const desk = products.find(item => item.name ==="책상");
//desk 안에는 {id:3, name: "책상", price:150000, category:"가구", stock:5} 가 들어감

const speaker = products.find(item => item.name ==="스피커");
// 검색을 했는데 조건에 맞는 게 없다면 결국 '값이 없다'인거고 , 그것은 undefined 로 평가됨


//.find() 메서드에 들어가는 매개변수는 1자리 이고, 그 자리는 함수가 들어가며 함수의 모양은 ()=> {}
//                 그래서 그 함수에 대해서만 보게 되면
//                 매개변수 자리엔 총 3개의 값을 find메서드가 넣어줌
//                 (item, index, array) => {}
//                 item : 현재 순회하고 있는 대상 요소
//                     index : 현재 순회하고 있는 대상 요소의 인덱스 번호
//                        array : 원본 array

//함수라고 하는 녀석은 들어가는 값인 매개변수라는 것과 실제 실행이 되는 내용인 함수 몸통이라고 하는 부분
// 매개변수의 자리가 중요함. 이 함수를 실행시킬 때 몇 개의 값을 가지고서 실행할 것이냐는 걸 결정
//함수 몸통을 실행하는데 주어진 인수가 부족하면 실행하는 도중에 문제가 생길 소지가 있고(안 들어온 값은 undefined로 처리가 되니가)
//함수 몸통을 실행하는데 주어진 인수가 더 많으면 아무런 문제가 되지 않는다

// find메서드는 실행될 때 매개변수로 들어온 함수에게 매 순회 때마다 3가지 인수를 전달해 줌

const list =[1,2,3,4,5];

list.find (item => item ===4);
//1순회: find메서드는 주어진 함수에게 매개변수 첫 자리에 이번 순회 때의 요소값인 1, 두번째 자리에 이번 순회 때는 요소 인덱스인 0, 세번째 자리에 array [1,2,3,4,5]
//         하지만 우리가 쓴 함수는 (item)=> item ===4 이기 때문에 값을 넣어도 받을 수 있는 게 첫 번째 자리 밖에 받을 수 없음
//2순회 : 첫 자리에 요소값 2, 두번째 자리에 인덱스값 1, 세번째 자리에 원본 array [1,2,3,4,5]
//3순회 : 첫 자리에 요소값 3, 두번째 자리에 인덱스값 2, 세번째 자리에 원본 array [1,2,3,4,5]
//4순회 : ....(true가 나와서 상황종료)
//5순회 : .... (x)

list.find(()=>{})
list.find((item, index, array) => {return item===4});
list.find((item) => {return item ===4});
list.find(item=> item===4); // item만 필요하니까 추가로 있던 index와 array는 생략한 거임 안 쓸거니까)






// findIndex 메서드 : 조건에 맞는 요소의 "인덱스 번호"를 반환하는 메서드(find와 사용법은 동일)
const deskIndex = products.findIndex(item => item.name ==="책상");
//deskIndex 라는 변수에는 2가 할당됨 (0,1,2,3,4 순이니까 !!!)

const speaker=products.findIndex (item => item.name ==="스피커");
// * 검색에 걸리지 않으면, 결과값으로 -1을 돌려줌 !!! *
//findIndex 메서드는 number 타입의 값을 돌려주도록 강제되어 있음
//if(speaker){return " 검색 있음";}else {return "검색된 결과가 없습니다."};
//if(spearkIndex ! === -1) { return " 검색된 결과가 존재합니다"} else {return "검색된 결과가 없습니다"};


//filter 메서드 : 조건에 맞는 모든 요소들에 대한 검색을 해주는 메서드 (맞는 결과값 모두를 돌려줌)
//                               => 그에 대한 반환값은 배열(array)로 반환됨
//products.filter(함수)
//products.filter(()=>{})
//products.filter((이번 순회 때의 해당하는 요소)=>{return 검색에 필요한 조건을 넣어 설정})
//products.filter((item) => {return itme.category ==="가구";} );
const furniture = products.filter(item => item.category ==="가구");
//furniture =[
//   {id:3, name: "책상", price:150000, category:"가구", stock:5},
//   {id:4, name: "의자", price:90000, category:"가구", stock:2},
// ]

const inStock = products.filter(item=> item.stock>0); // 내가 갖고 있는 상품 중 재고가 있는 것들을 검색

const food = products.filter(item => item.category ==="식품")
//food =[];  -> 없으면 빈 배열 []만 남음
//filter 메서드는 배열을 반환값에 준비해놓고[], 조건에 맞는 값(true)들을 push(추가?)함

// 조건에 맞는게 있는지 없는지 체크를 3방식으로 해본다면,
//find 메서드는 값이 있는지 없는지 체크 => if(result)
//findIndex 메서드로 값이 있는지 없는지 체크 => if(result !== -1)
//filter 메서드로 값이 있는지 없는지 체크 => if(result.length >0 )


//some 메서드 : 배열 요소들 중 하나라도 조건이 만족하면 true, 아니면 false를 반환하는 메서드
//             find처럼 요소를 순회하다 조건을 만족하는 요소를 만나면 순회 종료
// some은 기본값이 false 이라고 할 수 있음 -> 만족하는 걸 만나는 순간 true 뿅 종료처리

//products.some(함수)
//products.some(() => {})
//products.some((이번 순회에 해당하는 요소가 들어오는 자리) => {return 검색조건}
//products.some((P) => {return p.stock ===0 })
console.log("some - 품절 상품이 있나?", products.some(p => p.stock ===0)); //some - 품절 상품이 있나 ? true
//find와 같으나 그에 대한 응답이 true false 로 나간다는 게 다름


// every 메서드 : 배열 요소를 순회하며 조건 판별하는데 모든 요소가 조건에 만족해야 true
//               배열 요소 중 하나라도 조건에 만족하지 않으면 false를 반환하고 종료됨
//               every는 기본값이 true 이다가 불만족한 걸 만나면 false 뿅 종료처리
console.log("every - 모두 10만원 이하인가?", products.every(p => p.price <=100000))



//중요도
// filter >> find, findIndex >>>>>>> some, every (사용법은 비슷하기에 각각 뭐하는 건지는 알아두기**)



//map메서드 : 배열 요소를 순회하면서 주어진 함수에 따라 요소를 가공하여 새로운 결과 배열을 리턴하는 메서드
//             ****리턴 값은 배열이고 그 요소의 갯수는 원본과 같음****
//products. map(함수)
//products.map(()=>{})
//products.map((item, index,array)=>{})
//products.map((item, index, array) => {return item.name});
//products.map((item) => {return item.name});
products.map(item => item.name);
//1순회 때 -> map의 결과값 : [ "노트북"]
//2순회 때 -> map의 결과값 : [ " 노트북", "마우스"]
//3순회 때 ->             : [ " 노트북", "마우스", "책상"]
//4순회 때 ->             : [ " 노트북", "마우스", "책상", "의자"]
//5순회 때 ->             : [ " 노트북", "마우스", "책상", "의자", "키보드"]
//최종 map()을 돌린 리터값 [ " 노트북", "마우스", "책상", "의자", "키보드"]

const salePrices= products.map((item) => {
    return {name: item.name, price: item.price * 0.9}
});
//1순회 : 리턴값 : { name:"노트북", price: 1080000 }
//2순회 : 리턴값 : { name:"마우스", price: 22500 }
//3순회 : 리턴값 : { name:"책상", price: 135000 }
//4순회 : 리턴값 : { name:"의자", price: 81000 }
//5순회 : 리턴값 : { name:"키보드", price: 63000 }

salePrices =[
  { name:"노트북", price: 1080000 },
  { name:"마우스", price: 22500 },
  { name:"책상", price: 135000 },
  { name:"의자", price: 81000 },
  { name:"키보드", price: 63000 }
];




