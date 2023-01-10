$(document).ready(function() {
    $('#btnAdd').click(function() {
        let input = $('#taskInput').val();
        if (input) { 
           $('.tasksBox').append('<div class = "AddedItems">' + input + '<button id="btnDelete">Delete</button> <button id="btnDone">Done</button>  </div>');
           $('#taskInput').val('');
        }
    });

    $('.tasksBox').on('click', '#btnDelete', function() {
        $(this).parent().fadeOut(200);
    });
    $('.tasksBox').on('click', '#btnDone', function() {
        $(this).parent().toggleClass("TaskDone");
    });

})


