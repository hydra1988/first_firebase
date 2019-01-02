var select_code = new Array("Major","Miner","All");


var Major = new Array('C', 'F', 'B♭', 'E♭', 'A♭', 'D♭', 'G♭', 'B' , 'E', 'A', 'D', 'G');
var Miner = new Array('Cm', 'Fm', 'B♭m', 'E♭m', 'A♭m', 'D♭m', 'G♭m', 'Bm' , 'Em', 'Am', 'Dm', 'Gm');
// 배열 합치기 
var All = Major.concat(Miner);


console.log(select_code[0]);



var code_change = document.getElementById("code_change");



/*************************************** */
//  <h1 id="code_change"></h1> 에 대한 정의  




// 코드에 대한 Attribute 변경 
code_change.setAttribute("align", "center");

// 코드에 대한 style 변경 
code_change.style.setProperty("font-size", "400px");


/*************************************** */





/*************************************** */
// 버튼 정의

var button = document.getElementsByClassName("btn btn-primary btn-lg");
button[0].innerHTML = "All";
button[1].innerHTML = "Major";
button[2].innerHTML = "Miner";


// Stop, Start 선택 
var timer ;
var interval ;

// All 버튼 
button[0].addEventListener("click", function() 
{
  // 인터벌 초기화 
  clearInterval(timer);
  timer = null;
  // 
  timer = setInterval(function()
  {
    code_change.innerHTML = randomItem(All)
  }
   , 5000 );
}
, false);

// Major 버튼 
button[1].addEventListener("click", function() 
{
  clearInterval(timer);
  timer = null;
  timer = setInterval(function()
  {
    code_change.innerHTML = randomItem(Major)
  }
   , 5000 );
}
, false);

// Miner 버튼
button[2].addEventListener("click", function() 
{
  clearInterval(timer);
  timer = null;
  timer = setInterval(function()
  {
    code_change.innerHTML = randomItem(Miner)
  }
   , 5000 );
}
, false);


/*************************************** */

// input 설정 

document.getElementById("input_time").style.setProperty("background-color" , "white");
document.getElementById("input_time").style.setProperty("color" , "black");
document.getElementById("input_time").setAttribute("value" , "숫자를 입력하세요(초)");




// 특정 key 에서 HTML에 코드 삽입을 할수 있음 
document.getElementById("input_time").onkeydown = function(e)
{
    var eventCode = e.code;
    // 지금 찍히는 키보드 문자를 알수 있음 
    console.log(eventCode, typeof eventCode);
    interval = 1000 * Number(eventCode);
    console.log(interval);
    
};








// 6초후 새로고침
//setTimeout("location.reload()",5000);


// 주어진 배열에서 요소 1개를 랜덤하게 골라 반환하는 함수
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}














