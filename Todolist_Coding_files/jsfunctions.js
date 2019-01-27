window.$ = window.jQuery = require("jquery");

const menuFunctions = {
  sizeSmall() {
    $('#menu').css('height', '700px');
  }
}

function addTache() {
  if ($("#titre").val() != '' && $("#tache").val() != '') {
    var titre = $("#titre").val();
    var text = $("#tache").val();

    $("#liste-tache").append("<div class = 'tacheCard'> <h2>" + titre + "</h2><p>" + text + "</p><button class='supprimer'>x</button></div>"
    );
    $("#titre").val("");
    $("#tache").val("");
  }
}

$("#main").on("click", ".supprimer", function () {
  $(this).parent().remove();
});

var day = new Date();
var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
$("#jourDate").html(days[day.getDay()]);