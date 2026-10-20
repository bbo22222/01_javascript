const products =[
    {id:1, name: "노트북", price:1200000, category:"전자", stock:3},
    {id:2, name: "마우스", price:25000, category:"전자", stock:0},
    {id:3, name: "책상", price:150000, category:"가구", stock:5},
    {id:4, name: "의자", price:90000, category:"가구", stock:2},
    {id:5, name: "키보드", price:70000, category:"전자", stock:7},
];


//map()메서드를 통해 다음과 같은 화면을 출력하시오.
// [
//     '[1 / 5] 노트북 (전자) - 1,200,000원',
//     '[2 / 5] 마우스 (전자) - 25,000원',
//     '[3 / 5] 책상 (가구) - 150,000원',
//     '[4 / 5] 의자 (가구) - 90,000원',
//     '[5 / 5] 키보드 (전자) - 70,000원'
// ]

const result=products.map((item, index,array)=> {
    return`[${index +1} / ${array.length}] ${item.name} (${item.category}) - ${item.price.toLocaleString()}원`;
});

// number 타입의 변수(프로퍼티)엔 .toLocalString() 메서드가 붙음
//.toLocaleString()은 숫자를 이 프로그램을 실행한 해당 지역의 숫자 표기 방법으로 출력해줌
//우리나라나 미국이나 유럽이나 숫자를 표기할 때 10,000.00
//중동이나 터키나             숫자를 표기할 때 10.000,00

console.log(result);

products.forEach((item, index, array) => {
    console.log(
        `[${index + 1} / ${array.length}] ${item.name} (${item.category}) - ${item.price.toLocaleString()}원`
    );
});


// reduce 메서드 : 표기값을 마련하고 배열의 요소를 순회해가면서 함수를 실행하며 누적 계산하는 메서드(합계 등 구할 때)
//reduce(함수, 초기값) <---무조건 매개변수가 두 개가 들어가야 함
//reduce(()=> {},초기값)
//reduce((지금까지의 누적값, 이번 순회에 해당하는 요소 )=> {return 이번 순회 때 계산한 결과값}, 초기값)  <---함수는 한 덩어리로 **


//products의 재고 합계를 구하는 예제 <-- stock(재고)합계 구하기
//products.reduce()
//products.reduce(() => {}, 초기값) // 우리가 구하고 싶은 값인 '재고 합계'는 초기값이 0이어야 함
const total =products.reduce((sum,item) => {return sum + item.stock},0)  // sum과 item은 그냥 붙인 이름임
//reduce가 실행되면 초기값 0을 세팅
//1순회 -> reduce는 sum에 0, item 이번 순회 요소를 집어넣어줌. 함수 몸통이 실행되어서, 0+3=3을 리턴 -> 이 리턴값이 다음 순회의 sum값이 됨.
//2순회 -> reduce는 sum에 3, item 이번 순회 요소. 3 + 0= 3을 리턴 -> 다음 순회 sum이 3
//3순회 -> reduce는 sum에 3, item 이번 순회 요소. 3 + 5= 8을 리턴 -> 다음 순회 sum이 8
//마지막순회 -> 계산을 다 마치고 나온 리턴값이 결과로 나감

console.log(total);




//sort메서드 : 원본 배열의 요소를 순회해가면서 정렬하는 메서드
//오름차순(ascending/ asc) - 작은 값에서부터 큰 값으로 정렬 할 때(숫자라면) / 가나다순 / a~z
//내림차순(descending / desc) -큰 값에서부터 작은 값으로 정렬 할 때 / 반대

//sort(함수)
//sort(() => {})
//sort((앞요소, 뒷요소) => {return 순서를 바꿀지 말지 결정하는 코드});
//순서를 바꿀지 말지를 결정하는 코드 결과값이 양수면 자리를 바꾸고, 아니면 지나감

//안에 들어있는 비교 대상이 숫자라면
const nums=[5,2,8,1];
// nums.sort();
// nums.sort(() => {});
nums.sort((a,b) => {return a - b});
// 첫번째 순회 -> a:5, b:2 ->5 -2 =3  =>결과값이 양수가 나왔으므로 자리를 바꿈 => [2,5,8,1]
// 두번째 순회 -> a:5, b:8 ->5 -8 =-3  =>결과값이 음수, 그냥 지나감          =>[2,5,8,1]
// 세번째 순회 -> a:8, b:1 ->8 -1 =7  =>결과값이 양수가 나왔으므로 자리를 바꿈 => [2,5,1,8]
// 마지막 순회 -> 맨 앞 요소와 방금 전 순회 결과 비교 2-1 =1  =>결과값이 양수, 앞으로 배치됨 [1,2,5,8]

nums.sort((a,b) => {return b- a}); //내림차순

//products의 가격을 오름차순으로 정렬하고 싶다
//정렬 대상은 요소에 대해서 정렬하는 거지만, 비교대상은 요소가 갖고 있는 가격
products.sort((a,b) => {return a.price - b.price});
console.log(products);
//정렬이 끝나면 products가 변해버렸다
//그렇다면, products 그대로 있고 새로운 정렬된 녀석을 만들고 싶다면
//얕은 복사를 해도 되는지 깊은 복사를 해야되는지 판단하고, 그 방법에 따라 객체를 새로 생성한 뒤 sort를 돌리면 된다!


//비교 대상이 문자라면?
products.sort((a,b)=>{return a.name.localeCompare(b.name);}); // 오름차순
products.sort((a,b)=>{return b.name.localeCompare(a.name);}); // 내림차순

//localeCompare : string 타입인 변수에 사용할 수 있는 메서드
//    localeCompare ()메서드 : a변수를 기준으로 매개변수로 들어온 문자열을 비교해주는 메서드 -> -1,0,1 중 하나 반환해줌
// ("가").localeCompare ("나")=> -1         // 앞의 문자가 뒤의 문자보다 앞서있다. => 오름차순
//("나").localeCompare ("가")=> 1         // 뒤의 문자가 앞의 문자보다 앞서있다. => 내림차순




//메서드 체이닝

//재고가 있는 전자 제풍의 이름을 가격 낮은 순으로 정렬해서 결과를 보고싶다.

//const result1 = products.filter((item)=> item.stock >0);
//const result2 = result1.filter((item)=> item.category==="전자" );
//result2.sort((a,b) => {return a.price -b.price});
//const result = result2.map((item=> {return item.name});
//result.forEach((item)=> console.log(item));

//중간 단계에 있는 값들조차 (이 계산 이외에는 쓸모가 없는) 메모리에 저장해서 사용해야 된다.
//메서드 체이닝: 연속적으로 일어나야 하는 계산에 대해서 결과값을 따로 저장하지 않고 즉시 메서드를 연결 실행하는 것
products.filter((item)=> item.stock >0)
    .filter((item)=> item.category==="전자" )
    .sort((a,b) => {return a.price -b.price})
    .map(item=> {return item.name})
    .forEach((item)=> console.log(item));
// 쓸모가 없으니까 저장을 안 하고 실행하는 거
// 저장을 하고 싶다면

const temp1 =products.filter((item)=> item.stock >0)
    .filter((item)=> item.category==="전자" )
    .sort((a,b) => {return a.price -b.price})

    temp1.map(item=> {return item.name})
    .forEach((item)=> console.log(item));
// 저장될 곳을 만들어 주면 됨




