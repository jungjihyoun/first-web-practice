const onclick = document.getElementById("dropdownIcon");

function dropdownMenu(){
    var x = document.getElementById("dropdownClick");
    if(x.className === "topnav"){
        x.className += " responsive";
    //    기존 값을 제거하거나 요소에 영향을 주지 않고 요소에 클래스를 추가
    //    하려면 "공백과 새 요소 이름"을 더해준다
    // change topnav to topnav.responsive
    }else{
        x.className = "topnav";
    }
}

onclick.addEventListener("click",dropdownMenu);