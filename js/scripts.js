$(document).ready(function(){

  $("#questionaire").submit(function(event) {

    var name = $("#name input").val();
    var age = parseInt($("#age input").val());
    var entertainment = $("#entertainment").val();

    event.preventDefault();

    if (!name) {
      $("#name-warning").show();
      exit;
    } else {
      $("#name-warning").hide();
    };


    if (!age) {
      $("#age-warning").show();
      exit;
    } else {
      $("#age-warning").hide();
    };

    if (!entertainment) {
      $("#entertainment-warning").show();
      exit;
    } else {
      $("#entertainment-warning").hide();
    };

    $("#form-wrapper").hide();
    // check if user young or seasoned
    if (age >= 40) {

      if (entertainment === "music") {
        $("#old-music").show();
      } else if (entertainment === "books") {
        $("#old-books").show();
      } else {
        $("#old-movies").show();
      }

    } else {

      if (entertainment === "music") {
        $("#young-music").show();
      } else if (entertainment === "books") {
        $("#young-books").show();
      } else {
        $("#young-movies").show();
      }

    }; // end conditionals

  });
});
