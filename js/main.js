var counter = 0;

$('td').on("click", function() {
    if (counter % 2 == 0 ) {
        $(this).html("X");
        counter++;
        $('#counter').text(counter);
    } else {
        $(this).html("O");
        counter++;
        $('#counter').text(counter);
    }
});
