$(document).ready(function() {


    for (i = 0; i < 10; i++) {
        $('td').on("click", function () {
            if (i % 2 == 0) {
                $(this).html("X");
            } else {
                $(this).html("O");
            }
        });

    }
});