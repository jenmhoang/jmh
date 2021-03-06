var pagination = document.getElementById("pagination");
var tabs = pagination.getElementsByClassName("tab");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    var curr = document.getElementsByClassName("active");
    curr[0].className = curr[0].className.replace(" active", "");
    this.className += " active";
  });
}

function openTab(section) {
  $(section).fadeIn();
  $("div").scrollTop(0);
}

function closeTab() {
  var ids = ["#dt1", "#dt2", "#dt3", "#dt4"];
  $.each(ids, function (i, v) {
    $(v).hide(0);
  });
}

$(document).ready(function () {
  var tabs = ["#t1", "#t2", "#t3", "#t4"];
  var ids = ["#dt1", "#dt2", "#dt3", "#dt4"];
  $.each(ids, function (i, v) {
    $(tabs[i]).click(function () {
      closeTab();
      openTab(v);
      return false;
    });
  });
});
