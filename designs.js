// Select color input


// Select size input
// When size is submitted by the user, call makeGrid()

$('#submit').click(function (e) {
    var gridWidth = $('#inputWidth').val();
    var gridHeight = $('#inputHeight').val();
    var cellColor = $('#colorPicker').val();
    e.preventDefault();

    $('#pixelCanvas').html('');
    makeGrid(gridWidth, gridHeight);
});



function makeGrid(gridWidth, gridHeight) {

    var gridWidth = $('#inputWidth').val();
    var gridHeight = $('#inputHeight').val();

    for (var i = 0; i < gridHeight; i++) {
        $('#pixelCanvas').append("<tr id='tableRows" + i + "'> </tr>");

        var eachRow = '#tableRows' + i;
        for (var j = 0; j < gridWidth; j++) {
            $(eachRow).append("<td class='tableCols'> </td>");

            $('.tableCols').click(function () {
                var cellColor = $('#colorPicker').val();
                $(this).css("background-color", cellColor);
            });
        };
    };

    var canvas_length = $('#pixelCanvas').children().length;
    if ((canvas_length) > 0) {
        $('#design_text').css("display", "none");
    }
};

