// Run on load
$(window).load(function(){

  //Get the Tilgjengelig list
  $.get('/trelloList', function(data){
    console.log(data);
  })

  // Get cards from Tilgjenglig list
  $.get('/trelloCards', function(data){
    for (object in data){
      console.log (data[object]);
      renderCard (data[object], object);
    }
  })

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
}

