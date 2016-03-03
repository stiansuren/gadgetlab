
var authenticationSuccess = function() { console.log("Succeeded authentication"); };
var authenticationFailure = function() { console.log("Failed authentication"); };

var myList = '56a27fb6a5d9d612e1c88341';
var cards = '/lists/'+myList+'/cards';
var actionId = '56a35a26947425b497d38c92';

// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });

$(window).load(function(){
  Trello.authorize({
    type: "redirect",
    name: "Interactive Gadget Lab",
    scope: {
      read: true,
      write: false },
    success: authenticationSuccess,
    error: authenticationFailure
  });

  Trello.get(cards, success, error);
});

// $grid.imagesLoaded( function() {
//     $grid.masonry('layout');
//     console.log('hello');
//   });

var success = function(cardArray) {

    for (card in cardArray){
      renderCard(cardArray[card], card);
    }
};

var error = function(errorMsg) {
    console.log("Noooo");
};


// Render a card
var renderCard = function(card, cardOrder){
  // Render item and description
  $('.grid').append('<div class="grid-item" id=' + cardOrder + '><h1>' + card.name + '</h1><p>' + card.desc + '</p></div>');

  // Get member from card
  var members = card.idMembers;
  var memberId = members[0];

  // Get attachment
  if (card.idAttachmentCover != undefined){
    var attachmentObject = Trello.get('/cards/' + card.id + '/attachments/' + card.idAttachmentCover, function(text){
        var attachment = text;
        console.log(attachment.url);
        $('#' + cardOrder).prepend('<img src="' + attachment.url + '">');
        // if (cardOrder >= 7){
        //   $('.grid').masonry({
        //     itemSelector: '.grid-item',
        //     columnWidth: '.grid-sizer',
        //     percentPosition: true
        //   });
        //   console.log('last picture has loaded')
        // };
    });
  };

  // If member, render member. If no member, the item is available
  if (memberId != undefined){
    var member;
    var memberObject = Trello.get('/members/' + memberId + '/fullName', function(text){
      member = text["_value"];
      $('#' + cardOrder).append('<h3> Lånt av: ' + member + ' </h3>');
    });
  }
  else {
    $('#' + cardOrder).append('<h3> Ledig </h3>');
  }
  console.log(cardOrder)
};


