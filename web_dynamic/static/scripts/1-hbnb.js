window.onload = function () {
    let amenities = {};
    let listAmeni = [];
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
    function removeItem(list, item) {
        for(let n = 0; n < list.length; n++) {
            if(list[n] === item) {
                list.splice(n, 1);
            }
        }
      }
}
