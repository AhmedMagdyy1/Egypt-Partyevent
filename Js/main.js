// to make close and open btn toggle nav
$("#btn,#close").click(function () {
  let navigationWidth = $(".navigation").outerWidth();
  if ($(".navigation").css("left") == "0px") {
    $(".navigation").animate({ left: -navigationWidth });
  } else {
    $(".navigation").animate({ left: 0 });
  }
});
// to make btn make toggle with p
$(".SingerBtn").click(function () {
  //   $(".singerInfo").slideToggle()
  $(this).parent().children(".singerInfo").slideToggle();
});

// to make dynamic num with textarea
$("#writeText").bind("input propertychange", function () {
  if (this.value.length) {
    $("#messageCount").html(100 - this.value.length);
  } else {
    $("#messageCount").html(100);
  }
});
// to make a countdown timer
function durationDate() {
  var countDownDate = new Date("Jul 22, 2023 21:00:00").getTime();
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    $("#Day").html(days + "d");
    $("#Hour").html(hours + "h");
    $("#Min").html(minutes + "m");
    $("#Sec").html(seconds + "s");
  }, 1000);
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  } else {
    return timeleft;
  }
}
durationDate();
