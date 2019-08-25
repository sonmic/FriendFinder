$(".meanLink").on("mouseenter mousemove", function(e) {
  $(".mean").css("top", e.clientY + 15);
  $(".mean").css("left", e.clientX + 15);
});
$(".meanLink").on("mouseleave", function(e) {
  $(".mean").css("top", -500);
  $(".mean").css("left", -500);
});

$(function() {
  $(".question").barrating("show", {
    theme: "bars-pill",
    initialRating: "1",
    showValues: true,
    showSelectedRating: false,
    allowEmpty: false
  });

  $("#answers").on("submit", function(event) {
    event.preventDefault();
    const form = this;
    const json = JSON.stringify(
      Array.from(new FormData(form).entries()).reduce(
        (m, [key, value]) => Object.assign(m, { [key]: value }),
        {}
      )
    );
    console.log(json);
    $.ajax({
      url: "/api/friends",
      type: "POST",
      data: json,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        console.log("Did it", data);
        $("#friendName").text(data.name);
        $("#friendPhoto").attr("src", data.photo);
        $("#popup").modal();
      }
    });
  });
});
