"use strict";
$(() => {
    console.log("Server is Listening...");
    let ItemsArr = [];
    $('#txt_item').focus();
    $('#btn-add').click(function () {
        let _text = String($('#txt_item').val());
        const _Id = ItemsArr.length;
        let item = {
            Id: _Id == 0 ? 1 : _Id + 1,
            Text: _text,
            isactive: true
        };
        if (_text === '') {
            Modal("Error", `Item cannot be Empty.`);
        }
        else if (ItemsArr.find(x => x.Text.toLowerCase().trim().toString() === _text.toLowerCase().trim().toString())) {
            Modal("Error", `Item ${_text} already Exists.`);
        }
        else {
            ItemsArr.push(item);
            Modal("Success", `Item ${_text} Added Successfully.`);
            DisplayItems();
        }
    });
    // modal function
    const Modal = (heading, body) => {
        $('#exampleModal').modal('show');
        $('#modal_heading').text(heading);
        $('#modal_body').text(body);
    };
    // display items function 
    const DisplayItems = () => {
        let list = $('#item-list');
        list.empty();
        ItemsArr.forEach(e => {
            const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 float-end " viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg>`;
            const li = $("<li></li>").addClass("list-group-item bg-success p-3 text-dark bg-opacity-25 rounded-1 mt-1");
            li.attr('id', e.Id);
            const span = $('<span></span>').append(icon);
            li.text(e.Text);
            li.append(span);
            list.append(li);
        });
    };
    $("body").on("click", ".list-group li", function (event) {
        const id = $(this).attr('id');
        if (id === undefined) {
            return id;
        }
        if (confirm("Do you want to delete")) {
            let idx = ItemsArr.findIndex(x => x.Id === Number(id));
            ItemsArr.splice(idx, 1);
            DisplayItems();
            Modal("Success", `Item Deleted Successfully.`);
            return true;
        }
        // return false;
    });
});
