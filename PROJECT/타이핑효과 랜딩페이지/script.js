let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS",
"Learn to Javascript", "Learn to Python", "Doyoung Project"]
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
//배열로 만든 후 배열안에 있는 소수점을 없애고 랜덤으로 문자만 나오게해라

let selectStringArr = selectString.split("");
//배열로 나온 문자열을 쪼개서 하나하나씩 

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS",
    "Learn to Javascript", "Learn to Python", "Doyoung Project"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    //배열로 만든 후 배열안에 있는 소수점을 없애고 랜덤으로 문자만 나오게해라
    let selectStringArr = selectString.split("");
    //배열로 나온 문자열을 쪼개서 하나하나씩 
    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(readomArr){
    if(readomArr.length > 0){
        target.textContent += readomArr.shift();
        setTimeout(function(){
            dynamic(readomArr);
        },80);
    }else{
        setTimeout(resetTyping,2000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}

/* blink라는 함수가 0.5초만큼 해라 */
setInterval(blink, 500);