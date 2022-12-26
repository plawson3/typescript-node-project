"use strict";
$(() => {
    console.log("Server is Listening...");
    $('#txt_para').keyup(function (event) {
        let value = $(this).val();
        let _value = value.match(/\w+/g);
        if (_value !== undefined) {
            $('#words').text(_value.length);
            $('#chars').text(value.length);
        }
    });
    const Calc = () => {
        let value = String($('#txt_para').val());
        let _value = value.match(/\w+/g);
        if (_value !== undefined) {
            $('#words').text(_value.length);
            $('#chars').text(value.length);
        }
    };
    $('#calc').on('click', () => {
        Calc();
    });
    $('#Clear').on('click', () => {
        $('#txt_para').val('');
        $('#words').text(0);
        $('#chars').text(0);
    });
});
