$.getJSON('yelp_data.json').then(function (yelp_data) {

  var response = yelp_data;

  console.log(response);

  var length = response.businesses.length; 

  for (var i = 0; i < length; i++) {

    $('.restaurantsContainer').append(
        '<div id="' + i + '" class="collection">'
          + '<a href="' + response.businesses[i].url + '">'
            + '<img width="300px" height="300px" src="' + response.businesses[i].image_url + '">'
          + '</a>'
          + '<h4>' + response.businesses[i].name + '</h4>' 
          + '<img class="rating_img" src="' + response.businesses[i].rating_img_url + '">'
          + '<p>' + response.businesses[i].location.display_address[0] + '</p>'
          + '<p>' + response.businesses[i].location.display_address[1] + '</p>'
          + '<p>' + response.businesses[i].location.display_address[2] + '</p>'
          + '<p>' + response.businesses[i].display_phone + '</p>'
          + '<span class="change-icon">'
            + '<i class="fa fa-heart-o fa-lg"></i>'
            + '<i class="fa fa-heart fa-lg"></i>'
          + '</span>'
      + '</div>');

  };

});

// Favorites

var FavoritesArr = [];



// $("h2").on('click', 'p.test', function() {
//     alert('you clicked a p.test element');
// });

$('.restaurantsContainer').on('click', '.change-icon', function() {
  console.log("Hello!");
});



// $('.collection').click( function () {

//   // console.log($this.parent().parent());

//   console.log("is this responding?");

// });



// $('change-icon').on('click', function () {

//   console.log('hello!!!!');

// });




















/*
  $(function(){
    $('#div16').click({ param1: '#scrollspan8', param2: 'click ', 
                           param3: '**JavaScript event triggered**  ' }, addText2);

    function addText2(event) {
      $(event.data.param1).append(event.data.param2 + ''<code>' + event.data.param3+ ''</code>');
    }
  });
// */


// var faveList = [];

// $('fa.fa-heart.fa-lg').click()






// $('favoritesContainer').append();