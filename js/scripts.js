$(document).ready(function(){
  $("#form-one").submit(function(event) {
    var blanks = ["person1", "place1", "monster", "scary-noise", "exclaimation", "trap", "villain"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    })

    $("#story").show();

    event.preventDefault();
  });
});