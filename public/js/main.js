// Run on load
$(window).load(function(){

  // Get cards from Tilgjenglig list
  $.get('/trelloCards', function(data){
    for (object in data){
      renderCard (data[object], object);
    }
  })

});

// Render the Trello cards
function renderCard (card, order) {

  // Add container and header
  $('#cards').append('<div class="card" id="' + order + '"></div>');
  $('#' + order).append('<h3 class="card card-header">' + card.name + '</h3>');

  // Add description
  if (card.desc === ""){
    $('#' + order).append('<p class="card card-header">Denne gadgeten har ingen beskrivelse, men den er uansett awesome. Google!</p>');
  }
  else {
    $('#' + order).append('<p class="card card-header">' + card.desc + '</p>');
  };

  // Check if the gadget is available and add options to either loan or to be on a waiting list
  if(card.badges["checkItems"] === card.badges["checkItemsChecked"]){
    $('#' + order).append('<h4>Tilgjenglig</h4>');
    $('#' + order).append('<button class="btn" type="submit">Låne ' + card.name + '</button>');
  }
  else{

    $.get('/currentLoaner/' + card.idChecklists[0], function(data){
      setCurrentLoaner(data);
    })

    function setCurrentLoaner(data){
      var currentLoaner = data.checkItems[data.checkItems.length - 1].name;
      $('#' + order).append('<h4>Lånes av ' + currentLoaner + '</h4><button class="btn venteliste" type="submit">Venteliste</button>');
    };
  }
};

function loanGadget (input){
  var loanPerson = {};
  loanPerson.name = input;
  loanPerson.checked = "true";

  jQuery.ajax ({
       url: '/postName',
       type: "POST",
       data: JSON.stringify(loanPerson),
       contentType: "application/json; charset=utf-8",
       success: function(data){
           console.log('suksess');
       }
    });
};

