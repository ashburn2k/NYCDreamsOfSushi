$.getJSON('yelp_data.json').then(function (yelp_data) {

  var response = yelp_data;

  //console.log(response);

  var length = response.businesses.length; 

  // for (var i = 0; i < length; i++) {

  //   var restaurant = $('<div id="' + i + '" class="collection">'
  //         + '<a href="' + response.businesses[i].url + '">'
  //           + '<img width="300px" height="300px" src="' + response.businesses[i].image_url + '">'
  //         + '</a>'
  //         + '<h4>' + response.businesses[i].name + '</h4>' 
  //         + '<img class="rating_img" src="' + response.businesses[i].rating_img_url + '">'
  //         + '<p>' + response.businesses[i].location.display_address[0] + '</p>'
  //         + '<p>' + response.businesses[i].location.display_address[1] + '</p>'
  //         + '<p>' + response.businesses[i].location.display_address[2] + '</p>'
  //         + '<p>' + response.businesses[i].display_phone + '</p>'
  //         + '<span class="change-icon">'
  //           + '<i class="fa fa-heart-o fa-lg"></i>'
  //           + '<i class="fa fa-heart fa-lg"></i>'
  //         + '</span>'
  //     + '</div>');

  //   $(restaurant).on('click', '.change-icon', function(){
  //     console.log($(this).parent()[0].id);
  //   });

  //   $('.restaurantsContainer').append(restaurant);

  // };

  $.each(yelp_data.businesses,function(index,element)
  {
    console.log(index);
    console.log(element);

    var restaurant = $('<div id="' + index + '" class="collection">'
          + '<a href="' + element.url + '">'
            + '<img width="300px" height="300px" src="' + element.image_url + '">'
          + '</a>'
          + '<h4>' + element.name + '</h4>' 
          + '<img class="rating_img" src="' + element.rating_img_url + '">'
          + '<p>' + element.location.display_address[0] + '</p>'
          + '<p>' + element.location.display_address[1] + '</p>'
          + '<p>' + element.location.display_address[2] + '</p>'
          + '<p>' + element.display_phone + '</p>'
          + '<span class="change-icon">'
            + '<i class="fa fa-heart-o fa-lg"></i>'
            + '<i class="fa fa-heart fa-lg"></i>'
          + '</span>'
      + '</div>');

    $('.restaurantsContainer').append(restaurant);

  });

});

// Favorites

var FavoritesArr = [];