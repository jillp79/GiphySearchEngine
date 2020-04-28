jQuery(document).ready(function($) {

    $('#search-button').click(getData);

    function getData(event) {
        event.preventDefault();
        var input = encodeURIComponent($('#search-input').val().trim())

        var imgUrls = $.get(`https://api.giphy.com/v1/gifs/search?q='${input}'&api_key=Fp5fVtSkbXPwotTxNZem6K4uQRFBJQ7t&limit=20`)
        imgUrls.done(function(response) {
            var urls = response.data;
            $('#gifDiv').empty();
            for (url of urls) {
                $('#gifDiv').append(`<img src="${url.images.original.url}" alt="giphy img"/>`);
            };
        });
        imgUrls.fail(function() {
            alert('Error, try again later');
        });
    };
});