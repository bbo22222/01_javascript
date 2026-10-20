var day = "토"

switch(day){
    case "토":
    case "일":
        console.log("주말입니다");
        break;
   default:
       console.log("평일입니다");
}

if(day === "토" || day === "일"){
    console.log("주말입니다");
} else {
    console.log("평일입니다");
}

// 어떤 코드에서 어떤 방법으로 줄여 나갔는지 생각하면서 코드 줄여서 쓰는 연습하기 !!!!

var score = 85;
// 이 case에 대해 실행하고 판단해라
switch (true) {
    case score >=90:
        console.log("A");
        break;
    case score >=80:
        console.log("B");
        break;
    case score >=70:
        console.log("C");
        break;
    case score >=60:
        console.log("D");
        break;
    default:
       console.log("F");
       // 맨 마지막 case 또는 default엔
        // break를 쓰지 않아도 됨(필요 x)
        // 어차피 코드가 끝나기 때문
}







