



// 메뉴바 이름설정 

var menu01 = document.getElementById("menu01");
var menu02 = document.getElementById("menu02");
var menu03 = document.getElementById("menu03");
var menu04 = document.getElementById("menu04");

menu01.innerHTML = "악보";
menu02.innerHTML = "코드학습";
menu03.innerHTML = "아이도르";
menu04.innerHTML = "테스트용";
menu05.innerHTML = "영어학습";
menu06.innerHTML = "경제";

// 링크 
document.getElementById("menu01").setAttribute("href", "index.html" );
document.getElementById("menu02").setAttribute("href" , "02.code.html");
document.getElementById("menu03").setAttribute("href" , "03.idol.html");
document.getElementById("menu04").setAttribute("href" , "test.html");



/**
 * 
 *  메뉴바 ACTIVE 활성화 
 * 
 */

var active = ["01","02","03","04","05","06"];

for(var i = 0 ; i<active.length; ++i)
{
    document.getElementById("active"+ active[i]).onmouseover = function() 
{
    this.setAttribute("class", "active");
};

document.getElementById("active" + active[i]).onmouseout = function ()
{
    this.setAttribute("class" ,"")
};

}





/************************************ */

