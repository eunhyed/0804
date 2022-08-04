$(document).ready(function(){

    /*환경설정 페이지*/
    $("#set").click(function(){
        $("#setpage").stop().animate({ left: 0 }, 300, function () {
        });
    });
    $(".settop button").click(function(){
        $("#setpage").stop().animate({left:"100vw"}, 300, function(){
        });
    });

    /*footer 버튼 클릭시 색 변경*/


    /*footer버튼 클릭시 색 변경
    var foobtn2 = document.getElementsByClassName("foobtn2");

    function handleClick(event) {
      console.log(event.target);
      // console.log(this);
      // 콘솔창을 보면 둘다 동일한 값이 나온다

      console.log(event.target.classList);

      if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
      } else {
        for (var i = 0; i < foobtn2.length; i++) {
          foobtn2[i].classList.remove("clicked");
        }

        event.target.classList.add("clicked");
      }
    }

    function init() {
      for (var i = 0; i < foobtn2.length; i++) {
        foobtn2[i].addEventListener("click", handleClick);
      }
    }

    init();*/
});