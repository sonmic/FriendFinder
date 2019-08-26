
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

// scroll btn

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}