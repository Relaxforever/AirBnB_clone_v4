window.onload = function () {
    let amenities = {};
    let listAmeni = [];

    function removeItem(list, item) {
        for(let n = 0; n < list.length; n++) {
            if(list[n] === item) {
                list.splice(n, 1);
            }
        }
      }

    $('input').click( function() {
        if( $(this).is(':checked')) {
            amenities[$(this).attr('data-name')] = $(this).attr('data-id');
            listAmeni.push($(this).attr('data-name'));
            $('#checked').text(listAmeni);
        }
        else {
            delete amenities[$(this).attr('data-name')];
            removeItem(listAmeni, $(this).attr('data-name'));
            $('#checked').text(listAmeni);
        }
        console.log(amenities);
    });   
        const url = 'http://127.0.0.1:5001/api/v1/status/';
        $.get(url, function(data) {
            const className = $('.available').attr('class');
            let response = data.status;
            if(response === 'OK') {
              $('#api_status').addClass('available');
            } else {
              $('#api_status').removeClass('available');
            }
        });
        const urlplaces = 'http://127.0.0.1:5001/api/v1/places_search/';
        $.ajax({
            type: "POST",
            url: urlplaces,
            data: '{}',
            dataType: 'json',
            contentType: 'application/json',
            success: function getPlaces(data) {
                for(let place of data) {
                    $('.places').append(`<article>

                    <div class="title">
            
                      <h2>` + place.name + `</h2>
            
                      <div class="price_by_night">
            
                    ` + place.price_by_night + `
            
                      </div>
                    </div>
                    <div class="information">
                      <div class="max_guest">
                    <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            
                    <br />
            
                    ` + place.max_guest + ` Guests
            
                      </div>
                      <div class="number_rooms">
                    <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
            
                    <br />
            
                    ` + place.number_rooms + ` Bedrooms
                      </div>
                      <div class="number_bathrooms">
                    <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
            
                    <br />
            
                    ` + place.number_bathrooms + ` Bathroom
            
                      </div>
                    </div>
            
                    <!-- **********************
                     USER
                     **********************  -->
                    <div class="description">
            
                      ` + place.description + `
            
                    </div>
            
                  </article>`);
                }
            }
          });
}