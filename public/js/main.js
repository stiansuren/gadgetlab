// Run on load
$(window).load(function(){

  // Get cards from Tilgjenglig list
  $.get('/trelloCards', function(data){
    for (object in data){
      renderCard (data[object], object);
    }
  })

  var loanPerson = {};
  loanPerson.name = "Rune";
  loanPerson.checked = "true";
  // loanPerson.pos = "bottom";

  // JSON.stringify(loanPerson);

  // $.post('postName', loanPerson)
  //   .done(function(data){
  //     console.log(data);
  //   });

  var newCard = {};
  newCard.name = "Enda et kort";
  newCard.due = "null";

  var cardOne = {"name":"Sjekk ut dette", "due":"null"};

  jQuery.ajax ({
     url: '/postName',
     type: "POST",
     data: JSON.stringify(loanPerson),
     // dataType: "json",
     contentType: "application/json; charset=utf-8",
     success: function(data){
         console.log('suksess');
     }
  });

  jQuery.ajax ({
     url: '/postCard',
     type: "POST",
     data: JSON.stringify(cardOne),
     // dataType: "json",
     contentType: "application/json; charset=utf-8",
     success: function(data){
         console.log('suksess');
     }
  });


});

// Render the Trello cards
function renderCard (card, order) {
  $('#cards').append('<div class="card" id="' + order + '"></div>');
  $('#' + order).append('<h3 class="card card-header">' + card.name + '</h3>');

  if (card.desc === ""){
    $('#' + order).append('<p class="card card-header">Denne gadgeten har ingen beskrivelse, men den er uansett awesome. Google!</p>');
  }
  else {
    $('#' + order).append('<p class="card card-header">' + card.desc + '</p>');
  };
};

