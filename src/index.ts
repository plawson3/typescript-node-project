$(() => {

    console.log("Server is Listening...");

    $('#txt_para').keyup(function (event) {
        let value: string = $(this).val() as string;
        let _value = value.match(/\w+/g)!;

        if (_value !== undefined) {
            $('#words').text(_value.length)
            $('#chars').text(value.length)
        }
    });

    const Calc = () => {
        let value: string = String($('#txt_para').val());

        let _value = value.match(/\w+/g)!;
        
        if (_value !== undefined) {
            $('#words').text(_value.length)
            $('#chars').text(value.length)
        }
    }

    $('#calc').on('click', () => {
        Calc();
    })

    $('#Clear').on('click', () => {
        $('#txt_para').val('');
        $('#words').text(0)
        $('#chars').text(0)
    })

});