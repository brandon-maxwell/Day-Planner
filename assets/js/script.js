var timeDisplay = $('#currentDay');
var timeBlock = $('.container')
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

//----------------------------------------------------