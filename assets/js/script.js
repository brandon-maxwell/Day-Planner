var timeDisplay = $('#currentDay');
var hour = moment().hour();
var timeBlock = $('.container');
var saveIcon = document.getElementsByClassName('.material-icons');

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
//----------------------------------------------------
$(".saveBtn").on("click", function () {
    
})

//----------------------------------------------------
//if states for past/present/future
//----------------------------------------------------    
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