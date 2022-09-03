$(() => {
    // let bar = 0;
    // $("input[type=text]").one("keyup", (e) => {
    //     let size = $("input").length;
    //     // let valid = $("input ")
    //     bar = bar + $(".status").width() / size;
    //     $(".status .bar").animate({
    //         width: `${bar}`
    //     });
    // });
    $("form").validate({
        rules: {
            placeName: { required: true, minlength: 4 },
            issue_Select: { valueNotEquals: "default" },
            expired_Select: { valueNotEquals: "default" },
        },
        messages: {
            placeName: "",
            issue_Select: "",
            expired_Select: ""
        }
    });
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "");

    $("input, select").on("change", (e) => {
        let size = $("input, select").length;
        // let valid = $("input ")
        // if ($(e.target).valid()) {

        // }

        let count = 0;
        $("input, select").each(function () {
            if ($(this).valid()) count++;
        })

        let bar = ($(".status").width() / size) * count;
        $(".status .bar").animate({
            width: `${bar}`
        });


    });

    $(".back").on("click", () => {
        $("#registration_form").trigger("reset");
        $("input").trigger("change");
    })
})