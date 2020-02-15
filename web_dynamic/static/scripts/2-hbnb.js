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
        const url = 'http://127.0.0.1:5002/api/v1/status/';
        $.get(url, function(data) {
            const className = $('.available').attr('class');
            let response = data.status;
            if(response === 'OK') {
              $('#api_status').addClass('available');
            } else {
              $('#api_status').removeClass('available');
            }
        })
}