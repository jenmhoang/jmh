function toggleImg(tag){
    $("#mainPic").fadeOut(500);
    $("#underPicMain").hide();
    $("#togglePic").fadeOut(200, function() {
        $("#togglePic").attr("src",$(tag).attr("href"));
    }).fadeIn(500);
  }

  function toggleMain(tag){
    $("#underPicMain").show();
    $("#mainPic").fadeOut(200, function() {
        $("#mainPic").attr("src",$(tag).attr("href"));
    }).fadeIn(500);
    $("#underPicMain").attr("src",$("#mainPic").attr("src"));
  }

  $(document).ready(function(){
    var ids = ["#p1-1-1", "#p1-1-2", "#p1-3-1", "#p1-3-2", "#p1-3-3", "#p1-3-4", "#p1-3-5", 
    "#p1-3-6", "#p1-3-7", "#p1-3-8", "#p1-3-9"];
    $.each(ids, function(i, v) {
        $(v).click(function() {
            toggleImg(this);
            return false;
        });
    });

    var mainPics = ["#p1", "#p2", "#p3"];
    $.each(mainPics, function(i, v) {
        $(v).click(function() {
            toggleMain(this);
            return false;
        });
    });
});