$(document).ready(function(){

  $("#questionaire").submit(function(event) {


    // declaring variables from user input
    var name = $("#name input").val();
    var age = parseInt($("#age input").val());
    var entertainment = $("#entertainment").val();
    var result = "Thanks, <strong>" + name + "</strong>, your ideal celebrity partner is: ";

    // prevent form submition default action
    event.preventDefault();

    // check to see if name variable is falsey
    if (!name) {
      // if falsey show warning
      $("#name-warning").show();
      exit;
    } else {
      // else keep warning hidden
      $("#name-warning").hide();
    };

    if (!age) {
      // if falsey show warning
      $("#age-warning").show();
      exit;
    } else {
      // else keep warning hidden
      $("#age-warning").hide();
    };

    if (!entertainment) {
      // if falsey show warning
      $("#entertainment-warning").show();
      exit;
    } else {
      // else keep warning hidden
      $("#entertainment-warning").hide();
    };

    // hides the original form upon submission
    $("#form-wrapper").hide();

    // uses name variable as part of the results display
    $(".result").html(result);

    // check if user young or "seasoned"
    if (age >= 40) {
      // if user is greater than or equal to 40, check prefered entertainment
      // show specific result
      if (entertainment === "music") {
        $("#old-music").show();
      } else if (entertainment === "books") {
        $("#old-books").show();
      } else {
        $("#old-movies").show();
      }

    } else {
      // if user is less than 40, check prefered entertainment
      // show specific result
      if (entertainment === "music") {
        $("#young-music").show();
      } else if (entertainment === "books") {
        $("#young-books").show();
      } else {
        $("#young-movies").show();
      }

    };

     // end conditionals

  });
});
