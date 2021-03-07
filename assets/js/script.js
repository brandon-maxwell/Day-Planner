var timeDisplay = $('#currentDay');
var hour = moment().format('h a');
// var input = getElementsByClassName(".textInput");
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
setInterval(displayTime,1000);

//----------------------------------------------------
//save button click event
//----------------------------------------------------
// saveIcon.addEventListener("click", function (event) {
//     var textBox = document.getElementById('input').value;
// })

//----------------------------------------------------
//if states for past/present/future
//----------------------------------------------------
$('.textInput').each(function(){
    var val = parseInt($(this).prop('id'));
    if (val > hour) {
        $(this).addClass("future");
    }else if (val == hour) {
        $(this).addClass("present");
    }else if (val < hour) {
        $(this).addClass("past")
    }
})