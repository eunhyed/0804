$(document).ready(function () {
  /*$(function() {
      $('.switch input').click( function() {
        if( $(this).html() == '인증번호 받기' ) {
          $(this).html('확인');
        }
        else {
          $(this).html('인증번호 받기');
        }
      });
    });*/



    /*버튼 클릭시 페이지 변경*/
    $(".page2").hide();

  $(".btnmom button").eq(0).click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".page1").show();
      $(".page2").hide();
  });
  $(".btnmom button").eq(1).click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".page2").show();
    $(".page1").hide();
  });




/*막대그래프 차트*/
  //page1
  var xValues = ["월", "화", "수", "목", "금","토","일"];

  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  var yValues = [6, 10, 8, 12, 11, 4, 7, 0];

  var barColors = ["#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3"];
//b태그에 삽입된다. 평균값 구하기
  let ave1 = average(yValues);
  console.log(ave1); //7.25
  let ave2 = String(ave1);
  console.log(ave2);
  let ave3 = ave2.split('.'); 
 // let ave4 = ave2.split('.', 0); 
  console.log(ave3); //['7', '25']
  let hou = ave3[0];
  console.log(hou);//'7'
  let min = ave3[1];
  console.log(min);//'25'
  //$('#hou').css({"background":"red","display":'inline-block'});
  $('#hou').text(hou);
  $('#min').text(min);

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "1주간 기상 패턴 입니다."
      }
    }
  });


  //page2
  var xValues = ["1주", "2주", "3주", "4주", "5주"];

  const averag = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  var yValues = [7, 10, 8, 12,11, 0];

  var barColors = ["#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3", "#83a3c3"];
//b태그에 삽입된다.
  let av1 = average(yValues);
  console.log(av1); //7.25
  let av2 = String(av1);
  console.log(av2);
  let av3 = av2.split('.'); 
 // let ave4 = ave2.split('.', 0); 
  console.log(av3); //['7', '25']
  let hour = av3[0];
  console.log(hour);//'7'
  let mini = av3[1];
  console.log(mini);//'25'
  //$('#hou').css({"background":"red","display":'inline-block'});
  $('#hour').text(hour);
  $('#mini').text(mini);

  new Chart("Chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "1개월간 기상 패턴 입니다."
      }
    }
  });

  /*footer버튼 클릭시 색 변경*/
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

  init();


});/////////////////////////////전체끝