let target = document.querySelector("#dynamic");

//단어 하나하나 배열화 시켜서 타이핑 효과 주기


function randomString() {
    let stringArray = ["Thanks for watching this video", "I like It !" , "Please Subscribe ME !", "Thanks for coming" , "MERCI"];
    let selectString = stringArray[Math.floor(Math.random() *  stringArray.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;

}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}



//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());

function blink() {
    //active class add delete
    target.classList.toggle("active");
}
setInterval(blink,500);