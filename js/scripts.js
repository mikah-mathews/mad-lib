$(document).ready(function(){
  $("#form-one").submit(function(event) {
    var person1Input = $("input#person1").val();
    var place1Input = $("input#place1").val();
    var monsterInput = $("input#monster").val();
    var scaryNoiseInput = $("input#scary-noise").val();
    var exclamationInput = $("input#exclamation").val();
    var trapInput = $("input#trap").val();
    var villainInput = $("input#villain").val();


    $(".person1").text(person1Input);
    $(".place1").text(place1Input);
    $(".monster").text(monsterInput);
    $(".scary-noise").text(scaryNoiseInput);
    $(".exclamation").text(exclamationInput);
    $(".trap").text(trapInput);
    $(".villain").text(villainInput);

    $("#story").show();

    event.preventDefault();
  });
});