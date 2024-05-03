$(document).ready(function () {
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    // console.log(pageY);

    var sec_7_top = $(".section_7").offset().top;
    console.log(sec_7_top);

    if (pageY >= sec_7_top) {
      $(".section_7 img").addClass("fade_active");
    } else {
      $(".section_7 img").removeClass("fade_active");
    }
    // 보통은 위 섹션이 절반 정도 왔을 때 글자가 올라오게 함.
  });

  $(".btn")
    .each(function (num) {
      $(this).attr("data-num", num);
    })
    .click(function () {
      var i = $(this).attr("data-num");

      $(".btn").removeClass("green");
      $(this).addClass("green");

      $(".con_box").hide();
      $(".con_box").eq(i).show();
    });
}); //end
