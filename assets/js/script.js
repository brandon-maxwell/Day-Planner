var timeDisplay = $('#currentDay');
var hour = moment().hour();

//----------------------------------------------------
//shows current date & time
//----------------------------------------------------
function displayTime() {
    var currentTime = moment().format('LLLL');
    timeDisplay.text(currentTime);
}
displayTime();
setInterval(displayTime, 1000);

//----------------------------------------------------
//save button click event
//defines key and value by making the key the row and value
//the user input. then uses key/input to add to local storage
//----------------------------------------------------
$(".saveBtn").click(function () {
    var input = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, input);
})

//----------------------------------------------------
//pulling from local storage what was saved = targeting row
//then child class and then adding value of local storage
//----------------------------------------------------
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

//----------------------------------------------------
//if statements for past/present/future & updates w/out reloading page
//----------------------------------------------------    
function colorChange() {
    $('.time-block').each(function () {
        var val = $(this).attr('id');

        if (val > hour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");

        } else if (val == hour) {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");

        } else if (val < hour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
    })
}

colorChange();
setInterval(colorChange, 1000);